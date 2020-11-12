import React from 'react';
import styles from './index.less';
import { Button } from 'antd';
import { useRequest } from 'umi';

export default () => {
  const { data, loading, run } = useRequest(
    () => ({
      url: '/api/user/menu',
      method: 'GET',
    }),
    {
      manual: true,
    },
  );
  console.log(data);

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button loading={loading} onClick={() => run()}>
        点击
      </Button>
    </div>
  );
};
