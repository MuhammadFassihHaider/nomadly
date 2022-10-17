import { apiGeneral } from "@redux/api/api.general";
import {
    setCreateUserFields,
    setPasswordEmpty,
} from "@redux/slices/signup-slice";
import { setSpinner } from "@redux/slices/ui-slice";
import Router from "next/router";
import toast from "react-hot-toast";
import { AUTH_TOKEN } from "src/utils/constants";
import { removeCookie, setCookie } from "src/utils/helper";
import {
    TBusinessInformationArguments,
    TBusinessInformationData,
    TCreateUserArguments,
    TCreateUserResponse,
    TLoginArguments,
    TLoginFailedResponse,
    TLoginResponse,
} from "./authApi.types";

const authApi = apiGeneral.injectEndpoints({
    endpoints: (builder) => ({
        createUser: builder.mutation<TCreateUserResponse, TCreateUserArguments>(
            {
                query: (body) => {
                    return {
                        body,
                        url: "users/create/",
                        method: "POST",
                    };
                },
                onQueryStarted: async (args, api) => {
                    api.dispatch(setSpinner(true));
                    try {
                        await api.queryFulfilled;
                        api.dispatch(setCreateUserFields(args));
                    } catch (e) {
                        toast.error("An error occured");
                    } finally {
                        api.dispatch(setSpinner(false));
                    }
                },
            },
        ),
        login: builder.mutation<TLoginResponse, TLoginArguments>({
            query: (body) => {
                return {
                    body,
                    url: "users/login",
                    method: "POST",
                };
            },
            onQueryStarted: async (_, api) => {
                api.dispatch(setSpinner(true));
                try {
                    const response = await api.queryFulfilled;
                    const auth_token = response.data.token!;

                    localStorage.setItem(AUTH_TOKEN, auth_token);
                    setCookie(AUTH_TOKEN, auth_token);
                    api.dispatch(setPasswordEmpty());

                    toast.success("Logged in successfully!");
                } catch (error: any) {
                    toast.error("An error occured");
                } finally {
                    api.dispatch(setSpinner(false));
                }
            },
        }),
        logout: builder.mutation<TSuccessResponse | TFailedResponse, void>({
            query: () => {
                return {
                    url: "/users/logout/",
                    method: "POST",
                };
            },
            onQueryStarted: async (_, api) => {
                api.dispatch(setSpinner(true));
                try {
                    const response = await api.queryFulfilled;
                    if (response.data.status === "success") {
                        localStorage.removeItem(AUTH_TOKEN);
                        removeCookie(AUTH_TOKEN);
                        Router.push("/");
                        toast.success("Logged out successfully!");
                    }
                } catch (error) {
                    toast.error("An error occured");
                } finally {
                    api.dispatch(setSpinner(false));
                }
            },
        }),
        createCompany: builder.mutation<
            TBusinessInformationData,
            TBusinessInformationArguments
        >({
            query: (body) => {
                const { plan, type, billing, ...rest } = body;
                return {
                    // TODO: Change to dynamic values
                    body: {
                        ...rest,
                        plan: 4,
                        billing: 4,
                        type: +type,
                    },
                    url: "company/profile/",
                    method: "POST",
                };
            },
            onQueryStarted: async (_, api) => {
                api.dispatch(setSpinner(true));
                try {
                    const response = await api.queryFulfilled;

                    if (!!response) {
                        Router.push("/business/finish");
                    }
                } catch (error) {
                    toast.error("An error occured");
                } finally {
                    api.dispatch(setSpinner(false));
                }
            },
        }),
    }),
    overrideExisting: true,
});

export const {
    useLoginMutation,
    useLogoutMutation,
    useCreateUserMutation,
    useCreateCompanyMutation,
} = authApi;
