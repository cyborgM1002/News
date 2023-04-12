import { GiRunningNinja } from "react-icons/gi";
import { CgMenu, CgClose, CgProfile, CgSearch } from "react-icons/cg";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="flex dark:bg-gray-800 w-full h-12 justify-between items-center">
        <div className="text-3xl flex text-white font-bold pl-4">
          News Ninjas
          <GiRunningNinja className="relative text-4xl top-1 ml-1" />
        </div>
        <ul className="hidden md:flex gap-5 text-white text-lg px-4">
          <li className="cursor-pointer">Home</li>
          <li className="m-auto flex gap-1">
            <select
              onChange={handleSetCountry}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled selected>
                Country
              </option>
              {countries.map((options, index) => {
                return <option key={index}>{options}</option>;
              })}
            </select>
          </li>
          <li className="cursor-pointer">
            <select
              onChange={handleSetCategory}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled selected>
                Category
              </option>
              {categories.map((options, index) => {
                return <option key={index}>{options}</option>;
              })}
            </select>
          </li>
          <li className="cursor-pointer">Everything</li>

          <li className="cursor-pointer mt-[6px] text-2xl">
            <CgProfile />
          </li>
        </ul>
        <ul className="flex  md:hidden gap-5 text-white text-lg px-4">
          <li>
            <CgSearch className=" cursor-pointer mt-2 text-3xl" />
          </li>
          <li>
            {openMenu ? (
              <CgClose
                className="md:hidden text-white text-[2.5rem] pr-4 z-50 duration-200"
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              />
            ) : (
              <CgMenu
                className="md:hidden text-white text-[2.5rem] pr-4 z-50 duration-200"
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              />
            )}
          </li>
        </ul>
        <ul
          className={`md:hidden top-12 text-white bg-black h-screen w-full p-4 text-xl fixed ${
            openMenu ? "left-[0]" : "left-[-100%]"
          } duration-500`}
        >
          <li className="cursor-pointer p-4">Home</li>
          <li className="cursor-pointer p-4">Country</li>
          <li className="cursor-pointer p-4">Category</li>
          <li className="cursor-pointer p-4">Everything</li>
          <li className="cursor-pointer p-4">Account</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
