import Logo from "../assets/quackle-logo.png";

function Footer() {
  return (
    <div className="min-w-screen bg-forest px-40 py-8 ">
      <div className="flex justify-around items-center py-10">
        <div>
          <div className="flex items-center gap-2">
            <img
              src={Logo}
              alt="Quackle: Online Learning Platform in Digital Age"
              className="w-10 h-10"
            />
            <h2 className="text-white font-firaCode text-2xl font-medium">
              quackle
            </h2>
          </div>
          <p className="text-white text-sm">
            Unlock Your Full Potential, <br /> Learn Everywhere with Quackle.
          </p>
        </div>
        <div>
          <p className="text-white">Subscribe to our newsletter</p>
          <div className="relative">
            <input type="email" name="email" className="rounded-md w-80 h-10" />
            <button className="text-white text-xs bg-green-600 p-2 rounded-md absolute bottom-1 right-1">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr className="bg-[#E1E4ED]" />
      <div className="flex justify-around text-white text-md py-10 px-80">
        <div>
          <p className="font-medium">About Us</p>
          <p className="font-thin">Our instructors</p>
          <p className="font-thin">Privacy Policy</p>
          <p className="font-thin">Terms and Conditions</p>
          <p className="font-thin">Work with us</p>
        </div>
        <div>
          <p className="font-medium">Category</p>
          <p className="font-thin">Data</p>
          <p className="font-thin">Business</p>
          <p className="font-thin">Marketing</p>
          <p className="font-thin">Software</p>
        </div>
        <div>
          <p className="font-medium">Contact Us</p>
          <div>
            <p className="font-thin">Email:</p>
          </div>
          <div>
            <p className="font-thin">Phone:</p>
          </div>
        </div>
      </div>
      <hr className="bg-[#E1E4ED]" />
      <div className="py-10">
        <p className="font-thin text-xs text-white text-center">
          Copyright © 2025 Kawalin Limprakhon | All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
