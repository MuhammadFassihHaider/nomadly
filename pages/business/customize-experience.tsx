import { AuthGoBackNNext } from "@components/common/organisms/auth-go-back-n-next";
import { AuthOptions } from "@components/common/organisms/auth-options";
import { AuthContentCenterTemplate } from "@components/common/templates/auth-content-center-template";
import { useCreateCompanyMutation } from "@redux/api/authApi/authApi";
// import { useSignupMutation } from "@redux/api/authApi/authApi";
import { setPurpose } from "@redux/slices/business-slice";
import { useAppDispatch, useAppSelector } from "@redux/store";
import { useRouter } from "next/router";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { PurposeForSignup } from "src/data/pages/customize-experience";

export type TRoleProps = InferGetStaticPropsType<typeof getStaticProps>;

type TReturnGetStaticProps = {
    purposeForSignup: typeof PurposeForSignup;
};

const CustomizeExperience = ({ purposeForSignup }: TRoleProps) => {
    const dispatch = useAppDispatch();
    const [createCompany] = useCreateCompanyMutation();

    const business = useAppSelector((state) => state.business);
    const purpose = useAppSelector((state) => state.business.purpose);

    const onChangeExperience = (value: string) => {
        dispatch(setPurpose(value));
    };

    const onClickGetStated = () => {
        createCompany(business);
    };

    return (
        <AuthContentCenterTemplate
            step={4}
            heading="Let's get started!"
            subheading="Help us customize your experience by telling us a bit about yourself and your goals."
        >
            <AuthOptions
                options={purposeForSignup}
                label="What do you need to make?"
                containerClassName="mb-[41px]"
                onChange={onChangeExperience}
                selected={purpose ?? ""}
            />
            <AuthGoBackNNext
                buttonLabel="Get Started"
                onClick={onClickGetStated}
            />
        </AuthContentCenterTemplate>
    );
};

export const getStaticProps: GetStaticProps<TReturnGetStaticProps> = () => {
    return {
        props: {
            purposeForSignup: PurposeForSignup,
        },
    };
};

export default CustomizeExperience;
