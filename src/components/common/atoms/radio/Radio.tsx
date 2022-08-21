import { classNames } from "src/utils/helper";

type Props = {
    selected?: boolean;
};

const Radio = ({ selected = false }: Props) => {
    return (
        <div className="flex items-center text-sm">
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
