import { atom } from 'recoil';

export const token = atom({
  key: 'auth/token',
  default: localStorage.getItem('refreshToken') || '',
});
