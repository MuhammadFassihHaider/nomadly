import {
    TCreateUserArguments,
    TSignupArguments,
} from "@redux/api/authApi/authApi.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TSignupArguments = {
    email: "",
    full_name: "",
    password: "",
    phone_no: "",
    role: "",
};

const signupSlice = createSlice({
    name: "signup",
    initialState,
    reducers: {
        setCreateUserFields(
            state,
            action: PayloadAction<TCreateUserArguments>,
        ) {
            const { email, full_name, phone_no, role } = action.payload;

            state.email = email;
            state.full_name = full_name;
            state.phone_no = phone_no;
            state.role = role;
        },
        setPasswordEmpty(state) {
            state.password = "";
        },
    },
});

export const { setCreateUserFields, setPasswordEmpty } = signupSlice.actions;

export default signupSlice.reducer;
