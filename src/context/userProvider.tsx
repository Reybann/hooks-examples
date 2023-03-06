import { UserContext } from "./userContext";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  return (
    <UserContext.Provider value={{ hola: 'Mundo' }}>
      { children }
    </UserContext.Provider>
  )
}
