import React, { createContext, useContext, useState } from 'react';
import { UserType } from "./UserType"
type StateType<T> = [T, React.Dispatch<React.SetStateAction<T>>];
type ContextType = {
    user : UserType;
};



export const MyAccountContext = createContext<ContextType>({} as any);

export const useMyAccount = () => useContext(MyAccountContext);

interface Props {
    children?: React.ReactNode;
}

export const MyAccountProvider: React.FC<Props> = ({
    children,
}) => {

    const [user, setUser] = useState<UserType>({ username: '', email: '', isAuthenticated: false });

    return (
        <MyAccountContext.Provider
            value={{
              user:user
            }}
        >
            {children}
        </MyAccountContext.Provider>
    );
};
