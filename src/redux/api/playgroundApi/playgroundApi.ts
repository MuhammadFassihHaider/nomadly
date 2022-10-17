import { apiModels } from "@redux/api/api.models";
import {
    TComposeFromPlaygroundOptional,
    TComposeFromPlaygroundRequired,
    TComposeFromPlaygroundResponse,
} from "@redux/api/playgroundApi/playgroundApi.types";
import toast from "react-hot-toast";
import { removeEmptyKeyValuePairs } from "src/utils/helper";

const playgroundApi = apiModels.injectEndpoints({
    endpoints: (builder) => ({
        composeFromPlayground: builder.mutation<
            string,
            Partial<TComposeFromPlaygroundOptional> &
                TComposeFromPlaygroundRequired
        >({
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
                    toast.error("An error occured");
                }
            },
            transformResponse: (response: TComposeFromPlaygroundResponse) => {
                return response.choices[0].text;
            },
        }),
    }),
    overrideExisting: true,
});

export const { useComposeFromPlaygroundMutation } = playgroundApi;
