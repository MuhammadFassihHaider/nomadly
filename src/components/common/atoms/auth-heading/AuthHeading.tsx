import { classNames } from "src/utils/helper";
import { THeadingAndSubHeading } from "../../templates/auth-template/AuthTemplate";

type Props = {
    text: THeadingAndSubHeading;
    className?: string;
};

const AuthHeading = ({ text, className = "" }: Props) => {
    return (
        <p
            className={classNames(
                "text-[34px] leading-[32px] text-mBlack-0 text-center",
                className,
            )}
        >
            {text}
        </p>
    );
};

export default AuthHeading;
