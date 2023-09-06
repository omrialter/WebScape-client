import { createContext } from "react";

export interface User {
    _id: string;
    name: string;
    user_name: string;
    profilePic: string | null;
    desc: string;
}

interface ContextValue {
    userData: User | null;

}

export const MyContext = createContext<ContextValue | null>(null);
