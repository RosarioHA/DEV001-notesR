import { createContext, useContext } from 'react';

export const authContext = createContext();

// con esto haremos un hook para no importar useContext y conte
export const useAuth = () => {
  const context = useContext(context);
};

// AuthProvider va con mayuscula porque es un componente
export function AuthProvider({ children }) {
  const user = {
    login: true,
  };

  return (
    <authContext.Provider value={{ user }}>
      {children}
    </authContext.Provider>
  );
}
