import { Button } from 'antd';
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

interface Props {
  className?: string;
  block?: boolean;
  danger?: boolean;
  disabled?: boolean;
  ghost?: boolean;
  loading?: boolean;
  onClick?: () => void;
  size?: 'large' | 'middle' | 'small';
  type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
  shape?: 'circle' | 'round' | 'default';
  icon?: React.ReactNode;
  children?: React.ReactNode;
  href?: string;
  htmlType?: 'button' | 'submit' | 'reset';
  target?: '_blank' | '_self' | '_parent' | '_top';
}

const ButtonAnt: React.FC<Props> = (props) => {
  const {
    className,
    block = false,
    danger = false,
    disabled = false,
    ghost = false,
    loading = false,
    href,
    htmlType = 'button',
    onClick,
    size = 'middle',
    type = 'primary',
    shape = 'default',
    icon = <SearchOutlined />,
    children = 'Button',
    target,
    ...otherProps
  } = props;

  return (
    <Button
      {...otherProps}
      className={className}
      block={block}
      danger={danger}
      disabled={disabled}
      ghost={ghost}
      href={href}
      htmlType={htmlType}
      icon={icon}
      loading={loading}
      shape={shape}
      size={size}
      target={target}
      type={type}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ButtonAnt;
