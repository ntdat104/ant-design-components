import { Modal } from 'antd';
import styled from 'styled-components';

export const ConfirmModalStyled = styled(Modal)`
  .ant-modal-content {
    background-color: #242526;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #3a3b3c;
  }

  .ant-modal-header {
    background-color: #242526;
    padding: 15px 25px;
    border-bottom: none;
  }

  .ant-modal-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
  }

  &.no_title {
    .ant-modal-body {
      padding-top: 50px;
    }
  }

  .ant-modal-body {
    padding: 15px 25px 0px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
  }

  .ant-modal-footer {
    padding: 25px;
    border-top: none;
  }

  .ant-btn {
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

    &.ant-btn-primary {
      background-color: #2d88ff;
      border-color: #2d88ff;
      font-weight: 500;
      &:hover,
      &:focus {
        background-color: #2d88ff;
        border-color: #2d88ff;
      }
    }
  }
`;
