import React from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import styled from 'styled-components'
const { Header } = Layout;

export default function HeaderMenu({collapsed, click}) {
    return (
         <HeaderMenuWrap>
        <Header className="site-layout-background" style={{ padding: 0 }}>
        {collapsed ?
         <MenuUnfoldOutlined className="trigger" onClick={()=>click()}/>
          :<MenuFoldOutlined className="trigger" onClick={()=>click()}/>}  
           
          </Header>
         </HeaderMenuWrap>
    )
}

const HeaderMenuWrap = styled.div`

.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover{

      color: #1890ff; 
  }
}




#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover{

      color: #1890ff;
  }
}



`
