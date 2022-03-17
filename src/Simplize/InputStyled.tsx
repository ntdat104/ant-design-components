import { Input } from 'antd';
import styled from 'styled-components';

const InputStyled = styled(Input)`
  height: 38px;
  padding: 0px 16px;
  background-color: #242526;
  border-radius: 10px;

  .ant-input {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;

    ::placeholder {
      font-style: italic;
    }
  }

  &.has_suffix {
    .ant-input-suffix {
      color: #a7aaaf;
    }
  }
`;

export default InputStyled;
