import { api } from "@redux/api/api.main";
import {
    TComposeFromPlaygroundOptional,
    TComposeFromPlaygroundRequired,
    TComposeFromPlaygroundResponse,
} from "@redux/api/playgroundApi/playgroundApi.types";


const removeEmptyKeyValuePairs = (body: object) => {
    return Object.fromEntries(Object.entries(body).filter(([_, v]) => v != ""));
}

const playgroundApi = api.injectEndpoints({
    endpoints: (builder) => ({
        composeFromPlayground: builder.mutation<string, Partial<TComposeFromPlaygroundOptional> & TComposeFromPlaygroundRequired>({
            invalidatesTags: ["Playground"],
            query: (body) => {
                let _body = removeEmptyKeyValuePairs(body);
                return {
                    body: _body,
                    url: "long-form",
                    method: "POST",
                };
            },
            onQueryStarted: async (_, api) => {
                try {
                    await api.queryFulfilled;
                    // TODO: dispatch and the save the response
                    // api.dispatch(ar)
                } catch (e) {
                    // TODO: add error handling
                }
            },
            transformResponse: (response: TComposeFromPlaygroundResponse) => {
                return response.choices[0].text;
            },
        }),
    }),
    overrideExisting: true,
});

export const {
    useComposeFromPlaygroundMutation,
} = playgroundApi;