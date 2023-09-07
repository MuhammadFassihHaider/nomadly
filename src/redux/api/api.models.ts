import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "";
const X_API_KEY = ""
export const apiModels = createApi({
    reducerPath: "api_models",
    endpoints: () => ({}),
    tagTypes: ["Playground"],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers) => {
            headers.set("x-api-key", `${X_API_KEY}`);
            return headers;
        },
    }),
});
