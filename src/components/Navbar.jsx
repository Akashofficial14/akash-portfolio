import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="fof-nav w-full px-2 py-4 bg-[#252525] mb-5 text-white flex justify-center items-center gap-5">
      <div className="mobile-nav w-full flex justify-between items-center px-3 lg:hidden">
        <h3 className="text-md font-thin px-4 py-2.5 bg-green-500 rounded-full active:text-yellow-500 cursor-pointer">
          get resume
        </h3>
        <div
          onClick={() => setToggle((prev) => !prev)}
          className="cursor-pointer z-[60]"
        >
          {toggle ? (
            <X className="text-white font-semibold" size={35} />
          ) : (
            <Menu className="text-white" size={35} />
          )}
        </div>
      </div>
      {/* when toggle is true show this to user */}
      {toggle && (
        <div className="toggle-view h-70 w-full px-3 py-5 absolute top-17 rounded-b-xl bg-[#252525] flex flex-col gap-5 lg:hidden">
          <a onClick={()=>(setToggle((prev)=>(!prev)))} href='#about' className="text-md font-thin border-b-2 py-2 border-yellow-500  hover:text-yellow-500 cursor-pointer lg:text-xl">
            about
          </a >
          <a onClick={()=>(setToggle((prev)=>(!prev)))} href='#skills' className="text-md font-thin border-b-2 py-2 border-yellow-500  hover:text-yellow-500 cursor-pointer lg:text-xl">
            skills
          </a >
          <a onClick={()=>(setToggle((prev)=>(!prev)))} href='#work' className="text-md font-thin border-b-2 py-2 border-yellow-500  hover:text-yellow-500 cursor-pointer lg:text-xl">
            work
          </a>
          <a onClick={()=>(setToggle((prev)=>(!prev)))} href='#contact' className="text-md font-thin border-b-2 py-2 border-yellow-500  hover:text-yellow-500 cursor-pointer lg:text-xl">
            contact
          </a >
        </div>
      )}
      {/* for desktop view its showing and for mobile its hidden */}
      <div className="right hidden lg:flex justify-center items-center gap-25 py-8 ">
        <a href="#about" className="text-md font-thin hover:text-yellow-500 cursor-pointer lg:text-xl">
          about
        </a >

        <a href="#skills" className="text-md font-thin hover:text-yellow-500 cursor-pointer lg:text-xl">
          skills
        </a >
        <a href="" className="text-md font-thin px-4 py-2.5 bg-green-500 rounded-full hover:text-yellow-500 cursor-pointer lg:text-xl">
          get resume
        </a >
        <a href="#work" className="text-md font-thin hover:text-yellow-500 cursor-pointer lg:text-xl">
          work
        </a >
        <a href="#contact" className="text-md font-thin hover:text-yellow-500 cursor-pointer lg:text-xl">
          contact
        </a >
      </div>
    </nav>
  );
};

export default Navbar;

// <h3 className="text-md font-thin  hover:text-yellow-500 cursor-pointer lg:text-xl">about</h3>
//   <h3 className="text-md font-thin hover:text-yellow-500 cursor-pointer lg:text-xl">skills</h3>
//   <h3 className="text-md font-thin hover:text-yellow-500 cursor-pointer lg:text-xl">get resume</h3>
//   <h3 className="text-md font-thin hover:text-yellow-500 cursor-pointer lg:text-xl">work</h3>
//   <h3 className="text-md font-thin hover:text-yellow-500 cursor-pointer lg:text-xl">contact</h3>
