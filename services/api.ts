import axios from "axios";

const instance = axios.create({
  baseURL: "https://662029f13bf790e070af2cd8.mockapi.io/api/v1",
  // baseURL: "https://662029f13bf790e070af2cd8.mockapi.io/api/v1/posts",
});

export async function apiFetch(
  method: "GET" | "POST" | "DELETE ",
  url: string,
  axiosConfig = {}
) {
  const { data } = await instance({
    ...axiosConfig,
    method,
    url,
  });

  return data;
}
