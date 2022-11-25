import { atom, selector } from 'recoil';
import { GeneralApp } from '~/models/dataview/GeneralApp.interface';

import { auth } from '@recoil';

export const appLoading = atom<boolean>({
  key: 'app/loading',
  default: false,
});

export const generalState = selector<GeneralApp>({
  key: 'app/general',
  get: ({ get }) => ({
    loading: get(appLoading),
    token: get(auth.atom.token),
  }),
});
