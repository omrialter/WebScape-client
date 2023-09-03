import { Link } from "react-router-dom";


function Header() {


    return (
        <header className="px-5 sticky top-0 z-10 py-5 bg-slate-500 shadow-md">
            <div className="flex justify-between items-center w-4/5 mx-auto">
                <div >
                    <h2 className="text-4xl px-5" >WebScape</h2>
                </div>
                <nav>
                    <ul className="flex justify-evenly">
                        <Link className="text-2xl px-2 hover:text-blue-500" to={"/"}><li>Home</li></Link>
                        <Link className="text-2xl px-2 hover:text-blue-500" to={"/profile"}><li>Profile</li></Link>
                        <Link className="text-2xl px-2 hover:text-blue-500" to={"/about"}><li></li></Link>

                    </ul>
                </nav>
                <div>
                    <button className="text-2xl px-5" >Log out</button>
                </div>
            </div>
        </header>
    )
}

export default Header