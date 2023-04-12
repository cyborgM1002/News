const Url = (pageNum) => {
  return;
  ` https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=36c1795ab9b14a19bd43f39dc7bc1e9a&pages=10&${pageNum}`;
};
export default Url;
