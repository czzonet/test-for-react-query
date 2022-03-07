import { useQuery } from "react-query";

import { getApiData } from "../api/apiData";

/** use local data */
export const useReactQueryTemplate = () => {
  const { isSuccess, data } = useQuery("useReactQueryTemplate", () => "Hello");
  return { isSuccess, data };
};

/** use axios data */
export const useFetchDataAxios = () => {
  const { isSuccess, data } = useQuery("fetchData", () => getApiData());
  return { isSuccess, data };
};

// export const useFetchDataRequest = () => {
//   return useQuery("fetchData", () => request("/api/data"));
// };
