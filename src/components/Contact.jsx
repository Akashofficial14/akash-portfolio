import React from "react";

const Contact = () => {
  return (
    <div className="fof-nav contact w-full px-3 py-15 bg-black flex flex-col justify-center items-center gap-4 text-white" id='contact'>
      <h1 className=" text-4xl font-semibold text-center lg:text-7xl">
        Know <span className="text-[#FF9999]"> me </span> <br />
        <span className="text-[#AFFFA3]">Beyond</span> the Screen{" "}
        <span className="text-[#AFFFA3] rounded-full">.</span>
      </h1>
    <p className="text-md font-semibold text-center lg:text-3xl">Let's Connect the Dots</p>
      <img
        className="w-full object-cover object-center rounded-xl transition-transform hover:scale-110 lg:w-120"
        src="/akash.jpg"
        alt=""
      />
      <div className="links flex gap-2 justify-center items-center flex-wrap lg:gap-25 ">
        <div className="one flex gap-1 justify-center items-center px-3 py-1 rounded-2xl transition-transform cursor-pointer hover:scale-110 lg:bg-transparent  ">
          <img  className="w-7"
            src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
            alt=""
          />
          <button className="text-lg font-light lg:text-3xl">Linkedin</button>
        </div>
        <div className="two flex gap-1 justify-center items-center px-3 py-1 rounded-2xl transition-transform cursor-pointer hover:scale-110 lg:bg-transparent ">
          <img className="w-7"
            src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000"
            alt=""
          />
          <button className="text-lg font-light lg:text-3xl">Mail</button>
        </div>
        <div className="three flex gap-1 justify-center items-center px-3 py-1 rounded-2xl transition-transform cursor-pointer hover:scale-110 lg:bg-transparent ">
          <img className="w-7"
            src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"
            alt=""
          />
          <button className="text-lg font-light lg:text-3xl">Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
