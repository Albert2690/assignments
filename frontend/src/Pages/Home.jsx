import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import { MdNotificationsNone } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";





function Home() {
    const menuref = useRef(null);

    const toggleMenu = () => {
        menuref.current.classList.toggle("show_menu");
      };
  return (
    <div className="header bg-gray-400 h-[100px]  flex items-center" >
    <div className="container">
      <div className="flex items-center justify-between">
        <div>
         
          {/* Logo here */}
          <Link to={'/'}>
            <div className='ml-[100px] font-bold text-lg'>
            Student Attendace

            </div>
          </Link>
        </div>
      
       
        <div className="flex items-center justify-between gap-4">
<div>
<form action="" >
              <input  type="text"  placeholder='Search by name or roll... ' className='border   rounded-full text-sm text-center w-[200px] md:w-[400px] h-[45px] border-textColor focus:border-blue-400'/>

              </form>
</div>
       
       
        <div className="relative">
        <IoIosNotifications className="w-[30px] h-[30px]" />
                    <div className='absolute text-red-600 top-5 text-xs right-1 font-bold'>
                      4
                    </div>
          </div>
      
          <div className="relative ">
        <IoSettingsOutline className="w-[25px] h-[25px]" />
                    
          </div>
      
          
         
          {/* <span className="md:hidden">
            <BiMenu className="w-7 h-7"></BiMenu>
          </span> */}
        </div>
      </div>
    </div>
  </div>
);
  
}

export default Home