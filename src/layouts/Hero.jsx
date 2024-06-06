import HeroImage from "../assets/hero-image.jpeg";

function Hero() {
  return (
    <div className="grid grid-cols-2 grid-rows-1 max-h-[500px]">
      <div className="flex flex-col gap-4 px-60 py-24 justify-center">
        <h1 className="text-4xl font-bold">Where Curiosity Meets Expertise</h1>
        <span>
          Unlock your full potential with Quackle. Access comprehensive courses
          in Data, Business, Marketing, and Software. Join our community of
          curious learners today.
        </span>
        <div className="flex">
          <div className="relative">
            <input
              type="email"
              name="email"
              className="rounded-md w-80 h-10 border border-slate-300 p-2 shadow-sm"
              placeholder="Enter your email address"
            />
            <button className="text-white text-xs bg-green-600 p-2 rounded-md absolute bottom-1 right-1">
              Get in touch
            </button>
          </div>
        </div>
      </div>
      <div>
        <img
          src={HeroImage}
          className="grid object-cover object-center w-full h-full"
        />
      </div>
    </div>
  );
}

export default Hero;
