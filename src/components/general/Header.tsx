import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { useState } from 'react';
import { useContext } from 'react';
import { MyContext } from "../../context/MyContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TOKEN_KEY } from "../../services/apiService";


function Header() {
    const contextValue = useContext(MyContext);
    const nav = useNavigate();
    if (!contextValue) {
        return <div>Loading...</div>;
    }

    const { userData } = contextValue;
    const [navi, setNavi] = useState<boolean>(false);

    const logOut = async () => {
        if (window.confirm("Are you sure you want to log out")) {
            await localStorage.removeItem(TOKEN_KEY);
            toast.info("You logged out");
            nav("/signin");
        }
    }


    return (

        <header className="w-full mx-auto px-5 sticky top-0 z-10 p-4 bg-slate-500 shadow-md ">
            {userData &&
                <div className="flex justify-between items-center w-4/5 mx-auto">
                    <AiOutlineMenu onClick={() => setNavi(!navi)} size={30} />
                    <div >
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl px-5" >WebScape</h2>
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
                        <button onClick={logOut} className="text-2xl px-5 hover:bg-white hover:text-slate-600" >Log out</button>
                    </div>
                </div>
            }


            <div className={navi ? "fixed top-0  left-0 w-[300px] h-screen bg-white z-10 duration-200" : "fixed top-0  left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
                <AiOutlineClose onClick={() => setNavi(!nav)} size={30} className="absolute right-4 top-4 cursor-pointer" />
                <h2 className="text-2xl p-4">
                    Best <span className="font-bold">Eats</span>
                </h2>
                <nav>
                    <ul className="flex flex-col p-4 text-gray-800">
                        <li className='text-xl py-4 flex'><TbTruckDelivery size={30} className='mr-4' /> Orders</li>
                        <li className='text-xl py-4 flex'><MdFavorite size={30} className='mr-4' /> Favorites</li>
                        <li className='text-xl py-4 flex'><FaWallet size={30} className='mr-4' /> Wallet</li>
                        <li className='text-xl py-4 flex'><MdHelp size={30} className='mr-4' /> Help</li>
                        <li className='text-xl py-4 flex'><AiFillTag size={30} className='mr-4' /> Promotions</li>
                        <li className='text-xl py-4 flex'><BsFillSaveFill size={30} className='mr-4' /> Best Ones</li>
                        <li className='text-xl py-4 flex'><FaUserFriends size={30} className='mr-4' /> Invite Friends</li>
                    </ul>
                </nav>
            </div>

        </header>

    )
}

export default Header