import InputStyled from '@/ant-design/InputStyled';
import React from 'react';

interface Props {}

const InputModule: React.FC<Props> = (props) => {
  const [value, setValue] = React.useState('');

  const handleChange = (e: any) => {
    const { value } = e.target;

    const reg = /^-?\d*(\.\d*)?$/;

    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      setValue(value);
    }
  };

  return (
    <InputStyled
      value={value}
      onChange={handleChange}
      className="has_suffix"
      placeholder="Nhập số tiền..."
      suffix="VNĐ"
    />
  );
};

export default InputModule;
