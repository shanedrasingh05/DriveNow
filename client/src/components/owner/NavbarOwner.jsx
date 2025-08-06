import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext';

const NavbarOwner = () => {

    const {user} = useAppContext()

  return (
    <div
      className="flex items-center justify-between px-6 md:px-10 py-4 text-gray-500 border-b
     border-borderColor relative transition-all"
    >
      <Link to="/">
        <svg
          className="h-9 "
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
      <p className='font-semibold'>Welcome, {user?.name || "Owner"}</p>
    </div>
  );
}

export default NavbarOwner
