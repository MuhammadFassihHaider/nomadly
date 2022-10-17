import {
    TAboutBusiness,
    TBusinessInformation,
    TBusinessInformationArguments,
    TEBilling,
    TEBusinessPlan,
} from "@redux/api/authApi/authApi.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TBusinessInformationArguments = {
    email: "",
    name: "",
    short_name: "",
    phone_no: "",
    code: "",
    reference_code: "",
    plan: "1",
    company_domain: "",
    type: "",
    purpose: "",
    parent: "",
    billing: "MONTHLY",
};

const businessSlice = createSlice({
    name: "business",
    initialState,
    reducers: {
        setBusinessInformation(
            state,
            action: PayloadAction<TBusinessInformation & TAboutBusiness>,
        ) {
            const {
                name,
                code,
                email,
                parent,
                phone_no,
                short_name,
                reference_code,
                company_domain,
            } = action.payload;

            state.name = name;
            state.code = code;
            state.email = email;
            state.parent = parent;
            state.phone_no = phone_no;
            state.short_name = short_name;
            state.reference_code = reference_code;
            state.company_domain = company_domain;
        },
        setPlan(state, action: PayloadAction<TEBusinessPlan>) {
            state.plan = action.payload;
        },
        setBilling(state, action: PayloadAction<TEBilling>) {
            state.billing = action.payload;
        },
        setType(state, action: PayloadAction<string>) {
            state.type = action.payload;
        },
        setPurpose(state, action: PayloadAction<string>) {
            state.purpose = action.payload;
        },
    },
});

export const {
    setType,
    setPlan,
    setPurpose,
    setBilling,
    setBusinessInformation,
} = businessSlice.actions;

export default businessSlice.reducer;
