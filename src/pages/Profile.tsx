import { useContext } from 'react';
import { MyContext } from "../context/MyContext";
import Info from '../components/profile/Info';

function Profile() {


    const contextValue = useContext(MyContext);

    if (!contextValue) {
        return <div>Loading...</div>;
    }
    const { userData } = contextValue;
    console.log(userData)

    return (
        <div className="max-w-[1640px] mx-auto  bg-slate-300 px-4">


            <div >
                <div className="py-5  text-slate-600 ">

                    <div className='text-4xl font-bold text-center  '>Profile page</div>


                </div>
                <hr className='my-6' />

                {
                    userData?.profilePic &&
                    <div className='flex' >
                        <div>
                            <img className='max-w-[400px]  rounded-3xl shadow-2xl' src={userData.profilePic ? userData.profilePic : "path/to/default/image.jpg"} alt="Profile" />
                        </div>

                        <div>
                            <Info userInfo={userData} />
                        </div>
                        <div className='flex h-[40px] gap-5'>
                            <button>Following</button>
                            <button>Follower</button>
                            <button> Edit</button>
                        </div>
                    </div>
                }

            </div>
            <hr className='mt-12' />
            <div className='h-[500px]'>

            </div>






        </div>
    )
}

export default Profile;
