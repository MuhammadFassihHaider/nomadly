import { AuthGoBackNNext } from "@components/common/organisms/auth-go-back-n-next";
import { AuthOptions } from "@components/common/organisms/auth-options";
import { AuthContentCenterTemplate } from "@components/common/templates/auth-content-center-template";
import { SkipRole } from "@components/pages/role/skip-role";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { RolesOptions } from "src/data/roles";

const NAME = "Some Name";

export type TRoleProps = InferGetStaticPropsType<typeof getStaticProps>;

type TReturnGetStaticProps = {
    roles: typeof RolesOptions;
};

const Role = () => {
    return (
        <AuthContentCenterTemplate
            step={3}
            heading={`Welcome ${NAME}`}
            subheading="Help us customize your experience by telling us a bit about yourself and your goals."
        >
            <AuthOptions
                options={RolesOptions}
                label="What best describes your role?"
                containerClassName="mb-[41px]"
            />
            <AuthGoBackNNext buttonLabel="Next" />
            <SkipRole />
        </AuthContentCenterTemplate>
    );
};

export const getStaticProps: GetStaticProps<TReturnGetStaticProps> = () => {
    return {
        props: {
            roles: RolesOptions,
        },
    };
};

export default Role;
