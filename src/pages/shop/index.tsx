import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Row, Col, Radio, Input, Select, List } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import style from './index.less';
import ShopCard from './ShopCard';

const data = [
  {
    deals: '24',
    turnover: '2345254.00',
    upperName: '某某旗舰店',
    lowerName: 'hahh',
    lowerNum: '5',
  },
  {
    deals: '34',
    turnover: '23.00',
    upperName: '某某旗舰店',
    lowerName: 'hhh',
    lowerNum: '1',
  },
  {
    deals: '34',
    turnover: '23.00',
    upperName: '某某旗舰店',
    lowerName: 'hhh',
    lowerNum: '1',
  },
  {
    deals: '34',
    turnover: '23.00',
    upperName: '某某旗舰店',
    lowerName: 'hhh',
    lowerNum: '1',
  },
  // {
  //   deals: '34',
  //   turnover: '23.00',
  //   upperName: '某某旗舰店',
  //   lowerName: 'hhh',
  //   lowerNum: '1',
  // },
];
const { Option } = Select;
const Shop = () => {
  const loadMore = data.length > 0 && (
    <div style={{ textAlign: 'center', marginTop: 16 }}>
      <Button style={{ paddingLeft: 48, paddingRight: 48 }}>加载更多</Button>
    </div>
  );

  return (
    <PageContainer
      content={
        <div className={style.searchBar}>
          <Row gutter={16}>
            <Col span={4}>
              <Radio.Group defaultValue="a" buttonStyle="solid" size="large">
                <Radio.Button
                  value="a"
                  style={{ width: 100, height: '100%', textAlign: 'center' }}
                >
                  全部
                </Radio.Button>
                <Radio.Button
                  value="b"
                  style={{ width: 100, textAlign: 'center' }}
                >
                  已关注
                </Radio.Button>
              </Radio.Group>
            </Col>
            <Col span={6}>
              <Input
                placeholder="快速搜索店铺名称"
                bordered={false}
                size="large"
                className={style.searchInput}
                suffix={
                  <Button
                    shape="circle"
                    icon={<SearchOutlined />}
                    className={style.searchIcon}
                  />
                }
              />
            </Col>
            <Col span={6}>
              <span style={{ marginRight: 20 }}>创建类型:</span>
              <Select
                defaultValue="all"
                style={{ width: 120 }}
                size="large"
                // onChange={handleChange}
              >
                <Option value="all">全部</Option>
                <Option value="online">线上支付</Option>
                <Option value="offline">线下核销</Option>
              </Select>
            </Col>
          </Row>
        </div>
      }
    >
      <List
        grid={{ gutter: 16, column: 4 }}
        loadMore={loadMore}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <ShopCard data={item} />
          </List.Item>
        )}
      />
    </PageContainer>
  );
};

export default Shop;
