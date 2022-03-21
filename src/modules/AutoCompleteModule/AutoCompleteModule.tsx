import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import {
  AutoCompleteStyled,
  dropdownStyle,
  MenuStyled,
  Wrapper,
  Ticker,
  NameVi,
} from '@/ant-design/AutoCompleteStyled';
import COMPANY from '@/assets/json/COMPANY.json';

interface Props {
  onSelect: (value: any) => any;
}

const AutoCompleteModule: React.FC<Props> = (props) => {
  const { onSelect } = props;
  const [companys, setCompanys] = React.useState<any[]>(COMPANY.slice(0, 40));

  const handleSearch = React.useCallback((value: string) => {
    const searchCompany = COMPANY.filter(
      (company: any) =>
        company?.ticker?.toUpperCase().includes(value.toUpperCase()) ||
        company?.nameVi?.toUpperCase().includes(value.toUpperCase())
    ).slice(0, 40);

    setCompanys(searchCompany);
  }, []);

  const handleSelect = React.useCallback((value: any) => {
    const company = COMPANY.find((company: any) => company?.ticker === value);
    onSelect(company);
  }, []);

  return (
    <Wrapper>
      <AutoCompleteStyled
        onSearch={handleSearch}
        onSelect={handleSelect}
        allowClear={true}
        placeholder="Mã cổ phiếu..."
        dropdownRender={(menu) => <MenuStyled>{menu}</MenuStyled>}
        dropdownStyle={dropdownStyle}
      >
        {companys.map((company: any, index: number) => (
          <AutoCompleteStyled.Option key={index} value={company?.ticker}>
            <Ticker>{company?.ticker}</Ticker>
            <NameVi>{company?.nameVi}</NameVi>
          </AutoCompleteStyled.Option>
        ))}
      </AutoCompleteStyled>
      <SearchOutlined className="icon" />
    </Wrapper>
  );
};

export default AutoCompleteModule;
