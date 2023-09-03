import { useEffect } from "react";
import { URL } from ".././services/apiService"

function Profile() {
    useEffect(() => {
        console.log(URL)

    }, []);


    return (
        <div>
            <div className="py-5 text-4xl text-center">Profile page </div>
        </div>
    )
}

export default Profile