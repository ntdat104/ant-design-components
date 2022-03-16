import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const DropdownStyled: React.FC = () => {
  function handleMenuClick(e: any) {
    message.info('Click on menu item.');
    console.log('click', e);
  }

  return (
    <Dropdown
      trigger={['click']}
      overlay={
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            1st menu item
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            2nd menu item
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            3rd menu item
          </Menu.Item>
        </Menu>
      }
    >
      <Button>
        Button <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default DropdownStyled;
