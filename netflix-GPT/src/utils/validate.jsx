const checkValidData=(email,password)=>{
    
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    // const isNameValid=/^[a-zA-Z]+([-'\s][a-zA-Z]+)*$/.test(userName);  

    // if(!isNameValid) return "Not valid Name"
    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Password is not valid"

    return null;

}

export default checkValidData