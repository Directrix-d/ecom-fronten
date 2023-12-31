import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { loginhandler } from '../../redux/loginReducer';


const Login = () => {

  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const dispatch = useDispatch();
  const{isFetching, error} = useSelector((state) =>state.user);
  const navigate = useNavigate();

   const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const currentUser = user && JSON.parse(user).currentUser; 
  //const [status, setStatus] = useState(false)

  const handleClick =  async (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    
     try{
     await loginhandler(dispatch, user)
     navigate('/')
     window.location.reload();
    }
     catch (error) {
      console.error('Login failed:', error);
  };
}

  return (
    <div className="w-screen h-screen bg-cover  bg-gradient-to-r  from-cyan-200 to-fuchsia-200 flex items-center justify-center loginContainer">
    <div className="w-3/4 md:w-3/12 bg-gradient-to-bl from-white to-cyan-300 p-5 shadow-md ">
      <h1 className="text-2xl font-light">SIGN IN</h1>
      <form className="flex flex-col" onSubmit={handleClick}>
        <input
          className="flex-[1] min-w-[40%] mx-0 my-2.5 p-2.5 border-black border-[1px]"
          placeholder="Email" type='email' required onChange={(e)=>setEmail(e.target.value)}
      
        />
        <input
          className="flex-[1] min-w-[40%] mx-0 my-2.5 p-2.5 border-black border-[1px]"
          placeholder="Password"
          type="password" required
          onChange={(e)=>setPassword(e.target.value)}
        
        />
        <button
          className="w-2/5 bg-[teal] text-[white] cursor-pointer mb-2.5 px-5 py-[15px] border-[none]  self-end"
           
        >
          LOGIN
        </button>
        {error && (
          <span className="text-[red] my-[5px]">
            Wrong Credential entered...
          </span>
        )}
        {/* <button
          className="w-full bg-[teal] text-[white] cursor-pointer mb-2.5 px-5 py-[15px] border-[none]  self-end"
       
        >
          LOGIN AS USER
        </button> */}
        <div className="flex justify-between items-center">
       <Link to='/register' className="text-xs underline cursor-pointer mx-0 my-[5px]">
            CREATE A NEW ACCOUNT
       </Link>
        <Link to = '/' className="text-xs underline cursor-pointer mx-0 my-[5px]" > 
            GO TO HOMEPAGE
        </Link>
          
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login
