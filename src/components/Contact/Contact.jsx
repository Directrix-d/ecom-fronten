// import React from 'react';
// import { Send } from '@mui/icons-material';

// // Import the image URL
// import bg from './unrivaledmarijuana-aUe9RCFFcjU-unsplash.jpg'
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import GoogleIcon from "@mui/icons-material/Google";
// import PinterestIcon from "@mui/icons-material/Pinterest";

// const Contact = () => {
//   return (
//     <div
//       className="h-[60vh] flex items-center justify-center flex-col my-10"
//       style={{
//         backgroundImage: `url(${bg})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
//       <h1 className="text-5xl text-black mb-5 font-medium ">BE IN TOUCH WITH US :) </h1>
//       <div className="w-[80%] md:w-6/12 h-10 bg-[white] flex justify-between border border-solid border-[lightgray] ">
//         <input
//           placeholder="Your email"
//           className="flex-[8] pl-5 border-[none]"
//         />
//         <button className="flex-[1] bg-[#ff3e6c] text-[white] border-[none]">
//           <Send  /> 
//         </button>
//       </div>
//       <div className="text-7xl text-white mb-5 font-medium  mt-10 ">visit us on :  </div>
//       <div className=" icons space-x-10 text-white " >
//           <FacebookIcon />
//           <InstagramIcon />
//           <TwitterIcon />
//           <GoogleIcon />
//           <PinterestIcon />
//         </div>

//     </div>
//   );
// };

// export default Contact;

import React from 'react';
import { Send } from '@mui/icons-material';

import bg from './unrivaledmarijuana-aUe9RCFFcjU-unsplash.jpg'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Contact = () => {
  return (
    <div
      className="h-[60vh] flex items-center justify-center flex-col my-10 "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="text-5xl sm:tex text-gray-600 mb-5 font-medium ">BE IN TOUCH WITH US :) </h1>
      <div className="w-[80%]  h-10 bg-[white] flex  border border-solid border-[lightgray] ">
        <input
          placeholder="Your email"
          className="w-full md:w-[70%] px-5 border-[none] mb-2 md:mb-0"
        />
        <button className="w-full md:w-[5%] bg-[#ff3e6c] text-[white] border-[none]">
          <Send />
        </button>
      </div>
      <div className="text-3xl text-white mb-5 font-medium mt-10">Visit us on:</div>
      <div className="icons flex space-x-4 text-white mt-2 md:mt-5">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <GoogleIcon />
        <PinterestIcon />
      </div>
    </div>
  );
};

export default Contact;

