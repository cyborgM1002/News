import { useEffect, useState } from "react";
import Card from "../common/card";
import { GiRunningNinja } from "react-icons/gi";
import { CgMenu, CgClose, CgProfile, CgSearch } from "react-icons/cg";
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { Footer } from "../common/Footer";

//36c1795ab9b14a19bd43f39dc7bc1e9a    first api key
// f37ec0266cab46e2a21742f0d0742652   second api key
function NewsApp(props) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNum, setPageNum] = useState(1);
  const [country, setCountry] = useState("in");
  const [category, setCategory] = useState("health");
  const [openMenu, setOpenMenu] = useState(false);

  const countries = ["in", "us"];
  const categories = [
    "entertainment",
    "general",
    "health",
    "sports",
    "science",
    "technology",
    "bussiness",
  ];

  const handleSetCountry = (event) => {
    setCountry(event.target.value);
    //  console.log(event.target.value);
  };
  const handleSetCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleNext = () => {
    setPageNum(pageNum + 1);
  };
  const handleBack = () => {
    setPageNum(pageNum - 1);
  };
  const setHome = () => {
    setCategory("sports");
    setCountry("in");
    setPageNum(1);
  };

  useEffect(() => {
    const allNewsData = async () => {
      const res = await axios.get(
        ` https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=f37ec0266cab46e2a21742f0d0742652&pageSize=8&page=${pageNum}`
      );
      setNews(res.data.articles);
      setLoading(false);
    };
    allNewsData();
  }, [pageNum, country, category]);

  return (
    <>
      <div className="flex flex-col  items-center gap-3 dark:bg-gray-600">
        <div className="fixed top-0 w-full overflow-hidden">
          <div className="flex dark:bg-gray-800 w-full h-12 justify-between items-center">
            <div className="text-3xl flex text-white font-bold pl-4">
              News Ninjas
              <GiRunningNinja className="relative text-4xl top-1 ml-1" />
            </div>
            <ul className="hidden md:flex gap-5 text-white text-lg px-4">
              <li onClick={setHome} className="cursor-pointer">
                Home
              </li>
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
          {loading && <LinearProgress color="success" />}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 pt-16 ">
          {news.map((elem, ind) => {
            return (
              <>
                <Card
                  key={ind}
                  img={elem.urlToImage}
                  title={elem.title}
                  description={elem.description}
                  url={elem.url}
                />
              </>
            );
          })}
        </div>
        <div className="flex gap-5 mb-5">
          <button
            className="text-3xl hover:text-4xl flex justify-center items-center rounded-s-lg w-[60px] h-[40px] text-white dark:bg-gray-800"
            disabled={pageNum == 1 ? true : false}
            onClick={() => {
              handleBack();
            }}
          >
            <BiLeftArrowAlt />
          </button>
          <button
            className="text-3xl hover:text-4xl flex justify-center items-center rounded-e-lg w-[60px] h-[40px] text-white dark:bg-gray-800"
            disabled={pageNum == 6 ? true : false}
            onClick={() => {
              handleNext();
            }}
          >
            <BiRightArrowAlt />
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default NewsApp;
