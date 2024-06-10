import { createContext, useEffect, useState } from "react";
import authApi from "../APIs/auth";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../utils/local-storage";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [isAuthUserLoading, setIsAuthUserLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (getAccessToken()) {
          const response = await authApi.getAuthUser();
          setAuthUser(response.data.user);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsAuthUserLoading(false);
      }
    };
    fetchUser();
  }, []);

  const login = async (credentials) => {
    const response = await authApi.login(credentials);
    console.log(response.data);
    setAccessToken(response.data.accessToken);

    const resGetAuthUser = await authApi.getAuthUser();
    console.log(resGetAuthUser.data);
    setAuthUser(resGetAuthUser.data);
    console.log(authUser);
  };

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ login, logout, authUser, isAuthUserLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
