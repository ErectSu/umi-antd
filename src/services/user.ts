import { request } from 'umi';

export async function queryCurrent() {
  return request<API.Result>('/api/user/userInfo');
}
