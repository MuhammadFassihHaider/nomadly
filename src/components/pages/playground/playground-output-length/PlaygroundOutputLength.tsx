import { classNames } from "src/utils/helper";

type Props = {
    length: "S" | "M" | "L";
    isSelected?: boolean;
};

const PlaygroundOutputLength = ({ length, isSelected = false }: Props) => {
    return (
        <div
            className={classNames(
                "flex justify-center items-center rounded-md px-[15px] py-[8px] border bg-white max-w-min cursor-pointer",
                isSelected
                    ? "border-primary text-primary"
                    : "border-[#D8D8D8] text-mBlack-0",
            )}
            style={{ boxShadow: "0px 2px 6px rgba(124, 136, 155, 0.06)" }}
        >
            {length}
        </div>
    );
};

export default PlaygroundOutputLength;
