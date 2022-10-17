import { Button } from "@components/common/atoms/button";
import { Divider } from "@components/common/atoms/divider";
import { Input } from "@components/common/atoms/input";
import { LinkWrapper } from "@components/common/atoms/link-wrapper";
import { GoogleButton } from "@components/common/molecules/google-button";
import { AuthTemplate } from "@components/common/templates/auth-template";
import { useLoginMutation } from "@redux/api/authApi/authApi";
import { TLoginArguments } from "@redux/api/authApi/authApi.types";
import { useRouter } from "next/router";
import { useLayoutEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AUTH_TOKEN, VALID_EMAIL_REGEX } from "src/utils/constants";
import { onPressEnter } from "src/utils/helper";

const Home = () => {
    const router = useRouter();
    const { register, handleSubmit } = useForm<TLoginArguments>();
    const [login] = useLoginMutation();

    useLayoutEffect(() => {
        const token = localStorage.getItem(AUTH_TOKEN);
        !!token && router.push("/dashboard");
    }, []);

    const onClickLogin: SubmitHandler<TLoginArguments> = async (values) => {
        const response = await login(values).unwrap();
        response.status === "success" && router.push("/dashboard");
    };

    return (
        <AuthTemplate
            heading="Welcome Back!"
            subHeading="If you have an account, please log in with your email address."
        >
            <div className="mb-[68px]">
                <GoogleButton brandType="google" className="mb-[44px]" />
                <Divider text="Or" containerClassName="mb-[44px]" />
                <Input
                    label={"Email"}
                    className="mb-[14px]"
                    inputProps={{
                        ...register("username", {
                            pattern: {
                                value: VALID_EMAIL_REGEX,
                                message: "Invalid email",
                            },
                        }),
                        onKeyDown: (e) => onPressEnter(e, onClickLogin),
                    }}
                />
                <Input
                    label={"Password"}
                    className="mb-1"
                    inputProps={{
                        ...register("password"),
                        onKeyDown: (e) => onPressEnter(e, onClickLogin),
                        type: "password",
                    }}
                />
                <LinkWrapper
                    href={"/reset-password"}
                    containerClassName="text-sm leading-[22px] text-primary hover:underline cursor-pointer mb-[36px]"
                >
                    <a className="">Did you forget your password?</a>
                </LinkWrapper>
                <Button
                    fullWidth
                    variant="primary"
                    size="xl"
                    onClick={handleSubmit(onClickLogin)}
                >
                    Login
                </Button>
            </div>
        </AuthTemplate>
    );
};

export default Home;
