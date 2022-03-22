import { AutoComplete } from "antd";
import styled from "styled-components";

export const dropdownStyle = {
  borderRadius: "10px",
  backgroundColor: "#242526",
};

export const MenuStyled = styled.div`
  .ant-select-item {
    background-color: #242526;
    margin: 2px 4px;
    border-radius: 5px;

    font-family: "Roboto";
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

export const AutoCompleteStyled = styled(AutoComplete)`
  width: 100%;

  &&&.ant-select-focused .ant-select-selector {
    border: 1px solid #2D88FF;
    /* box-shadow: none; */
  }

  && .ant-select-selector {
    width: 100%;
    background-color: #242526;
    border: 1px solid #3a3b3c;
    border-radius: 10px;
    padding: 4px 40px;
    height: 38px;
  }

  && .ant-select-selection-search {
    padding: 4px 40px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  && .ant-select-selection-placeholder {
    font-style: italic;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;

  .icon {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    user-select: none;
    pointer-events: none;
  }
`;

export const Ticker = styled.span`
  width: 40px;
  display: inline-block;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #50a7db;
`;

export const NameVi = styled.span`
  margin-left: 4px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
`;
