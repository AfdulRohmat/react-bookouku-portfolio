import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bg-white shadow-md border-b-2 border-b-gray h-[80px] w-full flex items-center font-poppins  ">
        <div className="container flex items-center justify-between">
          {/* ICON */}
          <div className="flex gap-2">
            <p>icon</p>
            <p>Bookouku</p>
          </div>


          <div className="flex gap-4">
            <button className="h-[45px] w-[120px] border border-blue-primary-bookouku bg-white rounded-lg text-blue-primary-bookouku font-medium hover:bg-blue-primary-bookouku hover:bg-opacity-10 transition duration-150 ease-in-out ">SignIn</button>
            <button className="h-[45px] w-[120px] bg-blue-primary-bookouku rounded-lg text-white font-medium hover:bg-opacity-90 transition duration-150 ease-in-out  ">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
