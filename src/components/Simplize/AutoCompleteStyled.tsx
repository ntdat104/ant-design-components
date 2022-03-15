import React, { useState } from 'react';
import { AutoComplete } from 'antd';
import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';

const { Option } = AutoComplete;

const NewAutoComplete = styled(AutoComplete)`
  width: 556px;

  &&&.ant-select-focused .ant-select-selector {
    border: none;
    box-shadow: none;
  }

  && .ant-select-selector {
    width: 556px;
    background-color: #242526;
    border-radius: 10px;
    border: none;
    padding: 4px 37px;
    height: auto;
  }

  && .ant-select-selection-search {
    padding: 4px 37px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  && .ant-select-selection-placeholder {
    font-style: italic;
  }
`;

const Wrapper = styled.div`
  position: relative;

  .anticon-search {
    position: absolute;
    left: 9px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    user-select: none;
    pointer-events: none;
  }
`;

const Content = styled.div`
  color: greenyellow;
`;

const AutoCompleteStyled: React.FC = () => {
  const [result, setResult] = useState<string[]>([]);
  const handleSearch = (value: string) => {
    let res: string[] = [];
    if (!value || value.indexOf('@') >= 0) {
      res = [];
    } else {
      res = ['gmail.com', '163.com', 'qq.com'].map(
        (domain) => `${value}@${domain}`
      );
    }
    setResult(res);
  };
  return (
    <Wrapper>
      <NewAutoComplete
        onSearch={handleSearch}
        allowClear
        placeholder="Mã cổ phiếu..."
      >
        {result.map((email: string) => (
          <Option key={email} value={email}>
            <Content>
              <span>{email}</span>
              <span style={{ color: `gold`, marginLeft: 10 }}>{email}</span>
            </Content>
          </Option>
        ))}
      </NewAutoComplete>
      <SearchOutlined />
    </Wrapper>
  );
};

export default AutoCompleteStyled;
