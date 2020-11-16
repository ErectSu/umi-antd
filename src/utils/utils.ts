/**
 * 保存token
 */
export function setToken(token: string) {
  return localStorage.setItem('Token', token);
}

/**
 * 获取token
 */
export function getToken() {
  return localStorage.getItem('Token');
}

/**
 * 删除token
 */
export function removeToken() {
  return localStorage.removeItem('Token');
}
