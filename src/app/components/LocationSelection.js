"use client";
import React from "react";
import { useState } from "react";

//headless ui
import { Menu } from "@headlessui/react";

//icons
import { FaMapMarkerAlt } from "react-icons/fa";

//location Dates
const locations = [
  "Main Street 123, United States",
  "Business Avenue, Canada",
  "Park Road 789, Uk",
  "Street 6047,France",
];

export default function LocationSelection() {
  const [location, setLocation] = useState("Select Location");
  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row">
      <div className="relative flex-1">
        {/* btn  */}
        <Menu.Button className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:px-8">
          <div className="w-full h-16 xl:h-full flex justify-center xl:justify-start xl:border-r xl:border-black/10">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
                <FaMapMarkerAlt className="text-accent"></FaMapMarkerAlt>
                <div className="font-bold text-[15px] uppercase">
                  Select Location
                </div>
              </div>
              <div className="uppercase font-medium text-secondary text-[13px] text-center xl:ml-6 xl:text-left">
                {location}
              </div>
            </div>
          </div>
        </Menu.Button>
        <Menu.Items className="dropdown-menu shadow-lg absolute -top-56 xl:top-[90px] left-1/2 xl:left-0 z-10 transform -translate-x-1/2 text-sm xl:-translate-x-0 text-center xl:text-left w-full bg-white py-6 max-w-[332px] rounded-[10px]  ">
          {locations.map((location, index) => {
            return (
              <div
                onClick={() => setLocation(location)}
                className="py-4 cursor-pointer xl:pl-10 hover:bg-gray-50 text-[13px] uppercase"
                key={index}
              >
                {location}
              </div>
            );
          })}
        </Menu.Items>
      </div>
    </Menu>
  );
}
