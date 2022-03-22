import { Button } from 'antd';
import styled from 'styled-components';

export const ButtonStyled = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #3a3b3c;
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 0px 20px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  height: 38px;
  &:hover,
  &:focus {
    background-color: #3a3b3c;
    border-color: #2d88ff;
    color: #ffffff;
  }

  &:disabled {
    color: #ffffff;
    opacity: 0.6;
  }

  &.text_bold {
    font-weight: 500;
  }

  &.bg_blue {
    background-color: #2d88ff;
    border-color: #2d88ff;
    &:hover,
    &:focus {
      background-color: #2d88ff;
      border-color: #2d88ff;
    }
  }

  &.bg_white {
    color: #050505;
    background-color: #e4e6eb;
    border-color: #e4e6eb;
    &:hover,
    &:focus {
      background-color: #e4e6eb;
      border-color: #e4e6eb;
    }
  }

  &.has_icon {
    padding: 0px 16px;
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
