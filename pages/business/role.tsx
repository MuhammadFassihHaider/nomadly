import { AuthGoBackNNext } from "@components/common/organisms/auth-go-back-n-next";
import { AuthOptions } from "@components/common/organisms/auth-options";
import { AuthContentCenterTemplate } from "@components/common/templates/auth-content-center-template";
import { BASE_URL } from "@redux/api/api.general";
import { setType } from "@redux/slices/business-slice";
import { TPlansAndCompanies } from "@redux/slices/ui-slice";
import { useAppDispatch, useAppSelector } from "@redux/store";
import { useRouter } from "next/router";
import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";
import { RolesOptions } from "src/data/pages/roles";
import { AUTH_TOKEN, COMPANY_TYPE } from "src/utils/constants";
import { getCookie } from "src/utils/helper";

export type TRoleProps = InferGetServerSidePropsType<typeof getServerSideProps>;

type TReturnGetStaticProps = {
    companies: TMenuItem[];
};

const Role = (props: TRoleProps) => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const { full_name, role } = useAppSelector(({ signup, business }) => ({
        full_name: signup.full_name,
        role: business.type,
    }));

    const onChangeRole = (value: string) => {
        dispatch(setType(value));
    };

    const onClickNext = () => {
        router.push("/business/customize-experience/");
    };

    return (
        <AuthContentCenterTemplate
            step={3}
            heading={`Welcome ${full_name}`}
            subheading="Help us customize your experience by telling us a bit about yourself and your goals."
        >
            <AuthOptions
                options={props.companies}
                label="What best describes your role?"
                containerClassName="mb-[41px]"
                onChange={onChangeRole}
                selected={role ?? ""}
            />
            <AuthGoBackNNext buttonLabel="Next" onClick={onClickNext} />
            {/* <SkipRole /> */}
        </AuthContentCenterTemplate>
    );
};

export const getServerSideProps: GetServerSideProps<
    TReturnGetStaticProps
> = async (context) => {
    // TODO: only get data for companies
    // TODO: get the endpoint to not be protected
    const token = getCookie(context?.req?.headers?.cookie ?? "", AUTH_TOKEN);

    if (!token) {
        return {
            // if token does not exist, redirect to login page
            redirect: { destination: "/" },
            props: {
                companies: [],
            },
        };
    }

    const response = await fetch(`${BASE_URL}/system/types/`, {
        headers: {
            authorization: `Token ${token}`,
        },
    });
    let data: TPlansAndCompanies[] | { detail: string } = [];

    let companies: TMenuItem[] = [];
    data = await response.json();
    if (Array.isArray(data)) {
        const cleanedData = data.map((d) => ({
            label: d.name,
            value: d.id.toString(),
        }));
        cleanedData.forEach((d) => {
            if (d.label.includes(COMPANY_TYPE)) {
                companies.push(d);
            }
        });
    }

    return {
        // if token does not exist, redirect to login page
        props: {
            companies,
            roles: RolesOptions,
        },
    };
};

export default Role;
