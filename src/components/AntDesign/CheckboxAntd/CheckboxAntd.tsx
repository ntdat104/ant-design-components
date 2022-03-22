import { CheckboxProps } from 'antd';
import React from 'react';
import { CheckboxStyled } from './CheckboxAntd.styles';

interface Props extends CheckboxProps {}

const CheckboxAntd: React.FC<Props> = (props) => {
  const { ...rest } = props;
  return <CheckboxStyled {...rest} />;
};

export default CheckboxAntd;
