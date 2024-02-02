import { useState } from "react";
import { CgClose, CgMenu, CgSearch } from "react-icons/cg";
import { GiRunningNinja } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { setCategory, setCountry, setPageNum } from "../../redux/slice";
import { CapitalizeFirstLetter } from "../../utils/TextFormatter";
import { categories, countries } from "../../utils/CommonUtilities";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const dispach = useDispatch();

  const setHome = () => {
    dispach(setCategory("sports"));
    dispach(setCountry("in"));
    dispach(setPageNum(1));
  };
  return (
    <div className="flex dark:bg-gray-800 w-full h-16 justify-between items-center">
      <div className="text-3xl flex justify-center items-center gap-3 text-white font-bold pl-4">
        <span>The News Ninjas</span>
        <GiRunningNinja className="text-6xl" />
      </div>
      <ul className="hidden md:flex gap-5 text-white text-lg px-4">
        <li onClick={setHome} className="cursor-pointer">
          Home
        </li>
        <li className="m-auto flex gap-1">
          <select
            defaultValue="Country"
            onChange={(e) => dispach(setCountry(e.target.value))}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {countries.map((options, index) => (
              <option key={index}>{CapitalizeFirstLetter(options)}</option>
            ))}
          </select>
        </li>
        <li className="cursor-pointer">
          <select
            defaultValue="Category"
            onChange={(e) => dispach(setCategory(e.target.value))}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {categories.map((options, index) => {
              return (
                <option key={index}>{CapitalizeFirstLetter(options)}</option>
              );
            })}
          </select>
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
        className={`md:hidden top-12 text-white dark:bg-gray-800 h-screen w-1/2 p-4 text-xl fixed ${
          openMenu ? "left-[0]" : "left-[-100%]"
        } duration-500`}
      >
        <li onClick={setHome} className="cursor-pointer pt-4">
          Home
        </li>
        <li className="m-auto flex gap-1 pt-4">
          <select
            defaultValue="Country"
            onChange={(e) => dispach(setCountry(e.target.value))}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {countries.map((options, index) => (
              <option key={index}>{CapitalizeFirstLetter(options)}</option>
            ))}
          </select>
        </li>
        <li className="cursor-pointer pt-4">
          <select
            defaultValue="Category"
            onChange={(e) => dispach(setCategory(e.target.value))}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {categories.map((options, index) => (
              <option key={index}>{CapitalizeFirstLetter(options)}</option>
            ))}
          </select>
        </li>
      </ul>
    </div>
  );
};
