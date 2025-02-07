import 'bootstrap/dist/css/bootstrap.min.css';
import { signOut } from 'firebase/auth';
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function Header(){
    const navigate=useNavigate();
    const user=useSelector(store=>store.user);
    console.log(user)

    const handleSignOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
          }).catch((error) => {
            // An error happened.
            navigate("/error")
          });
    }
    return(
        <div className="position-absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between">
            <img
            className="w-55" 
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"
            />
            {user && (<div className="flex p-2">
                <img 
                src={user?.photoURL}
                // src="https://www.pngmart.com/files/4/Itachi-Uchiha-PNG-Photo.png"
                className="w-14 h-14"
                alt="usericon" 
                />
                <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
            </div>)} 
        </div>
    )
}

export default Header