import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const instance = axios.create({
  baseUrl: "https://api.themoviedb.org/3",
  params: {
    api_key: "c23d7755b502540a74ef819e02a6a593",
  },
});

export const getTrending = async () => {
  const response = await instance.get("/trending/movie/week");
  return response.data;
};
