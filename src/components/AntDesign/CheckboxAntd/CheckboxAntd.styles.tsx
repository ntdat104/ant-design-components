import { Checkbox } from 'antd';
import styled from 'styled-components';

export const CheckboxStyled = styled(Checkbox)`
  .ant-checkbox::after {
    border-radius: 5px;
  }

  .ant-checkbox-inner {
    border-radius: 5px;
    border-color: #a7aaaf;
  }

  &:hover,
  &:focus {
    .ant-checkbox-inner {
      border-color: #2d88ff;
    }
  }
  .ant-checkbox-input {
    &:focus + .ant-checkbox-inner {
      border-color: #2d88ff;
    }
  }
  .ant-checkbox-checked {
    &::after {
      border-color: #2d88ff;
    }
    .ant-checkbox-inner {
      border-color: #2d88ff;
      background-color: #2d88ff;
    }
  }

  &.bg_red {
    &:hover,
    &:focus {
      .ant-checkbox-inner {
        border-color: #e14040;
      }
    }
    .ant-checkbox-input {
      &:focus + .ant-checkbox-inner {
        border-color: #e14040;
      }
    }
    .ant-checkbox-checked {
      &::after {
        border-color: #e14040;
      }
      .ant-checkbox-inner {
        border-color: #e14040;
        background-color: #e14040;
      }
    }
  }
`;
