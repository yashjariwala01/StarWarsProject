import React from "react";
import image from '../assets/download.jpeg'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Opening = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black bg-opacity-90">
      <motion.div
        className="h-80vh flex justify-center items-center"
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <img
          className="w-[70%] rounded-md"
          src={image}
          alt="Bitcoin"
        />
      </motion.div>
          <Link to='/home'><button className=" text-white font-semibold bg-gradient-to-r from-blue-500 to-gray-600 px-4 py-3 text-4xl rounded-md text-opacity-70 mt-14">Get started</button>

        </Link>    
</div>
  );
};

export default Opening;
