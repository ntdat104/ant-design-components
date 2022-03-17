import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const DropdownStyle = styled(Dropdown)`
  background-color: black;
`

const MenuItem = styled(Menu.Item)`
  background-color: black;
`

const DropdownStyled: React.FC = () => {
  function handleMenuClick(e: any) {
    message.info('Click on menu item.');
    console.log('click', e);
  }

  return (
    <DropdownStyle
      trigger={['click']}
      overlay={
        <Menu className='menu' onClick={handleMenuClick}>
          <MenuItem className='test' key="1" icon={<UserOutlined />}>
            1st menu item
          </MenuItem>
          <MenuItem key="2" icon={<UserOutlined />}>
            2nd menu item
          </MenuItem>
          <MenuItem key="3" icon={<UserOutlined />}>
            3rd menu item
          </MenuItem>
        </Menu>
      }
    >
      <Button>
        Button <DownOutlined />
      </Button>
    </DropdownStyle>
  );
};

export default DropdownStyled;
