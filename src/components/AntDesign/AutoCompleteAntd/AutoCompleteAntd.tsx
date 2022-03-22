import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import {
  AutoCompleteStyled,
  dropdownStyle,
  MenuStyled,
  Wrapper,
  Ticker,
  NameVi,
} from './AutoCompleteAntd.styles';
import COMPANY from '@/assets/json/COMPANY.json';

interface Props {
  onSelect: (value: any) => any;
  placeholder?: string;
  allowClear?: boolean;
}

const AutoCompleteAntd: React.FC<Props> = (props) => {
  const { onSelect, placeholder = `Mã cổ phiếu...`, allowClear = true } = props;
  const [companys, setCompanys] = React.useState<any[]>(COMPANY.slice(0, 40));

  const handleSearch = (value: string) => {
    const searchCompany = COMPANY.filter(
      (company: any) =>
        company?.ticker?.toUpperCase().includes(value.toUpperCase()) ||
        company?.nameVi?.toUpperCase().includes(value.toUpperCase())
    ).slice(0, 40);

    setCompanys(searchCompany);
  };

  const handleSelect = (value: any) => {
    const company = COMPANY.find((company: any) => company?.ticker === value);
    onSelect(company);
  };

  return (
    <Wrapper>
      <AutoCompleteStyled
        onSearch={handleSearch}
        onSelect={handleSelect}
        allowClear={allowClear}
        placeholder={placeholder}
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

export default AutoCompleteAntd;
