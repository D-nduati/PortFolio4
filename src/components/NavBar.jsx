import React from 'react';
import { Layout ,Menu} from 'antd';

const {Header} = Layout;
function NavBar() {
    const items1 = [
        {
            key: '1',
            label:'Profile'
        },
        {
            key: '2',
            label:'About'
        },
        {
            key: '3',
            label:'Skills'
        },
        {
            key: '4',
            label:'Projects'
        },
        {
            key: '4',
            label:'Contacts'
        }
    ]

  return (
    <Header>
          <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
    </Header>
  )
}

export default NavBar;