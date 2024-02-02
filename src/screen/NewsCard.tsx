import { NewsCardType } from "../types/newsCard";
import { FormatDate, FormatString } from "../utils/TextFormatter";
// source, publishedAt
const NewsCard = ({
  title,
  urlToImage,
  content,
  publishedAt,
  source,
}: NewsCardType) => {
  return (
    <div className="w-sm h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex w-full h-1/2 rounded-lg bg-gray-700 justify-center items-center border border-gray-600">
        <img
          className="object-fill w-full h-full rounded-lg"
          src={urlToImage}
          alt="Failed to load image"
        />
      </div>

      <div className="p-3 w-full h-1/2 flex flex-col justify-center items-center gap-3">
        <div className="w-full h-4/5">
          <p className="mb-2 text-lg tracking-tight text-gray-900 dark:text-gray-100">
            {FormatString(title, 50)}
          </p>
          <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
            {FormatString(content, 110)}
          </p>
        </div>
        <div className="w-full h1/5">
          <div className="text-gray-700 dark:text-gray-400">
            <span className="font-light text-xs">Source:</span>{" "}
            <span className="text-xs font-extralight">
              {FormatString(source?.name, 30)}
            </span>
          </div>
          <div className="text-gray-700 dark:text-gray-400">
            <span className="font-light text-xs">Published:</span>{" "}
            <span className="font-extralight text-xs">
              {FormatDate(publishedAt)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
