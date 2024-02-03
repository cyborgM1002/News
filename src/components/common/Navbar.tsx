import { useState } from "react";
import { CgClose, CgMenu, CgSearch } from "react-icons/cg";
import { GiRunningNinja } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setCountry, setPageNum } from "../../redux/slice";
import { CapitalizeFirstLetter } from "../../utils/TextFormatter";
import { categories, countries } from "../../utils/CommonUtilities";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CategoryDropDown, CountryDropDown } from "./DropDowns";

export const Navbar = (allNewsData: any) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showCountries, setShowCountries] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const dispatch = useDispatch();
  const country: string = useSelector(({ country }) => country);
  const category: string = useSelector(({ category }) => category);

  function gotoHome() {
    dispatch(setPageNum(1));
    dispatch(setCategory("general"));
    dispatch(setCountry("in"));
    allNewsData({ pageNum: 1, country: "in", category: "general" });
  }

  return (
    <div className="flex dark:bg-gray-800 w-full h-16 justify-between items-center">
      <div className="text-3xl flex justify-center items-center gap-3 text-white font-bold pl-4">
        <span>The News Ninja</span>
        <GiRunningNinja className="text-6xl" />
      </div>
      <ul className="hidden md:flex gap-5 text-white text-lg px-4 pr-10">
        <li onClick={gotoHome} className="cursor-pointer">
          Home
        </li>

        <li
          onClick={() => {
            setShowCountries(!showCountries);
            setShowCategories(false);
          }}
          className="m-auto flex gap-1 justify-center items-center relative"
        >
          <div className="cursor-pointer">Country</div>
          {country && (
            <div className="text-xs text-gray-400 absolute top-6 left-1">
              {CapitalizeFirstLetter(country)}
            </div>
          )}
          <MdOutlineKeyboardArrowDown />
          {showCountries && <CountryDropDown />}
        </li>
        <li
          onClick={() => {
            setShowCategories(!showCategories);
            setShowCountries(false);
          }}
          className="m-auto flex gap-1 justify-center items-center relative"
        >
          <div className="cursor-pointer">Category</div>
          {category && (
            <div className="text-xs text-gray-400 absolute top-6 left-1">
              {CapitalizeFirstLetter(category)}
            </div>
          )}
          <MdOutlineKeyboardArrowDown />
          {showCategories && <CategoryDropDown />}
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
        <li className="cursor-pointer pt-4">Home</li>
        <li className="m-auto flex gap-1 pt-4">
          <select
            defaultValue="Country"
            onChange={(e) => dispatch(setCountry(e.target.value))}
            className="bg-gray-400 placeholder:text-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg "
          >
            {countries.map((options, index) => (
              <option key={index}>
                {CapitalizeFirstLetter(options?.value)}
              </option>
            ))}
          </select>
        </li>
        <li className="cursor-pointer pt-4">
          <select
            defaultValue="Category"
            onChange={(e) => dispatch(setCategory(e.target.value))}
            className="bg-gray-400 placeholder:text-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg "
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
