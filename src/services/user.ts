import { request } from 'umi';

export async function queryCurrent() {
  return request<API.Result>('/api/user/userInfo');
}

export async function queryMenu() {
  return request<API.Result>('/api/user/menu');
}
