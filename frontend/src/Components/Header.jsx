import React from "react";
import { useEffect, useRef,useState } from "react";

import { NavLink, Link } from "react-router-dom";
import {BiMenu} from "react-icons/bi";
import {  useSelector } from "react-redux";

const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/student-attendance",
    display: "Student Attendace",
  },
  {
    path: "/Home",
    display: "Home",
  },
 
  {
    path: "/",
    display: "Contact",
  },
];









function Header() {
  const headref= useRef(null)
const menuref = useRef(null)
// const {userInfo} = useSelector((state)=>state.auth)
// console.log(userInfo)

const handlestickyHeader = ()=>{
  window.addEventListener('scroll',()=>{
    if(document.body.scrollTop>80||document.documentElement.scrollTop>80){
      headref.current.classList.add('sticky_header')
    }else{
      headref.current.classList.remove('sticky_header')
    }
  })
}
//   useEffect(()=>{
//     handlestickyHeader()
//     return ()=>window.removeEventListener('scroll',handlestickyHeader)
      
    
//   })
const toggleMenu = ()=>{
  console.log(menuref.current.classList)
  menuref.current.classList.toggle('show_menu')
  
}

  return (
    <header className="header flex items-center" ref={headref}>
      <div className="container ">
        <div className="flex items-center justify-between"> 
          <div>
           
            {/* Logo here */}
            <Link to={'/'}>

            </Link>
          </div>
          {/* Menu here */}
          <div className="navigation"  >
            <ul className="menu flex items-center gap-4">
              {navLinks.map((item, index) => (
                <li key={index}>
                    <NavLink to={item.path} className={navclass=>navclass.isActive?'text-white leading-[7] font-[700] text-[20px]':'text-gray-400 leading-[7] font-[700] text-[17px]'}>{item.display}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* nav right */}
         
          <div className="flex items-center gap-4">

          {/* {userInfo?
          <>
         
          <div className="">
              <Link to={"/profile"}>
                <figure className="w-[35px] h-[35px] rounded-full mt-[12px]">
                  <img src={profile} alt="profile" />
                </figure>
              </Link>
            </div>
        <Logout />
        </>
        :
             <Link to={"/login"}>
             <button className="bg-primaryColor px-2 py-1 rounded-full font-[500] w-full text-sm text-white flex items-center justify-center">
               Login
             </button>
           </Link>
        
        } */}
          
           
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-7 h-7"></BiMenu>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
