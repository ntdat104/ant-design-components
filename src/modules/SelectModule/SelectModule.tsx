import React from 'react';
import {
  dropdownStyle,
  MenuStyled,
  SelectStyled,
} from '@/ant-design/SelectStyled';

interface Props {}

const SelectModule: React.FC<Props> = (props) => {
  const [value, setValue] = React.useState('10');

  const handleSelect = React.useCallback((value: any) => {
    setValue(value);
    console.log('value: ', value);
  }, []);

  return (
    <SelectStyled
      value={value}
      onSelect={handleSelect}
      dropdownRender={(menu) => <MenuStyled>{menu}</MenuStyled>}
      dropdownStyle={dropdownStyle}
    >
      <SelectStyled.Option value={`10`}>{`10%`}</SelectStyled.Option>
      <SelectStyled.Option value={`20`}>{`20%`}</SelectStyled.Option>
      <SelectStyled.Option value={`30`}>{`30%`}</SelectStyled.Option>
      <SelectStyled.Option value={`40`}>{`40%`}</SelectStyled.Option>
      <SelectStyled.Option value={`50`}>{`50%`}</SelectStyled.Option>
      <SelectStyled.Option value={`60`}>{`60%`}</SelectStyled.Option>
      <SelectStyled.Option value={`70`}>{`70%`}</SelectStyled.Option>
      <SelectStyled.Option value={`80`}>{`80%`}</SelectStyled.Option>
      <SelectStyled.Option value={`90`}>{`90%`}</SelectStyled.Option>
      <SelectStyled.Option value={`100`}>{`100%`}</SelectStyled.Option>
    </SelectStyled>
  );
};

export default SelectModule;
