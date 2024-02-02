import axios from "axios";
import { APIParams } from "../types/newsApiType";

// 36c1795ab9b14a19bd43f39dc7bc1e9a    first api key
// f37ec0266cab46e2a21742f0d0742652   second api key

export const getAllNews = async function (params: APIParams) {
  const { country, category, pageNum } = params;
  const URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=36c1795ab9b14a19bd43f39dc7bc1e9a&pageSize=8&page=${pageNum}`;
  return await axios.get(URL, {}).then(function (response) {
    return response?.data;
  });
};
