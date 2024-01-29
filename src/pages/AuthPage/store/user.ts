import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { IUser, IUserStore } from '../types/types.ts';

const useUserStore = create<IUserStore>()(
  persist(
    (set) => ({
      user: {
        accessToken: 'abc',
        user: {
          email: 'abc',
          id: 'abc'
        }
      },
      setUser: (data: IUser) => set((state) => ({ user: { ...state.user, ...data } })),
      isLoggedIn: false,
      setIsLoggedIn: (data) => set(() => ({ isLoggedIn: data })),
      logout: () => set(() => ({ user: { accessToken: '', user: { email: '', id: '' } }, isLoggedIn: false }))
    }),
    {
      name: 'userStore',
      storage: createJSONStorage(() => localStorage)
    }
  )
);

export default useUserStore;
