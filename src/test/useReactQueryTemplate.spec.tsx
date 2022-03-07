import { renderHook } from "@testing-library/react-hooks";
// import nock from "nock";
import axios from "axios";
jest.mock("axios");

import {
  createReactQueryTestWrapper,
  setNoErrorLog,
} from "./lib/createReactQueryTestWrapper";
import { ResponseOfGetApiData } from "../api/apiData";

import {
  useReactQueryTemplate,
  useFetchDataAxios,
} from "../hooks/useReactQueryTemplate";

// const expectation = nock("http://example.com").get("/api/data").reply(200, {
//   answer: 42,
// });

setNoErrorLog();

describe("useReactQueryTemplate", () => {
  it("should local test ok", async () => {
    const { result, waitFor } = renderHook(() => useReactQueryTemplate(), {
      wrapper: createReactQueryTestWrapper(),
    });
    await waitFor(() => result.current.isSuccess);
    expect(result.current.data).toEqual("Hello");
  });
  it("should mock axios ok", async () => {
    /** Mock axios used api */
    (axios.get as jest.Mock).mockResolvedValue(ResponseOfGetApiData);
    (axios.post as jest.Mock).mockResolvedValue(ResponseOfGetApiData);
    // or mockImplementation

    const { result, waitFor } = renderHook(() => useFetchDataAxios(), {
      wrapper: createReactQueryTestWrapper(),
    });
    await waitFor(() => result.current.isSuccess);
    expect(result.current.data).toEqual("hello axios");
  });
});
