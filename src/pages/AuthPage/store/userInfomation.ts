import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { IUserInfo, IUserInfoStore } from '../types/types.ts';

const useUserInfoStore = create<IUserInfoStore>()(
  persist(
    (set) => ({
      userInfo: { email: '', name: '', imageUrl: '' },
      setUserInfo: (user: IUserInfo) => set({ userInfo: user })
    }),
    {
      name: 'userInfoStore',
      storage: createJSONStorage(() => localStorage)
    }
  )
);

export default useUserInfoStore;
