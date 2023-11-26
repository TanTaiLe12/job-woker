import Cookies from 'js-cookie';
import config from '~/config';

const { cookieConfig } = config;
export function getToken() {
  return Cookies.get(cookieConfig.auth_token_key);
}

export function setToken(token, expires = 1) {
  return Cookies.set(cookieConfig.auth_token_key, token, { expires });
}

export function removeToken() {
  return Cookies.remove(cookieConfig.auth_token_key);
}
