function index() {
  return (
    <div className="uppercase py-4">
      <div className="flex flex-col gap-8 text-center">
        <h2 className="text-2xl ">one platform for all premium listings</h2>
        <p>unlimited potential</p>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center xl:px-14 lg:px-8 px-4 xl:gap-56 lg:gap-20 gap-8 md:mt-28 mt-20">
        <div className="flex flex-col gap-2 xl:w-[45%]">
          <img className="object-contain" src="./images/ZIMO B.png" />
          <p className="text-3xl">one source</p>

          <h3 className="text-4xl">entry tickets</h3>
          <span className="text-sm">for all premium listings</span>
        </div>

        <div className="w-full flex flex-col gap-4">
          <img
            className="xl:h-[600px] w-full rounded-2xl"
            src="./images/Property 1821.jpg"
          />
          <p className="text-center">let your dreams find you</p>
        </div>
      </div>
    </div>
  );
}

export default index;
