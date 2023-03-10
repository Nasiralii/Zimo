function index() {
  return (
    <div className="lg:h-screen pers lg:py-0 py-24 w-full ">
      <div className="flex flex-col md:gap-0 gap-8 md:p-14 p-4  h-full  md:justify-between">
        <div className="w-full flex justify-end">
          <div className="flex uppercase md:justify-end lg:w-[35%] md:w-[44%]  flex-col md:gap-4 gap-2 text-white ">
            <h3 className="text-2xl tracking-widest lato-light">personalized for you</h3>
            <p className="leading-7 opacity-70  tracking-widest lato-light text-xs">
              delivering thousands of personalized alerts everyday.out users can
              be first in line when that opportunity of a lifetime is here
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse md:gap-0- gap-8 md:justify-between text-white">
          <img
            className="opacity-10 filter flex md:mx-0  mx-auto w-[30%]"
            src="./Images/ZIMO ZIG W.png"
          />
          <div className="flex uppercase items-center gap-2 md:mt-24  tracking-widest lato-light text-xs">
            <p>create user id</p>
           
           <img className="rotate-180 flex w-8 h-6 invert grayscale-100" src="./Images/arrow.png"/>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default index;
