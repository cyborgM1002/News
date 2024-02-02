import { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
// import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import NewsCard from "./NewsCard";
import { NewsCardType } from "../types/newsCard";
import { APIParams } from "../types/newsApiType";
import { getAllNews } from "../api/getNews";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/slice";

function NewsApp() {
  const [news, setNews] = useState([]);
  const dispach = useDispatch();

  const pageNum: number = useSelector(({ pageNum }) => pageNum);
  const country: string = useSelector(({ country }) => country);
  const category: string = useSelector(({ category }) => category);
  const loading: boolean = useSelector(({ loading }) => loading);

  useEffect(() => {
    const params = { pageNum, country, category };
    allNewsData(params);
  }, [country, category]);

  function allNewsData(params: APIParams) {
    dispach(setLoading(true));
    try {
      getAllNews(params)
        .then(function (res) {
          const { articles, status } = res;
          if (status === "ok") {
            setNews(articles);
            dispach(setLoading(false));
          } else {
            console.log("error");
            setNews([]);
            dispach(setLoading(false));
          }
        })
        .catch(function (error) {
          dispach(setLoading(false));
          console.error(error.message);
        });
    } catch (error) {
      dispach(setLoading(false));
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col w-full items-center gap-3 dark:bg-gray-600">
      {loading && <LinearProgress color="success" />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-10 py-20">
        {news.map(
          (
            { title, content, urlToImage, source, publishedAt }: NewsCardType,
            ind: number
          ) => {
            return (
              <div key={ind}>
                <NewsCard
                  title={title}
                  urlToImage={urlToImage}
                  content={content}
                  source={source}
                  publishedAt={publishedAt}
                />
              </div>
            );
          }
        )}
      </div>
      {/* <div className="flex gap-5 mb-5">
        <button
          className="text-3xl hover:text-4xl flex justify-center items-center rounded-s-lg w-[60px] h-[40px] text-white dark:bg-gray-800"
          // disabled={pageNum == 1 ? true : false}
          onClick={() => dispach(setPageNum(pageNum - 1))}
        >
          <BiLeftArrowAlt />
        </button>
        <button
          className="text-3xl hover:text-4xl flex justify-center items-center rounded-e-lg w-[60px] h-[40px] text-white dark:bg-gray-800"
          // disabled={pageNum == 6 ? true : false}
          onClick={() => dispach(setPageNum(pageNum + 1))}
        >
          <BiRightArrowAlt />
        </button>
      </div> */}
    </div>
  );
}

export default NewsApp;
