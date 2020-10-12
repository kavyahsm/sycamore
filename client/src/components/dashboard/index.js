import React, {useState} from 'react'
import { Layout } from 'antd';

import styled from 'styled-components'
import {  Route, Switch, useRouteMatch } from 'react-router-dom';
import SideMenu from './sidemenu'

import Voucher from './pages/vochers'
import Products from './pages/products'
import Header from './header'

const {  Content } = Layout;



export default function Dashboard() {

const [collapsed, setCollapsed] = useState(false)
const [theme, setTheme] = useState(true)


// useEffect(()=>{


//   loadUser();
//   if (!isAuthenticated) {
//       props.history.push('/');
//     }
//     else{

//       props.history.push('/admin/dashboard');
//     }
// // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [isAuthenticated, props.history])

  let { path } = useRouteMatch();







const toggle = () =>{

    setCollapsed(!collapsed)
}


const changeTheme = () =>{

    setTheme(!theme)

}



    return (
        <DashboardWrap color={theme}>

   <Layout>
       <SideMenu collapsed={collapsed} color={theme} click={changeTheme}/>
       
        <Layout className="site-layout">

          <Header click={toggle} collapsed={collapsed}/>

          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >

<Switch>
<Route  exact path={`${path}/vouchers`}  component={Voucher} />
<Route  exact path={`${path}/products`}  component={Products} />
</Switch>

            Content
          </Content>
        </Layout>
      </Layout>
            
        </DashboardWrap>
    )
}


const DashboardWrap = styled.div`



.ant-layout {

    .ant-layout-sider{
        height: 100vh;
        background:${props => props.color ? "#001529" : "#ffffff"};
    }
}



.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}



#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
`