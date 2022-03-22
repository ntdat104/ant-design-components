import React from 'react';
import { ConfirmModalStyled } from './ConfirmModalAntd.styles';
import clsx from 'clsx';

interface Props {
  visible: boolean;
  children?: React.ReactNode;
  width?: number;
  centered?: boolean;
  onOk?: any;
  okText?: string;
  onCancel?: any;
  cancelText?: string;
  title?: string;
}

const ConfirmModalAntd: React.FC<Props> = (props) => {
  const {
    children,
    visible,
    width = 420,
    centered = true,
    onOk,
    okText = `Xác nhận`,
    onCancel,
    cancelText = `Hủy`,
    title,
  } = props;

  return (
    <ConfirmModalStyled
      className={clsx({ no_title: !title })}
      title={title}
      width={width}
      centered={centered}
      visible={visible}
      okText={okText}
      cancelText={cancelText}
      onOk={onOk}
      onCancel={onCancel}
    >
      {children}
    </ConfirmModalStyled>
  );
};

export default ConfirmModalAntd;
