import 'bootstrap/dist/css/bootstrap.min.css';
import { onAuthStateChanged,signOut } from 'firebase/auth';
import {auth} from "../utils/firebase";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

function Header(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const user=useSelector(store=>store.user);
    
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            navigate("/error")
          });
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName,photoURL} = user;
              dispatch(
                addUser({
                    uid:uid, 
                    email:email, 
                    displayName:displayName, 
                    photoURL:photoURL 
                })
            );
            navigate("/browse")
            } else {
              // User is signed out
              dispatch(removeUser());
              navigate("/");
            }
          });

          // unsubscribe when component unmounts
          return () => unsubscribe();
    },[])

    return(
        <div className="fixed top-0 left-0 w-screen bg-black bg-opacity-50 z-10 flex justify-between px-3">
            <img
            className="w-55" 
            src={LOGO}
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