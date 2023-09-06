import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { MyContext } from "../../context/MyContext";

function Header() {
    const contextValue = useContext(MyContext);

    if (!contextValue) {
        return <div>Loading...</div>;
    }

    const { userData } = contextValue;


    return (

        <header className="max-w-[1640px] mx-auto px-5 sticky top-0 z-10 p-4 bg-slate-500 shadow-md">
            {userData &&
                <div className="flex justify-between items-center w-4/5 mx-auto">
                    <div >
                        <h2 className="text-4xl px-5" >WebScape</h2>
                    </div>
                    <div className="bg-gray-200 flex items-center rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px] hover:bg-white">
                        <AiOutlineSearch size={25} />
                        <input className="bg-transparent  p-2 focus:outline-none w-full" type="text" placeholder="search food" />
                    </div>
                    <nav>
                        <ul className="flex justify-evenly">
                            <Link className="text-2xl px-2 hover:text-blue-500" to={"/"}><li>Home</li></Link>
                            <Link className="text-2xl px-2 hover:text-blue-500" to={userData.user_name ? userData.user_name : "profile"}><li>Profile</li></Link>
                            <Link className="text-2xl px-2 hover:text-blue-500" to={"/about"}><li></li></Link>

                        </ul>
                    </nav>
                    <div >
                        <button className="text-2xl px-5 hover:bg-white hover:text-slate-600" >Log out</button>
                    </div>
                </div>
            }
        </header>

    )
}

export default Header