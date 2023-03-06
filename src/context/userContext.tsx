import { createContext } from "react";

interface UserContextType {
    hola: string;
  }

export const UserContext = createContext<UserContextType | null>(null);