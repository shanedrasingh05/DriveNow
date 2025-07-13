// import { useState } from 'react'
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { assets, dummyCarData } from "../assets/assets";
import Loader from "../components/Loader";

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const currency = import.meta.env.VITE_CURRENCY;

  const handleSubmit = async (e) =>{
    e.preventDefault();
  }

  useEffect(() => {
    setCar(dummyCarData.find((car) => car._id === id));
  }, [id]);

  return car ? (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16">
      <button
        className="flex items-center gap-2 text-gray-500 mb-6 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <img src={assets.arrow_icon} alt="" className="rotate-180 opacity-65" />
        Back to all cars
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* left: car image & details */}

        <div className="lg:col-span-2">
          <img
            src={car.image}
            alt=""
            className="w-full h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-md"
          />

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">
                {car.brand} {car.model}
              </h1>
              <p className="text-gray-500 text-lg">
                {car.category} . {car.year}
              </p>
            </div>
            <hr className="border-borderColor my-6" />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                {
                  icon: assets.users_icon,
                  text: `${car?.seating_capacity || 0} Seats`,
                },
                {
                  icon: assets.fuel_icon,
                  text: `${car?.fuel_type || "Hybrid"}`,
                },
                {
                  icon: assets.car_icon,
                  text: `${car?.transmission || "Semi-Automatic"}`,
                },
                {
                  icon: assets.location_icon,
                  text: `${car?.location || "New York"}`,
                },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  className="flex flex-col items-center text-center bg-gray-100 p-4 rounded-md shadow-sm"
                >
                  <img src={icon} alt="" className="h-5 mb-2" />
                  <span className="text-sm font-medium text-gray-700">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Description Section */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Description</h2>
              <p className="text-gray-600">
                {car?.description || "No description available."}
              </p>
            </div>

            {/* Features Section */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Features</h2>
              <ul className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                {[
                  "360° Camera",
                  "Bluetooth",
                  "GPS",
                  "Heated Seats",
                  "Rear View Mirror",
                  "Sunroof",
                ].map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <img
                      src={assets.check_icon}
                      alt="check"
                      className="h-4 w-4 mr-2"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Booking form */}

        <form onSubmit={handleSubmit}
        className="shadow-xl h-max sticky top-20 rounded-2xl p-6 space-y-6 bg-white text-gray-600">
          {/* Price Section */}
          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold text-gray-900">
              {currency}
              {car.pricePerDay}
            </p>
            <span className="text-sm text-gray-400 font-medium">per day</span>
          </div>

          <hr className="border-gray-200" />

          {/* Pickup Date */}
          <div>
            <label
              htmlFor="pickup-date"
              className="block text-sm font-medium mb-1"
            >
              Pickup Date
            </label>
            <input
              type="date"
              id="pickup-date"
              required
              min={new Date().toISOString().split("T")[0]}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-200"
            />
          </div>

          {/* Return Date */}
          <div>
            <label
              htmlFor="return-date"
              className="block text-sm font-medium mb-1"
            >
              Return Date
            </label>
            <input
              type="date"
              id="return-date"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-200"
            />
          </div>

          {/* Book Button */}
          <button
            
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-sm font-semibold tracking-wide hover:bg-black transition-all duration-200"
          >
            Book Now
          </button>

          {/* Note */}
          <p className="text-center text-xs text-gray-400">
            No credit card required to reserve
          </p>
        </form>

      
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default CarDetails;
