import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://nomadly-ai.herokuapp.com/api/v1/";
const X_API_KEY = "823b0e41-a37e-4725-badb-1bcc043fbd63";
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
