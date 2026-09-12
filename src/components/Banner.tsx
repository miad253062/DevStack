import HeroImage from "../assets/banner-stack.png";
function Banner() {
  return (
      <section className="container mx-auto mt-15 md:mt-4 text-center md:text-left">
        <div className="flex flex-wrap md:justify-between md:items-center mx-2">
          <div className="flex-1 flex-col space-y-10">
            <h1 className="text-5xl font-extrabold">
              Build Your Ideal <br/><span className="bg-linear-to-r from-orange-600 via-pink-500 to-violet-600 bg-clip-text text-transparent">Development Stack</span>
            </h1>
            <p className="text-justify text-xl text-gray-500">
              Explore frontend, backend, database and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>
            <div className="flex gap-4">
                <button className="px-4 py-2 bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 rounded-[10px] cursor-pointer text-white">Explore Technologies</button>
                <button className="px-4 py-2 outline-1 outline-gray-300 rounded-xl cursor-pointer">Learn More</button>
            </div>
            
          </div>
          <img className="flex-1" src={HeroImage} alt="" />
        </div>
      </section>
  );
}
export default Banner;