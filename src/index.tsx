import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { ConfigProvider, Layout } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Layout style={{ minHeight: '100vh' }}>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </Router>
    </Layout>
  </ConfigProvider>,
  document.getElementById('root'),
);
serviceWorker.unregister();
