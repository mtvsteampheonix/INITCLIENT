import Cookies from 'js-cookie';

export default function isLogin() {
  const token = !!Cookies.get('token');

  return token;
}
