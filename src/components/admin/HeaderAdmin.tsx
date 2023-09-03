import { Link } from "react-router-dom";
function HeaderAdmin() {
    return (
        <header className="px-5 sticky top-0 z-10 py-5 shadow-md" style={{ background: "orange" }} >
            <div className="flex justify-between items-center w-4/5 mx-auto">
                <div >
                    <h2 className="text-4xl px-3" >Admin</h2>
                </div>
                <nav>
                    <ul className="flex justify-evenly">
                        <Link className="text-2xl px-2" to={"/"}><li>Home</li></Link>
                        <Link className="text-2xl px-2" to={"/admin/users"}><li>Users</li></Link>
                        <Link className="text-2xl px-2" to={"/admin/posts"}><li>Posts</li></Link>
                        <Link className="text-2xl px-2" to={"/admin/comments"}><li>Comments</li></Link>
                    </ul>
                </nav>
                <div>
                    <button className="text-2xl px-3" >Log out</button>
                </div>
            </div>

        </header>
    )
}

export default HeaderAdmin