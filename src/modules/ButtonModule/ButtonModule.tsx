import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import ButtonStyled from '../../ant-design/ButtonStyled';

interface Props {}

const ButtonModule: React.FC<Props> = () => {
  return (
    <div>
      <ButtonStyled>{`Normal`}</ButtonStyled>
      <ButtonStyled className="color_blue">{`Blue`}</ButtonStyled>
      <ButtonStyled
        className="has_icon"
        icon={<SearchOutlined />}
      >{`Icon`}</ButtonStyled>
      <ButtonStyled
        className={clsx('color_blue', 'has_icon')}
        icon={<SearchOutlined />}
      >{`Blue & Icon`}</ButtonStyled>
    </div>
  );
};

export default ButtonModule;
