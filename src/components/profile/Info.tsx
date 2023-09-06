
interface User {
    _id: string;
    name: string;
    user_name: string;
    profilePic: string | null;
    desc: string;
}
type InfoProps = {
    userInfo: User;
};
const Info: React.FC<InfoProps> = ({ userInfo }) => {
    return (
        <div className="p-4 mx-20  ">
            {userInfo &&
                <div>
                    <p className='text-3xl font-bold text-slate-600'>Name : <span className='text-2xl text-black '>{userInfo.name}</span></p>
                    <p className='text-3xl font-bold my-2 text-slate-600'>User Name : <span className='text-2xl text-black'>{userInfo.user_name}</span></p>
                    <p className="text-3xl font-bold text-slate-600">Discription :</p>
                    <p className="text-2xl my-2 ">{userInfo.desc}</p>

                </div>
            }
        </div>
    )
}

export default Info