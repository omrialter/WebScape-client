import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { TOKEN_KEY, URL, doApiGet } from "../services/apiService";
import { User } from "../context/MyContext"

export const useUserData = () => {
    const [userData, setUserData] = useState<User | null>(null);

    const doApiUser = async () => {
        const url = URL + "/users/userInfo";
        const data = await doApiGet(url);
        setUserData(data);
    };

    useEffect(() => {
        if (localStorage[TOKEN_KEY]) {
            doApiUser();
        }
    }, []);

    const userSignOut = () => {
        if (window.confirm("Are you sure you want to log out")) {
            deleteToken();
        }
    };

    const deleteToken = async () => {
        try {
            await localStorage.removeItem(TOKEN_KEY);
            await localStorage.removeItem("tokenExpiration");
            toast.info("You logged out, see you soon...");
            setUserData(null); // Set to null when the user logs out
        } catch (error) {
            console.error("Error deleting token:", error);
        }
    };

    return { userData, userSignOut };
};
