import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "aeed889623mshe6abc03eb0eb2bcp14edbejsn876d09e4a33f",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const URL = "https://coinranking1.p.rapidapi.com/";

const createRequest = (url: string) => ({
  url,
  headers: cryptoApiHeaders,
});

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({
    getCrypto: builder.query<any, void>({
      query: () => createRequest("/coins"),
    }),
  }),
});

export const { useGetCryptoQuery } = cryptoApi;
