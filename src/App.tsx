import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Icon } from '@ant-design/compatible';
// import { Switch, Route, withRouter, NavLink, RouteProps } from 'react-router-dom';
import { Switch, Route, Link } from 'react-router-dom';
import NotFound from '../src/pages/NotFound/index';
import { routeCfg, IRouteCfgProps } from './config';
import '../src/assets/style.less';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

export function RouteWithSubRoutes(route: IRouteCfgProps) {
  return (
    <Route
      exact
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  function toggle() {
    setCollapsed(!collapsed);
  }

  return (
    <div className="App">
      <Layout>
        <Sider width="236" trigger={null} collapsible collapsed={collapsed}>
          <div className="logo-wrapper">
            <div className="logo" />
            <h3> 组件库 </h3>
          </div>
          <Menu
            className="menu"
            mode="inline"
            defaultSelectedKeys={['home']}
            defaultOpenKeys={['comp']}
          >
            {routeCfg.map((routeItem) => {
              if (routeItem.routes) {
                return (
                  <SubMenu
                    key={routeItem.key}
                    title={
                      <span>
                        {routeItem.icon && <Icon type={routeItem.icon} />}
                        <span>{routeItem.title}</span>
                      </span>
                    }
                  >
                    {routeItem.routes.map((subItem) => {
                      return (
                        <Menu.Item key={subItem.key}>
                          <Link to={subItem.path}>
                            {subItem.icon && <Icon type={subItem.icon} />}
                            <span>{subItem.title}</span>
                          </Link>
                        </Menu.Item>
                      );
                    })}
                  </SubMenu>
                );
              } else if (routeItem.component) {
                return (
                  <Menu.Item key={routeItem.key}>
                    <Link to={routeItem.path}>
                      {routeItem.icon && <Icon type={routeItem.icon} />}
                      <span>{routeItem.title}</span>
                    </Link>
                  </Menu.Item>
                );
              }
              return null;
            })}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={toggle}
            />
          </Header>
          <Content className="App-content">
            <Switch>
              {routeCfg.map((route) => (
                <Route key={route.key} {...route} />
              ))}
              <Route component={NotFound} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
