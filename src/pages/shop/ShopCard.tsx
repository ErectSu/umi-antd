import React from 'react';
import { Button, Card, Avatar } from 'antd';
import style from './index.less';

const TitleArea = () => {
  return (
    <div className={style.titleArea}>
      <Avatar icon="user" size="large" />
      <div className={style.titleText}>
        <div className={style.shopName}>某某旗舰店</div>
        <div className={style.startTime}>开店时间：19年8月1日</div>
      </div>
    </div>
  );
};

const actions = (type?: string) => {
  if (type === 'userInfo') {
    return [<div>用户信息: xxxxxxxx</div>];
  } else if (type === 'noInfo') {
    return [
      <div>
        用户信息: <span>未授权绑定信息</span>
      </div>,
    ];
  } else {
    return [<div>店主二维码</div>, <div>小程序二维码</div>, <div>详情</div>];
  }
};

const ContentItem = ({ data, type }: { data: any; type: string }) => {
  if (type === 'deals') {
    return (
      <div>
        <div>{data?.deals}</div>
        <div>成交件数</div>
      </div>
    );
  } else if (type === 'turnover') {
    return (
      <div>
        <div>{data?.turnover}</div>
        <div>营业额</div>
      </div>
    );
  } else if (type === 'upper') {
    return (
      <div>
        <Avatar icon="user" />
      </div>
    );
  } else {
    return (
      <div>
        <Avatar icon="user" />
      </div>
    );
  }
};

const ShopCard = ({ data }: any) => {
  return (
    <div className={style.shopCard}>
      <Card
        title={<TitleArea />}
        extra={<Button type="primary">关注</Button>}
        actions={actions()}
      >
        <div className={style.content}>
          <div>
            <div className={style.itemContent}>{data?.deals}</div>
            <div className={style.itemTitle}>成交件数</div>
          </div>
          <div>
            <div className={style.itemContent}>¥{data?.turnover}</div>
            <div className={style.itemTitle}>营业额</div>
          </div>
          <div>
            <Avatar icon="user" />
            <span className={style.shopName}>{data?.upperName}</span>
            <div className={style.itemTitle}>上级店铺</div>
          </div>
          <div>
            <Avatar icon="user" />
            <span className={style.shopName}>{data?.lowerName}</span>
            <div className={style.itemTitle}>
              <span>下级店铺</span>
              <span style={{ marginLeft: 50 }}> {data?.lowerNum}个</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ShopCard;
