import { createContext, FC, ReactNode, useContext, useState } from "react";
import { UserDocument } from "../interfaces";

export interface UserContext {
  user?: UserDocument;
  setUser: (user?: UserDocument) => void;
}

export const UserContextImpl = createContext<UserContext>(null!);

export function useUser() {
  return useContext(UserContextImpl);
}

interface Props {
  initialUser?: UserDocument;
  children: ReactNode;
}

export const UserProvider: FC<Props> = ({ children, initialUser }) => {
  const [user, setUser] = useState(initialUser);

  return (
    <UserContextImpl.Provider value={{ user, setUser }}>
      {children}
    </UserContextImpl.Provider>
  );
};
