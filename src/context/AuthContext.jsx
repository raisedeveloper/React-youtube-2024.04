import { createContext, useContext, useEffect, useState } from "react";
import { logout, onUserStateChanged } from '../api/firebase';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChanged(user => {setUser(user)});
  }, []);

  return (
    <AuthContext.Provider value={{user, logout}}>
      { children }
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}

// #1
//    useEffect(() => {
//   onUserStateChanged(user => {setUser(user)});
// }, []); // [] 상황이 이와 같을 때 한번 실행하라


//#2
// export function useAuthContext() {  // hook 을 만들어 주는 과정
//   return useContext(AuthContext);
// }