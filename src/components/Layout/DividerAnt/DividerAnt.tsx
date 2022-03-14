import React from 'react';
import { Divider } from 'antd';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  dashed?: boolean;
  orientation?: 'left' | 'right' | 'center';
  orientationMargin?: string | number;
  plain?: boolean;
  type?: 'horizontal' | 'vertical';
}

const DividerAnt: React.FC<Props> = (props) => {
  const {
    className,
    style,
    children,
    dashed,
    orientation,
    orientationMargin,
    plain,
    type,
  } = props;

  return (
    <Divider
      className={className}
      style={style}
      dashed={dashed}
      orientation={orientation}
      orientationMargin={orientationMargin}
      plain={plain}
      type={type}
    >
      {children}
    </Divider>
  );
};

export default DividerAnt;
