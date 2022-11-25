import { atom } from 'recoil';

export const selectedSidebar = atom<number>({
    key: 'sidebar/sections',
    default: 0
});