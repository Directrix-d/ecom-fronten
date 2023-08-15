import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom'; // Assuming you are using react-router for routing

const Register = () => {
 const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false)
  const handleRegister = (e) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      password
    }
 

  axios.post("http://localhost:3300/auth/register",userData)
  .then((res)=>console.log(res.data))
  .catch((error)=>console.log(error))
  .then(() =>setStatus(true))
  

};
 useEffect(() => {
  if (status) {
    setTimeout(() => {
     setStatus(false); // Reset the redirect state to prevent infinite loop
      // Redirect to login page after 5 seconds
      navigate("/login");
    }, 1000); 
  }
}, [status]);



  return (
    <div className="w-screen h-screen bg-cover flex items-center justify-center registerContainer bg-gradient-to-r from-cyan-200 to-fuchsia-200">
      <div className="w-3/4 md:w-2/5 bg-gradient-to-bl from-white to-cyan-300 p-5">
        <h1 className="text-2xl font-light">CREATE AN ACCOUNT</h1>
        <form className="flex flex-wrap " onSubmit={handleRegister}>
          <input placeholder='First Name' className=' flex-[1] min-w-[40%] ml-0 mr-2.5 mt-5 mb-0 p-2.5 border-black border-[1px] '/>
          <input placeholder='Last Name' className='flex-[1] min-w-[40%] ml-0 mr-2.5 mt-5 mb-0 p-2.5 border-black border-[1px]'/>
          <input placeholder='Username' className='flex w-full min-w-[40%] ml-0 mr-2.5 mt-5 mb-0 p-2.5  border-black border-[1px] ' onChange={(e)=> setUsername(e.target.value)}/>
          <input placeholder='Email' type='email' className='flex w-full min-w-[40%] ml-0 mr-2.5 mt-5 mb-0 p-2.5  border-black border-[1px]' onChange={(e)=>setEmail(e.target.value)}/>
          <input placeholder='Password' type='password' className='flex w-full min-w-[40%] ml-0 mr-2.5 mt-5 mb-0 p-2.5  border-black border-[1px]' onChange={(e)=>setPassword(e.target.value)}/>
          <span className="text-xs mx-0 my-5">
            By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          { status && (
          <div className="flex justify-center items-center w-full my-4 text-[#006666] text-[20px]">
            <h3>Successfully Created Account</h3>
          </div>
            ) }
            
          
          <div className="flex justify-end w-full">
            <button className="w-2/5 bg-[teal] text-[white] cursor-pointer px-5 py-[15px] border-[none]" onSubmit={handleRegister}>
              CREATE
            </button>
          </div>


          <div className="flex gap-[10vw] mt-2 p-1">
      

            <Link to="/login" className="text-xs underline cursor-pointer mx-0 my-[5px]">
              ALREADY HAVE ACCOUNT
            </Link>
          
            <Link to="/" className="text-xs underline cursor-pointer mx-0 my-[5px]">
              
              GO TO HOMEPAGE
            </Link>
       
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
