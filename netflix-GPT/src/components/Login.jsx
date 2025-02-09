import { useRef, useState } from "react"
import Header from "./Header"
import checkValidData from "../utils/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login=()=>{
    
    const [isSignInForm,setIsSignInForm]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);
    const dispatch=useDispatch();

    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);
    
    
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    };

    const handleButtonClick=()=>{
        // console.log(email)
        const message=checkValidData(email.current.value,password.current.value);
        // console.log("ttt"+message)
        setErrorMessage(message);
        if(message) return;
        
        if(!isSignInForm){
            //SignUp Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in(automatcically) 
                    const user = userCredential.user;  
                    updateProfile(user, {
                        displayName: name.current.value, 
                        photoURL: USER_AVATAR,
                      }).then(() => {
                        // Profile updated!
                        const {uid,email,displayName,photoURL} = auth.currentUser;
                        dispatch(
                            addUser({
                                uid:uid, 
                                email:email, 
                                displayName:displayName, 
                                photoURL:photoURL 
                            })
                        );
                      }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message)
                      });                      
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+"-"+errorMessage)
                });
        }
        else{
            //signin logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => { 
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+"---"+errorMessage)
                });
        }
    }

    return(
        <div>
            <Header/>
            <div className="position-absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_small.jpg"
                />
            </div>
            <form
                onSubmit={(e)=>e.preventDefault()} //important
                className="w-2/7 position-absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-80">
                <h2 className="font-bold text-3xl py-2 m-2">
                    {isSignInForm ? "Sign In":"Sign Up"}
                </h2>
                {!isSignInForm && <input 
                    ref={name}
                    type="text" 
                    placeholder="Full Name" 
                    className="p-2 my-2 w-full bg-gray-700 rounded"
                />}
                <input 
                    ref={email}
                    type="text" 
                    placeholder="Email or phone number" 
                    className="p-2 my-2 w-full bg-gray-700 rounded"
                />
                <input 
                    ref={password}
                    type="password" 
                    placeholder="Password" 
                    className="p-2 my-2 w-full bg-gray-700 rounded"
                />
                <p className="text-red-500 font-bold py-2">{errorMessage}</p>
                <button className="bg-red-500 p-2 my-2 w-full rounded" onClick={handleButtonClick}>
                    {isSignInForm ? "Sign In":"Sign Up"}
                </button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered! Sign In Now."}
                </p>
            </form>
        </div>
    )
}

export default Login