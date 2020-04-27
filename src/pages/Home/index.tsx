import React from 'react';
import { Card, Avatar, Statistic, Row, Col } from 'antd';
import { Icon } from '@ant-design/compatible';
import { EmptyLine } from '../../../src/components';
import { routeCfg } from '../../config';
import './style.less';
import img from './chong.png';
import img2 from './chahua.png';

const { Meta } = Card;

const Home = () => {
  const ndate = new Date();
  const hr = ndate.getHours();
  let hello = '早上好';
  if (hr >= 12 && hr <= 17) {
    hello = '下午好';
  }

  if (hr >= 17 && hr <= 24) {
    hello = '晚上好';
  }

  return (
    <div className="p-home">
      <h3> 组件平台 </h3>
      <EmptyLine />
      <Row>
        <Col span={20}>
          <Meta
            avatar={<Avatar style={{ marginTop: 5 }} size="large" src={img} />}
            title={`${hello}，祝你开心每一天`}
            description="消除恐惧的最好办法就是面对恐惧！坚持，才是胜利。加油！奥利给！"
          />
        </Col>
        <Col style={{ marginTop: -13 }} span={4}>
          <Statistic
            title="当前组件总数"
            value={routeCfg[1].routes ? routeCfg[1].routes.length : 0}
            prefix={<Icon type="like" />}
          />
        </Col>
      </Row>
      <div className="img-wrapper">
        <img style={{ maxWidth: '100%' }} src={img2} alt="组件平台" />
      </div>
    </div>
  );
};

export default Home;