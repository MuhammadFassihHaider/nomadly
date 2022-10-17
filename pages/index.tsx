import { Button } from "@components/common/atoms/button";
import { Divider } from "@components/common/atoms/divider";
import { Input } from "@components/common/atoms/input";
import { LinkWrapper } from "@components/common/atoms/link-wrapper";
import { GoogleButton } from "@components/common/molecules/google-button";
import { AuthTemplate } from "@components/common/templates/auth-template";

const Home = () => {
    return (
        <AuthTemplate
            heading="Welcome Back!"
            subHeading="If you have an account, please log in with your email address."
        >
            <div className="mb-[68px]">
                <GoogleButton brandType="google" className="mb-[44px]" />
                <Divider text="Or" containerClassName="mb-[44px]" />
                <Input
                    label={"Username / Email"}
                    inputProps={{ className: "mb-[34px]" }}
                />
                <Input label={"Password"} inputProps={{ className: "mb-1" }} />
                <LinkWrapper
                    href={"/reset-password"}
                    containerClassName="text-sm leading-[22px] text-primary hover:underline cursor-pointer mb-[36px]"
                >
                    <a className="">Did you forget your password?</a>
                </LinkWrapper>
                <Button fullWidth variant="primary" size="xl">
                    Login
                </Button>
            </div>
        </AuthTemplate>
    );
};

export default Home;
