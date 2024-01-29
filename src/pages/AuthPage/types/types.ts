export interface IMutateData {
  email: string;
  password: string;
}

export interface IUser {
  email: string;
  id: string;
}

export interface IUserStore {
  user: {
    accessToken: string;
    user: IUser;
  };
  setUser: (data: IUser) => void;
  logout: () => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (data: boolean) => void;
}

export interface IUserInfo {
  email: string;
  name: string;
  imageUrl: string;
}
export interface IUserInfoStore {
  userInfo: IUserInfo;
  setUserInfo: (user: IUserInfo) => void;
}
