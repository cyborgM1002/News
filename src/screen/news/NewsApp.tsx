import LinearProgress from "@mui/material/LinearProgress";
import NewsCard from "./NewsCard";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { NewsCardType } from "../../types/newsCard";
import { useSelector } from "react-redux";

function NewsApp(props: any) {
  const { news, pageNum, setPageNum } = props;
  const loading: boolean = useSelector(({ loading }) => loading);
  console.log(loading);

  if (news?.length <= 0) {
    return (
      <div className="w-full h-screen pt-10 bg-gray-700 flex flex-col gap-5 items-center justify-center">
        <p className="text-gray-200 text-5xl">Oh Snap!!</p>
        <p className="text-gray-400 text-xl">This is the end of list!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full items-center gap-3 dark:bg-gray-600">
      {loading && <LinearProgress color="success" />}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-10 py-20">
        {news?.map(
          (
            {
              title,
              content,
              urlToImage,
              url,
              source,
              publishedAt,
            }: NewsCardType,
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
                  url={url}
                />
              </div>
            );
          }
        )}
      </div>
      {news?.length > 0 && (
        <div className="flex gap-5 mb-5">
          <button
            className="text-3xl hover:text-4xl flex justify-center items-center rounded-s-lg w-[60px] h-[40px] text-white dark:bg-gray-800"
            disabled={loading}
            onClick={() => setPageNum(pageNum - 1)}
          >
            <BiLeftArrowAlt />
          </button>
          <button
            disabled={loading}
            className="text-3xl hover:text-4xl flex justify-center items-center rounded-e-lg w-[60px] h-[40px] text-white dark:bg-gray-800"
            onClick={() => setPageNum(pageNum + 1)}
          >
            <BiRightArrowAlt />
          </button>
        </div>
      )}
    </div>
  );
}

export default NewsApp;
