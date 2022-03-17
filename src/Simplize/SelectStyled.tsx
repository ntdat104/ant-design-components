import { Select } from 'antd';
import styled from 'styled-components';

export const dropdownStyle = {
  borderRadius: '10px',
  backgroundColor: '#242526',
};

export const MenuStyled = styled.div`
  .ant-select-item {
    background-color: #242526;
    margin: 2px 4px;
    border-radius: 5px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #ffffff;
  }

  .ant-select-item-option-active {
    background-color: #3a3b3c;
  }

  .ant-select-item-option-selected {
    background-color: #3a3b3c;
  }
`;

export const SelectStyled = styled(Select)`
  width: 100%;

  && .ant-select-selector {
    background-color: #242526;
    border-radius: 10px;
    padding: 0px 18px;
    height: 38px;

    .ant-select-selection-item {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #ffffff;
      height: auto;
      margin: auto;
    }
  }

  .ant-select-arrow {
    color: #fff;
  }
`;
