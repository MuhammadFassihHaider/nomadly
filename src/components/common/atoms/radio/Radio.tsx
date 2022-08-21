import { classNames } from "src/utils/helper";

type Props = {
    selected?: boolean;
    containerClassName?: string;
};

const Radio = ({ selected = false, containerClassName }: Props) => {
    return (
        <div
            className={classNames(
                "flex items-center text-sm",
                containerClassName,
            )}
        >
            <span
                className={classNames(
                    selected
                        ? "bg-primary border-transparent"
                        : "bg-white border-gray-300",
                    "h-[14px] w-[14px] rounded-full border border-mGray-0r",
                )}
                aria-hidden="true"
            ></span>
        </div>
    );
};

export default Radio;
