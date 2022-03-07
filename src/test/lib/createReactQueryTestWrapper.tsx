import React from "react";
import { QueryClient, QueryClientProvider, setLogger } from "react-query";

/** Test wrapper for react query */
export const createReactQueryTestWrapper = () => {
  const queryClient = new QueryClient({
    /** Disable cache for jest  // ✅ turns retries off */
    defaultOptions: { queries: { cacheTime: Infinity, retry: false } },
  });
  const wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  return wrapper;
};

/** Ignore error for react query in testing */
export const setNoErrorLog = () => {
  setLogger({
    log: console.log,
    warn: console.warn,
    // ✅ no more errors on the console
    error: () => {
      0;
    },
  });
};
