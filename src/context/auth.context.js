import { useState, useEffect, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    authenticateUser()
  }, [])

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  const authenticateUser = async () => {
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      try {
        const response = await axios.get("http://localhost:6969/auth/verify", {
          headers: { authorization: `Bearer ${storedToken}` },
        });
        console.log('user', response.data)
        setIsloading(false);
        setIsLoggedIn(true);
        setUser(response.data);
        return true
      } catch (e) {
        setIsloading(false);
        setIsLoggedIn(false);
        setUser(null);
        return false
      }
    } else {
      setIsloading(false);
      setIsLoggedIn(false);
      setUser(null);
      return false
    }
  };

  const logout = () => {
    localStorage.clear()
    setIsloading(false);
    setIsLoggedIn(false);
    setUser(null);
    window.location.href = '/'
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, user, storeToken, authenticateUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
