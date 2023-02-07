import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com/posts";
export async function fetchPosts() {
  const response = await axios.get("/");
  return response;
}

export async function fetchMorePosts({ skip, limit }) {
  const response = await axios.get(`/?skip=${skip}&limit=${limit}`);
  return response;
}
