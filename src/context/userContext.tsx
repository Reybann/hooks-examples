import { createContext } from "react";

interface UserContextType {
    message: string;
  }

export const UserContext = createContext<UserContextType | null>(null);