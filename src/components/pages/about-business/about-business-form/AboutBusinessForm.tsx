import { Button } from "@components/common/atoms/button";
import { Input } from "@components/common/atoms/input";
import { setBusinessInformation } from "@redux/slices/business-slice";
import { useAppDispatch, useAppSelector } from "@redux/store";
import { useRouter } from "next/router";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { VALID_DOMAIN_REGEX, VALID_EMAIL_REGEX } from "src/utils/constants";
import {
    TAboutBusiness,
    TBusinessInformation,
} from "@redux/api/authApi/authApi.types";

const AboutBusinessForm = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const {
        company_domain,
        code,
        email,
        name,
        parent,
        phone_no,
        reference_code,
        short_name,
    } = useAppSelector((state) => ({
        company_domain: state.business.company_domain,
        code: state.business.code,
        email: state.business.email,
        name: state.business.name,
        parent: state.business.parent,
        phone_no: state.business.phone_no,
        reference_code: state.business.reference_code,
        short_name: state.business.short_name,
    }));

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TAboutBusiness & TBusinessInformation>({
        mode: "onChange",
        defaultValues: {
            company_domain,
            code,
            email,
            name,
            parent,
            phone_no,
            reference_code,
            short_name,
        },
    });

    const onClickContinue: SubmitHandler<
        TAboutBusiness & TBusinessInformation
    > = (values) => {
        dispatch(setBusinessInformation(values));
        router.push("/business/role");
    };

    return (
        <form className="flex flex-col w-full">
            <div className="grid grid-cols-2 gap-x-[30px] mb-[10px]">
                <Input
                    label={"Company name"}
                    inputProps={{
                        placeholder: "Company Name",
                        ...register("name", {
                            maxLength: 255,
                            required: true,
                        }),
                    }}
                    errorMessage={errors.name?.message ?? errors.name?.type}
                />
                <Input
                    label={"Short name"}
                    inputProps={{
                        placeholder: "CN",
                        ...register("short_name", {
                            maxLength: 255,
                            required: true,
                        }),
                    }}
                    errorMessage={
                        errors.short_name?.message ?? errors.short_name?.type
                    }
                />
            </div>
            <div className="grid grid-cols-2 gap-x-[30px] mb-[10px]">
                <Input
                    label={"Email"}
                    inputProps={{
                        placeholder: "email@company_domain.com",
                        ...register("email", {
                            maxLength: 255,
                            required: true,
                            pattern: {
                                value: VALID_EMAIL_REGEX,
                                message: "Invalid email",
                            },
                        }),
                    }}
                    errorMessage={errors.email?.message ?? errors.email?.type}
                />
                <Input
                    label={"Phone number"}
                    inputProps={{
                        ...register("phone_no", {
                            maxLength: 255,
                            required: true,
                        }),
                    }}
                    errorMessage={
                        errors.phone_no?.message ?? errors.phone_no?.type
                    }
                />
            </div>
            <div className="grid grid-cols-2 gap-x-[30px] mb-[10px]">
                <Input
                    label={"Code"}
                    inputProps={{
                        ...register("code", {
                            maxLength: 255,
                            required: true,
                        }),
                    }}
                    errorMessage={errors.code?.message ?? errors.code?.type}
                />
                <Input
                    label={"Reference code"}
                    inputProps={{
                        ...register("reference_code", {
                            maxLength: 255,
                            required: true,
                        }),
                    }}
                    errorMessage={
                        errors.reference_code?.message ??
                        errors.reference_code?.type
                    }
                />
            </div>
            <div className="grid grid-cols-2 gap-x-[30px] mb-[10px]">
                <Input
                    label={"Domain (recommended)"}
                    inputProps={{
                        placeholder: "spacex.com",
                        ...register("company_domain", {
                            pattern: {
                                value: VALID_DOMAIN_REGEX,
                                message: "Invalid domain!",
                            },
                        }),
                    }}
                    errorMessage={errors.company_domain?.message}
                />
                <Input
                    label={"Parent"}
                    inputProps={{
                        ...register("parent"),
                    }}
                    errorMessage={errors.parent?.message}
                />
            </div>
            <Button fullWidth onClick={handleSubmit(onClickContinue)}>
                Continue
            </Button>
        </form>
    );
};

export default AboutBusinessForm;
