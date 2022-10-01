import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const searchHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "aeed889623mshe6abc03eb0eb2bcp14edbejsn876d09e4a33f",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};
const URL = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url: string) => ({
  url,
  headers: searchHeaders,
});

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({
    getNews: builder.query<any, any>({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});
export const { useGetNewsQuery } = cryptoNewsApi;
