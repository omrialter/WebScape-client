import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { URL, doApiGet, TOKEN_KEY } from "../../services/apiService";

const AuthUser = () => {
    const nav = useNavigate();

    useEffect(() => {
        doApi();
    }, []);

    const doApi = async () => {
        try {
            const url = URL + "/users/checkToken";
            const data = await doApiGet(url);
            if (!data) {
                toast.error("no token");
                localStorage.removeItem(TOKEN_KEY);
                nav("/signin");
            }
        } catch (error) {
            toast.error("There problem, try login again ");
            nav("/signin");
        }
    };

    return <></>;
};

export default AuthUser;
