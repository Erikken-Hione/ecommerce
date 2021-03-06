import React, { useState } from 'react';
import { Menu } from 'antd';
import {  HomeOutlined, UserOutlined, UserAddOutlined, SettingOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';

const Header = () => {

   const { SubMenu, Item, ItemGroup } = Menu;

   const [current, setCurrent] = useState('home')

   const handleClick = (e) => {
      setCurrent(e.key);
   }

   return (
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
         
         <Item key="home" icon={ <HomeOutlined />}>
            <Link to="/">Home</Link>
         </Item>

         <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Username">
            <ItemGroup title="Item 1">
               <Item key="setting:1">Option 1</Item>
               <Item key="setting:2">Option 2</Item>
            </ItemGroup>
         </SubMenu>

         <Item key="register" icon={ <UserAddOutlined />} className="float-right"> 
            <Link to="/register">Register</Link>
         </Item>
      
         <Item key="login" icon={ <UserOutlined />} className="float-right">
         <Link to="/login">Login</Link>
         </Item>
         
      </Menu>
   );
}

export default Header;