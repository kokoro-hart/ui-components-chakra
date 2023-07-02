import Axios, { AxiosError } from "axios";

/**
 * default configの設定
 */
export const axios = Axios.create({
  method: "get",
});

/**
 * response interceptors
 */
axios.interceptors.response.use(
  (response) => response.data,
  (error: AxiosError) => {
    console.log("--axios response interceptors--");
    console.error(error.toJSON());
    return Promise.reject(error);
  },
);
