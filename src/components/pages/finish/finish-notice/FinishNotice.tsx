import Link from "next/link";

const FinishNotice = () => {
    return (
        <p className="text-xs leading-[18px] mb-[42px] text-center">
            You can always change the{" "}
            <Link href={"/"}>
                <a className="text-primary hover:underline">settings</a>
            </Link>{" "}
            you make from Setting page or add automations to your process from{" "}
            <Link href={"/"}>
                <a className="text-primary hover:underline">Automation</a>
            </Link>{" "}
            page. some additional text can go here
        </p>
    );
};

export default FinishNotice;
