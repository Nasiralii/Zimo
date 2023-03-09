function index() {
  return (
    <div className="lg:h-screen h-[600px]  text-white hero-bg flex flex-col justify-between uppercase lg:p-10 md:p-6 p-4 pb-6">
      <div className="md:grid md:grid-cols-3 flex  flex-col gap-8 items-center w-full ">
        <div className="flex  gap-5 items-end">
          <img className="md:w-12 w-4" src="./Images/ZIMO Menu Icon W.svg" />
          <img className="md:w-28 w-12" src="./Images/ZIMO W.png" />
          <p className="md:text-base text-xs">about</p>
        </div>
        <div>
          <img className="w-36 flex mx-auto" src="./Images/ZIMO ZIG W.png" />
        </div>
        <div className="flex xl:gap-8 justify-end items-center">
          <div className="flex gap-3 items-center">
            <div className="flex flex-col md:text-xs text-[8px] text-right">
              <p>17:23 london united kingdom</p>
              <p>sunday, 12 february 2023</p>
            </div>
            <img
              className="md:w-12 w-6 md:h-7 h-5"
              src="./Images/download.png"
            />
          </div>
          <img className="w-14 h-8" src="./Images/ZIMO User Icon W.svg" />
          <img className="w-8 h-8 invert filter-100" src="./Images/cart.jpg" />
        </div>
      </div>
    <div className="flex gap-2 items-center -mt-10 xl:-mt-24  text-white">
        <img className="w-8 h-7 invert grayscale-100" src="./Images/arrow.png"/>
    <p className="">Back</p> </div>
      <div className="flex flex-col   gap-3">
        <h2 className="text-2xl">Discover</h2>
        <h3 className="text-3xl">a new world</h3>
        <span className="text-sm lato-light">for those who wish for morr...</span>
      </div>
      <div className="flex flex-col gap-8 items-center">
        <h2>bringing the world closer together</h2>
        <img className="invert grayscale w-20" src="./Images/arrow-down.webp" />
      </div>
    </div>
  );
}

export default index;
