import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const rtdbBaseUrl = process.env.EXPO_PUBLIC_RTDB_URL

export const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({baseUrl: rtdbBaseUrl}),
  endpoints: (builder) => ({
    categories: builder.query({ query: () => 'categories.json'}),
    products: builder.query({ query: () => 'products.json'}),
    productsByCategory: builder.query({
      query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
      transformResponse: (response) => Object.values(response)
    }),
    postPurchase: builder.mutation({
      query: (data) => ({
          url: `purchase/purchase-cost-${data.total}.json`,
          method: 'POST',
          body: {
              data
          }
      })
  })
  })
});

export const {
  useCategoriesQuery,
  useProductsQuery,
  useProductsByCategoryQuery,
  usePostPurchaseMutation } = shopApi;