import React from "react";

type Props = {
    numberOfWords: number;
};

const PlaygroundFormNumberOfWords = ({ numberOfWords }: Props) => (
    <p className="text-sm leading-[21px] text-[#808080] self-end">
        {numberOfWords} / 150
    </p>
);

export default PlaygroundFormNumberOfWords;
