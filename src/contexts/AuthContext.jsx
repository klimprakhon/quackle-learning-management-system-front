import { createContext, useEffect, useState } from "react";
import authApi from "../APIs/auth";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../utils/local-storage";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState({});
  const [isAuthUserLoading, setIsAuthUserLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = getAccessToken();
        if (token) {
          const response = await authApi.getAuthUser();
          setAuthUser(response.data);
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
    const accessToken = response.data.accessToken;
    setAccessToken(accessToken);

    const resGetAuthUser = await authApi.getAuthUser();
    const loggedInUser = resGetAuthUser.data;
    setAuthUser(loggedInUser);
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
