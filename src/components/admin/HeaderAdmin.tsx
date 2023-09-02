
function HeaderAdmin() {
    return (
        <header style={{ background: "orange" }} >
            <div className="p-2">
                <div className="flex text-center">

                    <div >
                        <h2 >Admin</h2>
                    </div>
                    <nav>
                        <ul>

                            <li>Users</li>
                            <li>Categories</li>
                            <li>Videos</li>


                        </ul>
                        <div>

                            <button >Log out</button>

                        </div>
                    </nav>
                </div>
            </div>

        </header>
    )
}

export default HeaderAdmin