import axios from "axios";

/** Basic example for test */
export const getApiData = async () => {
  return axios
    .get("/api/data", {
      baseURL: "",
    })
    .then((res) => res.data);
};

/** Expected response for test */
export const ResponseOfGetApiData = { data: "hello axios" };
