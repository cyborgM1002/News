import { Navbar } from "../../components/common/Navbar";
import NewsApp from "../news/NewsApp";
import Footer from "../../components/common/Footer";
import { getAllNews } from "../../api/getNews";
import { setLoading } from "../../redux/slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NewsAPIParams } from "../../types/newsApiType";
import { NewsCardType } from "../../types/newsCard";

const Home = () => {
  const [news, setNews] = useState<NewsCardType[]>([]);
  const [pageNum, setPageNum] = useState(1);
  const country: string = useSelector(({ country }) => country);
  const category: string = useSelector(({ category }) => category);
  const dispatch = useDispatch();

  useEffect(() => {
    const params = { pageNum, country, category };
    allNewsData(params);
  }, [pageNum, country, category]);

  function allNewsData(params: NewsAPIParams) {
    dispatch(setLoading(true));
    try {
      getAllNews(params)
        .then(function (res) {
          const { articles, status } = res;
          if (status === "ok") {
            setNews(articles);
            dispatch(setLoading(false));
          } else {
            console.log("error");
            setNews([]);
            dispatch(setLoading(false));
          }
        })
        .catch(function (error) {
          dispatch(setLoading(false));
          console.error(error.message);
        });
    } catch (error) {
      dispatch(setLoading(false));
      console.error(error);
    }
  }

  return (
    <div className="w-full">
      <div className="fixed top-0 w-full">
        <Navbar allNewsData={allNewsData} />
      </div>
      <div className="w-full min-h-screen">
        <NewsApp news={news} setPageNum={setPageNum} pageNum={pageNum} />
      </div>
      <div className="bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
