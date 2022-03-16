import { PlusOutlined } from '@ant-design/icons';
import React from 'react';
import AutoCompleteStyled from './Simplize/AutoCompleteStyled';
import ButtonStyled from './Simplize/ButtonStyled';
import DropdownStyled from './Simplize/DropdownStyled';

interface Props {}

const App: React.FC<Props> = () => {
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
    </>
  );
};

export default App;
