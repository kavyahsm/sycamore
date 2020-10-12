import React from 'react'
import styled from 'styled-components'
import { Layout, Menu, Switch } from 'antd';
import {
    UserOutlined,
    SettingOutlined,
    SnippetsFilled,
    AppstoreFilled,
    CodeSandboxSquareFilled
  } from '@ant-design/icons';
const {  Sider } = Layout;
const { SubMenu } = Menu;

export default function sidemenu({click, color, collapsed}) {



    return (
   <SideMenuWrap color={color}>
             <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
           theme={color? 'dark' : 'light'}
           mode="inline"
           defaultSelectedKeys={['1']}
           className="menu"
          >
           
          <Menu.Item key="1" icon={<AppstoreFilled />} >Dashboard</Menu.Item>
          <SubMenu  key="sub1" icon={<UserOutlined/>} title="Vouchers">
 
           <Menu.Item key="2" >All vouchers</Menu.Item>
           <Menu.Item key="3" >Add new voucher</Menu.Item>

         </SubMenu>

         <SubMenu  key="sub2" icon={<CodeSandboxSquareFilled />} title="Products">
 
        <Menu.Item key="4"  >All Products</Menu.Item>
        <Menu.Item key="5" >Add new Product</Menu.Item>

        </SubMenu>
         <Menu.Item key="6" icon={<SnippetsFilled />} >Invoice</Menu.Item>
         <Menu.Item key="7" icon={<SettingOutlined />} >Settings</Menu.Item>

          </Menu>
          <div className="mode">
         <Switch checkedChildren="Dark" unCheckedChildren="Light" onChange={()=>click()} />
          </div>
        </Sider>
        </SideMenuWrap>
      
    )
}


const SideMenuWrap = styled.div`



.menu{


font-size:1rem;
svg{

  font-size:1.1rem;
  transform:translate(-5px, -4px);
}

}

.mode{

position:absolute;
bottom:5%;
left:10%;

.ant-switch{

  background-color:${props=>props.color? "grey":"#1890FF"};
}
}


`