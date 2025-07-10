import React, { useState } from "react";
import { assets, menuLinks } from "../assets/assets.js";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* Fixed Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 bg-gray-100 border-b border-borderColor 
          flex items-center justify-between px-6 py-4 sm:px-16 lg:px-24 xl:px-32 
          text-gray-600 transition-all duration-300 shadow-xl`}
      >
        {/* Logo */}
        <Link to="/">
          <svg
            className="h-9 w-auto"
            viewBox="0 0 300 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="48"
              fontFamily="Arial"
            >
              <tspan fill="#4FBF8B">Ḓ</tspan>
              <tspan fill="#000000">riveNow</tspan>
            </text>
          </svg>
        </Link>

        {/* Menu Links */}
        <div
          className={`transform transition-transform duration-300 z-50
            max-sm:fixed max-sm:top-16 max-sm:h-screen max-sm:w-full max-sm:border-t max-sm:p-4
            right-0 border-borderColor flex flex-col sm:flex-row
            items-start sm:items-center gap-4 sm:gap-8
            bg-gray-100 ${
              open ? "max-sm:translate-x-0" : "max-sm:-translate-x-full"
            }`}
        >
          {menuLinks.map((link, index) => (
            <Link key={index} to={link.path}>
              {link.name}
            </Link>
          ))}

          {/* Search Bar */}
          <div className="hidden lg:flex items-center text-sm gap-2 border border-borderColor rounded-full px-3 max-w-56">
            <input
              type="text"
              className="p-1.5 w-full bg-transparent outline-none placeholder-gray-500"
              placeholder="Search products..."
            />
            <img src={assets.search_icon} alt="search icon" />
          </div>

          {/* Dashboard & Login */}
          <div className="flex max-sm:flex-col gap-6 items-start sm:items-center">
            <button
              onClick={() => navigate("/owner")}
              className="cursor-pointer"
            >
              Dashboard
            </button>
            <button
              onClick={() => setShowLogin(true)}
              className="cursor-pointer px-8 py-2 bg-primary hover:bg-black transition-all text-white rounded-lg"
            >
              Login
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden cursor-pointer"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <img src={open ? assets.close_icon : assets.menu_icon} alt="menu" />
        </button>
      </div>

      {/* Spacer to prevent content hiding behind fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { assets, menuLinks } from "../assets/assets.js";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// const Navbar = ({ setShowLogin }) => {
//   const location = useLocation();
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <div
//       className={`flex items-center justify-between px-6 py-4 sm:px-16 lg:px-24 xl:px-32
//         text-gray-600 border-b border-borderColor relative transition-all duration-300
//         ${location.pathname === "/" ? "bg-gray-100" : "bg-gray-100"}`}
//     >
//       <Link to="/">
//         <svg
//           className="h-9 w-auto"
//           viewBox="0 0 300 100"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <text
//             x="50%"
//             y="50%"
//             dominantBaseline="middle"
//             textAnchor="middle"
//             fontSize="48"
//             fontFamily="Arial"
//           >
//             <tspan fill="#4FBF8B">Ḓ</tspan>
//             <tspan fill="#000000">riveNow</tspan>
//           </text>
//         </svg>
//       </Link>

//       <div
//         className={`transform transition-transform duration-300 z-50
//           max-sm:fixed max-sm:top-16 max-sm:h-screen max-sm:w-full max-sm:border-t max-sm:p-4
//           right-0 border-borderColor flex flex-col sm:flex-row
//           items-start sm:items-center gap-4 sm:gap-8
//           bg-gray-100 ${
//             open ? "max-sm:translate-x-0" : "max-sm:-translate-x-full"
//           }`}
//       >
//         {menuLinks.map((link, index) => (
//           <Link key={index} to={link.path}>
//             {link.name}
//           </Link>
//         ))}

//         <div className="hidden lg:flex items-center text-sm gap-2 border border-borderColor rounded-full px-3 max-w-56">
//           <input
//             type="text"
//             className="p-1.5 w-full bg-transparent outline-none placeholder-gray-500"
//             placeholder="Search products..."
//           />
//           <img src={assets.search_icon} alt="search icon" />
//         </div>

//         <div className="flex max-sm:flex-col gap-6 items-start sm:items-center ">
//           <button onClick={() => navigate("/owner")} className="cursor-pointer">
//             Dashboard
//           </button>
//           <button
//             onClick={() => setShowLogin(true)}
//             className="cursor-pointer px-8 py-2 bg-primary hover:bg-black transition-all text-white rounded-lg"
//           >
//             Login
//           </button>
//         </div>
//       </div>

//       <button
//         className="sm:hidden cursor-pointer"
//         aria-label="Menu"
//         onClick={() => setOpen(!open)}
//       >
//         <img src={open ? assets.close_icon : assets.menu_icon} alt="menu" />
//       </button>
//     </div>
//   );
// };

// export default Navbar;
