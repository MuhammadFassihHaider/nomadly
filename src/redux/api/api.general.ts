import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AUTH_TOKEN } from "src/utils/constants";

export const BASE_URL = "https://normandly-backend.herokuapp.com/api/v1";
// const BASE_URL = "http://localhost:8000";

export const apiGeneral = createApi({
    reducerPath: "api_general",
    endpoints: () => ({}),
    tagTypes: ["Signup"],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers) => {
            const auth_token = localStorage.getItem(AUTH_TOKEN);

            !!auth_token && headers.set("Authorization", `Token ${auth_token}`);
            headers.set("Medium", "Web");
            headers.set("Portal", "Actuarial");
            return headers;
        },
    }),
});
