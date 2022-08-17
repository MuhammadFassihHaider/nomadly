import { DividerProps } from "./Divider";

export const DividerLine = ({ color }: Pick<DividerProps, "color">) => {
    return (
        <div
            className={`w-full h-[1px] ${
                color ? `bg-[${color}]` : `bg-mLightBlue`
            }`}
        />
    );
};
