import { Logo } from "@components/common/atoms/logo";
import { Button } from "@components/common/atoms/button";
import { AuthFooter } from "@components/common/organisms/auth-footer";
import { PagePaddingsTemplate } from "@components/common/templates/page-paddings-template";
import { FinishCheckImage } from "@components/pages/finish/finish-check-image";
import { FinishNotice } from "@components/pages/finish/finish-notice";
import { useRouter } from "next/router";
import { useAppSelector } from "@redux/store";
import { useCreateCompanyMutation } from "@redux/api/authApi/authApi";

const Finish = () => {
    const router = useRouter();

    const onClickStart = () => {
        router.push("/dashboard");
    };

    return (
        <PagePaddingsTemplate>
            <Logo />
            <main className="max-w-[522px] mx-auto flex flex-col items-center mt-[150px]">
                <FinishCheckImage />
                <p className="uppercase text-primary text-sm leading-[21px] text-center mb-[24px]">
                    all set let’s start
                </p>
                <FinishNotice />
                <Button containerClassName="mb-[165px]" onClick={onClickStart}>
                    Let's Start
                </Button>
                <AuthFooter />
            </main>
        </PagePaddingsTemplate>
    );
};

export default Finish;
