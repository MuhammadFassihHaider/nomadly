import { AuthGoBackNNext } from "@components/common/organisms/auth-go-back-n-next";
import { AuthOptions } from "@components/common/organisms/auth-options";
import { AuthContentCenterTemplate } from "@components/common/templates/auth-content-center-template";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { PurposeForSignup } from "src/data/pages/customize-experience";

export type TRoleProps = InferGetStaticPropsType<typeof getStaticProps>;

type TReturnGetStaticProps = {
    purposeForSignup: typeof PurposeForSignup;
};

const CustomizeExperience = ({ purposeForSignup }: TRoleProps) => {
    return (
        <AuthContentCenterTemplate
            step={4}
            heading="Let's get started!"
            subheading="Help us customize your experience by telling us a bit about yourself and your goals."
        >
            <AuthOptions
                options={purposeForSignup}
                label="What best describes your role?"
                containerClassName="mb-[41px]"
            />
            <AuthGoBackNNext buttonLabel="Get Started" />
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
