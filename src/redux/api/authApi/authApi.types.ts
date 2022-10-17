// >>>>>>>>>>>>>>>>>>>>>>>>> Create Company >>>>>>>>>>>>>>>>>>>>>>>>>

export type TEBusinessPlan = "0" | "1" | "2";

export type TBusinessPlan = {
    plan: TEBusinessPlan;
};

export type TEBilling = "MONTHLY" | "YEARLY";

export type TBusinessBilling = {
    billing: TEBilling;
};

export type TAboutBusiness = {
    company_domain: string;
};

export type TBusinessRole = {
    type: string;
};

export type TBusinessPurpose = {
    purpose: string;
};

export type TBusinessInformation = {
    name: string;
    short_name: string;
    code: string;
    reference_code: string;
    email: string;
    phone_no: string;
    parent: string;
};

export type TBusinessInformationArguments = TBusinessPlan &
    TBusinessBilling &
    TAboutBusiness &
    TBusinessRole &
    TBusinessPurpose &
    TBusinessInformation;

export type TBusinessInformationData = {
    id: number;
    name: string;
    short_name: string;
    code: string;
    reference_code: string;
    email: string;
    phone_no: string;
    created_on: string;
    modified_on: string;
    is_active: boolean;
    company_domain: string;
    purpose: string;
    parent: string;
    type: number;
    created_by: string;
    modified_by: string;
    plan: number;
    billing: string;
};

// export type TCreateBusinessSuccessResponse = TSuccessResponse<
//     "user",
//     TLoginData
// >;
// export type TCreateBusinessFailedResponse = TFailedResponse;
// export type TCreateBusinessResponse =
//     | TLoginSuccessResponse
//     | TLoginFailedResponse;

// <<<<<<<<<<<<<<<<<<<<<<<<< Create Company <<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>> Login >>>>>>>>>>>>>>>>>>>>>>>>>

export type TLoginArguments = {
    username: string; // email
    password: string;
};

export type TLoginData = {
    id: number;
    last_login: any;
    is_superuser: boolean;
    first_name: string;
    last_name: string;
    is_staff: boolean;
    date_joined: string;
    full_name: any;
    phone_no: any;
    is_active: boolean;
    role: string;
};

// export type TLoginSuccessResponse = TSuccessResponse<"user", TLoginData>;
export type TLoginFailedResponse = TFailedResponse;
export type TLoginResponse = TSuccessResponse<"user", TLoginData>;

// <<<<<<<<<<<<<<<<<<<<<<<<< Login <<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>> Create User >>>>>>>>>>>>>>>>>>>>>>>>>

export type TSignupResponse = {
    username: string;
    first_name: string;
    last_name: string;
    plan: string;
    company_name: string;
    company_domain: string;
    role: string;
    purpose: string;
    email: string;
    id: number;
};

export type TCreateUserArguments = {
    full_name: string;
    email: string;
    password: string;
    role: string;
    phone_no: string;
};

export type TSignupArguments = TCreateUserArguments;

export type TCreateUserSuccessResponse = TSuccessResponse<
    "user",
    { id: number }
>;
export type TCreateUserFailedResponse = TFailedResponse;
export type TCreateUserResponse = TCreateUserSuccessResponse;
// | TCreateUserSuccessResponse
// | TCreateUserFailedResponse;

// <<<<<<<<<<<<<<<<<<<<<<<<< Create User <<<<<<<<<<<<<<<<<<<<<<<<<
