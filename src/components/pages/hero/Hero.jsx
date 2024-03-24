import ImageSwiper from "./ImageSwiper";

const Hero = () => {
  return (
    <>
      <section className="text-gray-600 h-screen body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row sm:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h4>
              <br className="hidden lg:inline-block" />
              WHERE EVERY BITE'S A DELIGHT
            </h4>
            <h1 className="title-font sm:text-4xl text-3xl mb-5 mt-5 font-medium text-gray-900">
              <span className="lg:text-5xl bg-gradient-to-r from-rose-800 to-green-600 bg-clip-text text-transparent font-bold">
                QuickBite
              </span>{" "}
              <span className="font-bold">Foods</span>{" "}
            </h1>

            <p className="mb-8 tracking-wide leading-7">
              Welcome to quickBite, where every bite brings satisfaction at
              lightning speed. With fresh ingredients and bold flavors, we're
              committed to delivering quick service without compromising
              quality. Explore our exclusive deals and let us elevate your
              mealtime experience. Order now and savor the difference with us!
            </p>
            <div className="flex justify-center">
              <button className="flex justify-center items-center gap-2 lg:w-28 sm:w-20 lg:h-12 sm:h-8 cursor-pointer rounded-md shadow-2xl text-white text-sm p-3 font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">
                Order Now
              </button>

              <button className="inline-block lg:py-2 lg:px-6 p-2 lg:rounded-l-xl ml-4 rounded-t-xl bg-[#4bdd72] hover:bg-white hover:text-[#7747FF] focus:text-[#7747FF] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200">
                Menu
              </button>
            </div>
          </div>
          <div className="max-w-[250px] lg:max-w-xl md:max-w-md">
            <ImageSwiper />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
