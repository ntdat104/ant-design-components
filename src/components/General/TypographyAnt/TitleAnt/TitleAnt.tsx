import React from 'react';
import { Typography } from 'antd';

interface Props {
  className?: string;
  children?: React.ReactNode;
  code?: boolean;
  copyable?: boolean;
  disabled?: boolean;
  editable?: boolean;
  ellipsis?: boolean;
  level?: 1 | 2 | 3 | 4 | 5 | undefined;
  mark?: boolean;
  onClick?: () => void;
  italic?: boolean;
  type?: 'secondary' | 'success' | 'warning' | 'danger';
  underline?: boolean;
}

const TitleAnt: React.FC<Props> = (props) => {
  const {
    className,
    children = `Title`,
    code = false,
    copyable = false,
    disabled = false,
    editable = false,
    ellipsis = false,
    level = 1,
    mark = false,
    onClick,
    italic = false,
    type,
    underline = false,
    ...otherProps
  } = props;
  return (
    <Typography.Title
      {...otherProps}
      className={className}
      code={code}
      copyable={copyable}
      delete={false}
      disabled={disabled}
      editable={editable}
      ellipsis={ellipsis}
      level={level}
      mark={mark}
      onClick={onClick}
      italic={italic}
      type={type}
      underline={underline}
    >
      {children}
    </Typography.Title>
  );
};

export default TitleAnt;
