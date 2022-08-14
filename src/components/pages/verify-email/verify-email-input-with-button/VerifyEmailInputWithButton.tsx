import { Button } from "@components/common/atoms/button";
import { Input } from "@components/common/atoms/input";

const VerifyEmailLabel = (
    <p className="mb-[8px]">
        Code sent to
        <span className="text-primary px-1">some email</span>
    </p>
);

const VerifyEmailInputWithButton = () => {
    return (
        <div className="bg-primary/[15%] rounded-md border border-primary px-[30px] py-[33px] mb-[25px]">
            <Input label={VerifyEmailLabel} containerClassName="mb-[24px]" />
            <Button fullWidth>Verify</Button>
        </div>
    );
};

export default VerifyEmailInputWithButton;
