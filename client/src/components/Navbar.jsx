import React, { useState } from "react";
import { assets, menuLinks } from "../assets/assets.js";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext.jsx";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const Navbar = () => {
  const { setShowLogin, user, logout, isOwner, axios, setIsOwner } =
    useAppContext();

  const location = useLocation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const changeRole = async () => {
    try {
      const { data } = await axios.post("/api/owner/change-role");
      if (data.success) {
        setIsOwner(true);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Fixed Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 bg-gray-100 border-b border-borderColor 
          flex items-center justify-between px-6 py-4 sm:px-16 lg:px-24 xl:px-32 
          text-gray-600 transition-all duration-300 `}
      >
        {/* Logo */}
        <Link to="/">
          <img 
          className="h-9 w-auto" src="/logo.png" alt="Logo" />
        </Link>
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
              onClick={() => (isOwner ? navigate("/owner") : changeRole())}
              className="cursor-pointer"
            >
              {isOwner ? "Dashboard" : "List cars"}
            </button>

            <button
              onClick={() => {
                user ? logout() : setShowLogin(true);
              }}
              className="cursor-pointer px-8 py-2 bg-primary hover:bg-black transition-all
               text-white rounded-lg"
            >
              {user ? "Logout" : "Login"}
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
    </motion.div>
  );
};

export default Navbar;
