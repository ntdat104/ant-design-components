import { Typography } from 'antd';
import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
  code?: boolean;
  copyable?: boolean;
  disabled?: boolean;
  editable?: boolean;
  ellipsis?: boolean;
  keyboard?: boolean;
  mark?: boolean;
  onClick?: () => void;
  italic?: boolean;
  type?: 'secondary' | 'success' | 'warning' | 'danger';
  underline?: boolean;
  strong?: boolean;
}

const TextAnt: React.FC<Props> = (props) => {
  const {
    className,
    children = `Text`,
    code = false,
    copyable = false,
    disabled = false,
    editable = false,
    ellipsis = false,
    mark = false,
    onClick,
    italic = false,
    type,
    underline = false,
    strong = false,
    ...otherProps
  } = props;
  return (
    <Typography.Text
      {...otherProps}
      className={className}
      code={code}
      copyable={copyable}
      disabled={disabled}
      editable={editable}
      ellipsis={ellipsis}
      mark={mark}
      onClick={onClick}
      italic={italic}
      type={type}
      underline={underline}
      strong={strong}
    >
      {children}
    </Typography.Text>
  );
};

export default TextAnt;
