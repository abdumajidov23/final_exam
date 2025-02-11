import { mainApi } from "./index";

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<any, any>({
      query: (params) => ({
        url: "product",
        method: "GET",
        params,
      }),
    }),
    getProductById: build.query<any, number>({
      query: (id) => ({
        url: `products/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = extendedApi;
