import { ButtonProps } from 'antd';
import React from 'react';
import { ButtonStyled } from './ButtonAntd.styles';

interface Props extends ButtonProps {}

const ButtonAntd: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
};

export default ButtonAntd;
