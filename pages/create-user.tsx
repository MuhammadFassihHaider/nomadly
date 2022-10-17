import { Button } from "@components/common/atoms/button";
import { Divider } from "@components/common/atoms/divider";
import { Input } from "@components/common/atoms/input";
import { GoogleButton } from "@components/common/molecules/google-button";
import { AuthTemplate } from "@components/common/templates/auth-template";
import {
    useCreateUserMutation,
    useLoginMutation,
} from "@redux/api/authApi/authApi";
import { TCreateUserArguments } from "@redux/api/authApi/authApi.types";
import { useAppSelector } from "@redux/store";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { VALID_EMAIL_REGEX } from "src/utils/constants";

const CreateUser = () => {
    const router = useRouter();

    const [createUser] = useCreateUserMutation();
    const [loginUser] = useLoginMutation();

    const { full_name, password, role, email, phone_no } = useAppSelector(
        ({ signup }) => {
            const { full_name, password, role, email, phone_no } = signup;
            return {
                full_name,
                password,
                role,
                email,
                phone_no,
            };
        },
    );
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TCreateUserArguments>({
        defaultValues: {
            full_name,
            password,
            role,
            email,
            phone_no,
        },
    });

    const onClickSignUp: SubmitHandler<TCreateUserArguments> = async (
        values,
    ) => {
        const createUserResponse = await createUser(values).unwrap();
        if (createUserResponse.status === "success") {
            const loginResponse = await loginUser({
                password: values.password,
                username: values.email,
            }).unwrap();

            loginResponse.status === "success" &&
                router.push("/business/pricing");
        }
    };

    return (
        <AuthTemplate
            heading={"Start for Free Today"}
            subHeading="Access to all features. No credit card required."
        >
            <div className="mb-[41px]">
                <GoogleButton brandType="google" className="mb-[44px]" />
                <Divider text="Or" containerClassName="mb-[44px]" />
                <div className="grid grid-cols-2 gap-[30px] mb-[12px]">
                    <Input
                        label={"Full Name"}
                        inputProps={{
                            ...register("full_name", {
                                required: true,
                                maxLength: 255,
                            }),
                        }}
                        errorMessage={errors.full_name?.type}
                    />
                    <Input
                        label={"Email"}
                        inputProps={{
                            ...register("email", {
                                required: true,
                                maxLength: 255,
                                pattern: {
                                    value: VALID_EMAIL_REGEX,
                                    message: "Invalid email address",
                                },
                            }),
                        }}
                        errorMessage={
                            !!errors.email?.message
                                ? errors.email?.message
                                : errors.email?.type
                        }
                    />
                </div>
                <div className="grid grid-cols-2 gap-[30px] mb-[12px]">
                    <Input
                        label={"Password"}
                        inputProps={{
                            type: "password",
                            ...register("password", {
                                required: true,
                                maxLength: 255,
                                minLength: {
                                    value: 6,
                                    message: "Password too short",
                                },
                            }),
                        }}
                        errorMessage={
                            !!errors.password?.message
                                ? errors.password?.message
                                : errors.password?.type
                        }
                    />
                    <Input
                        label={"Role"}
                        inputProps={{
                            ...register("role", {
                                required: true,
                                maxLength: 255,
                            }),
                        }}
                        errorMessage={errors.role?.type}
                    />
                </div>
                <Input
                    label={"Phone Number"}
                    inputProps={{
                        ...register("phone_no", {
                            required: true,
                            maxLength: 50,
                        }),
                    }}
                    errorMessage={errors.phone_no?.type}
                />
                {/* <Input
                        label={"Reference Code"}
                        inputProps={{
                            // type: "password",
                            ...register("reference_code", {
                                required: true,
                                maxLength: 255,
                                // minLength: {
                                //     value: 8,
                                //     message: "Password too short",
                                // },
                                // validate: (value: string) => {
                                //     if (watch("password") !== value)
                                //         return "Your passwords do no match";
                                // },
                            }),
                        }}
                        errorMessage={
                            !!errors.reference_code?.message
                                ? errors.reference_code?.message
                                : errors.reference_code?.type
                        }
                    /> */}
            </div>
            <Button
                fullWidth
                containerClassName="mb-[70px]"
                onClick={handleSubmit(onClickSignUp)}
            >
                Sign Up
            </Button>
        </AuthTemplate>
    );
};

export default CreateUser;
