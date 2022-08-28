import { Magnifier } from "@components/icons";
import React, { ComponentProps, useState } from "react";
import { classNames } from "src/utils/helper";

type Props = {
    containerClassName?: string;
} & ComponentProps<"input">;

const SearchInput = ({
    containerClassName,
    onFocus,
    onBlur,
    ...inputProps
}: Props) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className={classNames("relative", containerClassName)}>
            <Magnifier
                className={classNames(
                    "absolute left-[15px] top-[7px]",
                    isFocused && "stroke-primary",
                )}
                circleAndPathStroke={isFocused ? "#54499E" : undefined}
            />
            <input
                placeholder="Search"
                className="rounded-[10px] border border-mGray-7 focus:border-primary outline-none py-[7px] pl-[45px] pr-[15px] h-[40px]"
                onFocus={(e) => {
                    setIsFocused(true);
                    onFocus?.(e);
                }}
                onBlur={(e) => {
                    setIsFocused(false);
                    onBlur?.(e);
                }}
                {...inputProps}
            />
        </div>
    );
};

export default SearchInput;
