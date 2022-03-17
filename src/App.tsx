import { PlusOutlined } from '@ant-design/icons';
import React from 'react';
import AutoCompleteStyled from './Simplize/AutoCompleteStyled';
import ButtonStyled from './Simplize/ButtonStyled';
import DropdownStyled from './Simplize/DropdownStyled';
import InputStyled from './Simplize/InputStyled';

interface Props {}

const App: React.FC<Props> = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (e: any) => {
    const { value } = e.target;

    const reg = /^-?\d*(\.\d*)?$/;

    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      setValue(value);
    }
  };

  return (
    <>
      <ButtonStyled>{`Thêm cổ phiếu`}</ButtonStyled>
      <ButtonStyled icon={<PlusOutlined />}>{`Thêm cổ phiếu`}</ButtonStyled>
      <ButtonStyled
        className="has_icon"
        icon={<PlusOutlined />}
      >{`Thêm cổ phiếu`}</ButtonStyled>
      <ButtonStyled
        className="has_icon color_blue"
        icon={<PlusOutlined />}
      >{`Thêm cổ phiếu`}</ButtonStyled>
      <AutoCompleteStyled />
      <DropdownStyled />
      <div style={{ maxWidth: 240 }}>
        <InputStyled
          value={value}
          onChange={handleChange}
          className="has_suffix"
          placeholder="Nhập số tiền"
          maxLength={15}
          suffix="VNĐ"
        />
      </div>
    </>
  );
};

export default App;
