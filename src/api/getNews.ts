import axios from "axios";
import { NewsAPIParams } from "../types/newsApiType";

// const API1 = "36c1795ab9b14a19bd43f39dc7bc1e9a"; //  first api key
const API2 = "f37ec0266cab46e2a21742f0d0742652"; //  second api key
// const API3 = "8281da7c2fe04aafab8f610495c65739"; //  third api key

export const getAllNews = async function (params: NewsAPIParams) {
  const { country = "in", category = "entertainment", pageNum } = params;

  const URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API2}&pageSize=8&page=${pageNum}`;
  return await axios.get(URL, {}).then(function (response) {
    return response?.data;
  });
};
