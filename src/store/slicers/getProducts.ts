import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
interface ISizes {
  size: string,
  available: true | false
}
export interface IProduct {
  id: number,
  category: number,
  title: string,
  images: string[],
  sku: number,
  manufacturer: string,
  color: string,
  material: string,
  reason: string,
  season: string,
  heelSize: string,
  price: number,
  oldPrice: number,
  sizes: ISizes[],
}
type TProductsResponse = IProduct[]
export const getProductsSlice = createApi({
  reducerPath:'getProducts',
  baseQuery: fetchBaseQuery({baseUrl:'http://localhost:7070'}),
  endpoints: (builder) => ({
    getTopSales: builder.query<TProductsResponse, void>({
      query: () => '/api/top-sales',
    }),
    getCatalog: builder.query<TProductsResponse, void>({
      query: () => '/api/items/',
    }),
    getCategories: builder.query<TProductsResponse, void>({
      query: () => '/api/categories',
    }),
    getCatalogByCategory: builder.query<TProductsResponse, number>({
      query: (idCategory:number) => `/api/items?categoryId=${idCategory}`,
    }),
    getAnotherByCategory: builder.query({

      query: ({idCategory, offset}:{idCategory:number, offset:number}) => `/api/items?categoryId=${idCategory}&offset=${offset}`,
    }),
    getAnotherCatalog: builder.query({
      query: (offset) => `/api/items?offset=${offset}`,
    }),
    getCatalogByText: builder.query({
      query: (text) => `/api/items?q=${text}`,
    }),
  }),
});

export const {
  useGetTopSalesQuery,
  useGetCatalogQuery,
  useGetCategoriesQuery,
  useGetCatalogByCategoryQuery,
  useGetAnotherByCategoryQuery,
  useGetAnotherCatalogQuery,
  useLazyGetCatalogByTextQuery } = getProductsSlice;