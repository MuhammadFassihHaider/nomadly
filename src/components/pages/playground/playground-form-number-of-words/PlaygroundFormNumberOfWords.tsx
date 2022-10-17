import React from "react";

type Props = {
    numberOfWords: number;
    errorMessage?: string;
};

const PlaygroundFormNumberOfWords = ({
    numberOfWords,
    errorMessage,
}: Props) => (
    <div className="flex justify-between items-center">
        <p className="text-sm text-red-500">{errorMessage}</p>
        <p className="text-sm leading-[21px] text-[#808080] self-end">
            {numberOfWords} / 150
        </p>
    </div>
);

export default PlaygroundFormNumberOfWords;
