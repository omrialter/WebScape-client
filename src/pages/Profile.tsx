import { useContext } from 'react';
import { MyContext } from "../context/MyContext";

function Profile() {
    const contextValue = useContext(MyContext);

    if (!contextValue) {
        return <div>Loading...</div>;
    }

    const { userData } = contextValue;

    return (
        <div className='p-3'>

            <div className="py-5 text-4xl text-center">Profile page</div>

            {userData && <div>
                <div>
                    <img className='max-w-[400px]' src={userData.profilePic ? userData.profilePic : "path/to/default/image.jpg"} alt="Profile" />
                </div>
                <p className='text-2xl'><span className='text-2xl'>User Name :</span> {userData.name}</p>


            </div>



            }
        </div>
    );
}

export default Profile;
