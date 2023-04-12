import React from "react";

const Card = ({ url, img, title, description }) => {
  return (
    <>
      <div className="max-w-sm h-[400px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-70">
        <a href={url} target="_blank">
          <img
            src={img}
            alt="Image"
            className="rounded-t-lg w-full h-[150px] object-cover"
          />
        </a>

        <div className="p-5 h-[200px] ">
          <h1 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white">
            {title.slice(0, 50)}...
          </h1>

          <p className="mb-3 break-words overflow-hidden font-normal text-sm text-gray-700 dark:text-gray-400 ">
            {description ? description.slice(0, 150) : " "}...
          </p>
        </div>
        <div className="h-[50px] flex items-center justify-center pb-4">
          <button className=" w-[100px] h-[30px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <a href={url} target="_blank">
              Read More
            </a>
          </button>
        </div>
      </div>
    </>
  );
};
export default Card;
