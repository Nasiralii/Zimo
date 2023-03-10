import { useState } from "react";

function index() {
  const [dropDown,setDropDown]=useState(false);
  return (
    <div className="lg:h-screen h-[600px]  text-white hero-bg flex flex-col justify-between uppercase lg:p-10 md:p-6 p-4 pb-6">
      <div className="md:grid md:grid-cols-3 flex  md:gap-8 justify-between  items-center w-full ">
        <div className="flex md:flex-row md:gap-5 gap-2 flex-col  md:items-end">
          <img className="md:w-12 w-4" src="/Images/ZIMO Menu Icon W.svg" />
          <img className="md:w-28 w-12" src="/Images/ZIMO W.png" />
          <p className="md:text-sm text-xs lato-light">about</p>
        </div>
        <div>
          <img className="md:w-36 w-24 flex mx-auto" src="/Images/ZIMO ZIG W.png" />
        </div>
      
       <button className={` ${dropDown===false ? "block " : "hidden"} md:hidden z-50`} onClick={()=>setDropDown(true)}> 
        <img className="w-7 h-7 invert grayscale-100 md:hidden block z-50" src="./Images/open.png"/></button>
        <button className={` ${dropDown===true ? "block " : "hidden"} z-50 md:hidden`} onClick={()=>setDropDown(false)}> 
        <img className="w-7 h-7 invert z-50 grayscale-100 md:hidden block " src="./Images/close.png"/>
        </button>
      
        <div className={` md:flex hidden xl:gap-8 justify-end items-center`} >
          <div className="flex gap-3 items-center">
            <div className="flex flex-col md:text-xs lato-thin text-[8px] text-right">
              <p>17:23 london united kingdom</p>
              <p>sunday, 12 february 2023</p>
            </div>
            <img
              className="md:w-12 w-6 md:h-7 h-5"
              src="/Images/download.png"
            />
          </div>
          <img className="w-14 h-8" src="/Images/ZIMO User Icon W.svg" />
          <img className="w-8 h-8 invert filter-100" src="/Images/cart.jpg" />
        </div>
        {dropDown===true ? 
        <div className="absolute top-8 z-30  right-0 w-[40%]  ">
         <div className={`  xl:gap-8 p-2 justify-end items-center my-8 bg-gray-500`} >
          <div className="flex gap-3 flex-col items-center">
            <div className="flex flex-col md:text-xs lato-thin text-[8px] text-right">
              <p>17:23 london united kingdom</p>
              <p>sunday, 12 february 2023</p>
            </div>
            <img
              className="w-12 my-2 "
              src="/Images/download.png"
            />
          </div>
         <div className="flex justify-between gap-8">
         <img className="w-5 " src="/Images/ZIMO User Icon W.svg" />
          <img className="w-5  invert filter-100" src="/Images/cart.jpg" />
          </div>
        </div>
        </div> :null}
      </div>
    <div className="flex gap-2 items-center -mt-10 xl:-mt-24  text-white">
        <img className="w-8 h-7 invert grayscale-100" src="/Images/arrow.png"/>
    <p className="lato-thin tracking-wider">Back</p> </div>
      <div className="flex flex-col   gap-3">
        <h2 className="text-2xl lato-light tracking-widest">Discover</h2>
        <h3 className="text-3xl lato-light tracking-widest">a new world</h3>
        <span className="text-xs lato-thin text-gray-500 tracking-wide ">for those who wish for mor...</span>
      </div>
      <div className="flex flex-col gap-5 items-center text-xs lato-thin text-gray-500 tracking-wide">
        <h2>bringing the world closer together</h2>
        <img className="invert grayscale w-16" src="/Images/arrow-down.webp" />
      </div>
    </div>
  );
}

export default index;
