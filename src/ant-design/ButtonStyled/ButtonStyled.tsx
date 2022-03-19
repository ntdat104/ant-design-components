import { Button } from 'antd';
import styled from 'styled-components';

const ButtonStyled = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3a3b3c;
  border: 1px solid #3a3b3c;
  border-radius: 10px;
  padding: 10px 20px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  height: auto;
  &:hover,
  &:focus {
    background-color: #3a3b3c;
    border: 1px solid #3a3b3c;
    color: #ffffff;
  }

  &.color_blue {
    background-color: #2d88ff;
    border: 1px solid #2d88ff;
    font-weight: 500;
    &:hover,
    &:focus {
      background-color: #2d88ff;
      border: 1px solid #2d88ff;
    }
  }

  &.has_icon {
    padding: 11px 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    span:first-child {
      font-size: 13px;
      display: flex;
      align-items: center;
    }
    span:last-child {
      margin-left: 9px;
    }
  }
`;

export default ButtonStyled;
