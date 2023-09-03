import { useEffect } from "react";
import { URL } from ".././services/apiService"

function Home() {
    useEffect(() => {
        console.log(URL)

    }, []);


    return (
        <div className="text-center">
            <div className="py-5 text-4xl text-center">Home page </div>
            <button>Hello world</button>
        </div>
    )
}

export default Home