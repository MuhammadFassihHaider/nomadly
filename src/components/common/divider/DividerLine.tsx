import { Props } from "./Divider";

export const DividerLine = ({ color }: Pick<Props, "color">) => {
    return (
        <div
            className={`w-full h-[1px] ${
                color ? `bg-[${color}]` : `bg-lightBlue`
            }`}
        />
    );
};
