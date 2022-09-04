import React from "react";

const INSTRUCTIONS = [
    "Pick a Name that is easy to remember",
    "Pick a Name that is easy to Spell",
    "Pick a Name that is not too long",
];

const CreateBlogNameInstructions = () => {
    return (
        <ul className="flex flex-col ml-[20px] list-disc text-sm text-mGray-3 leading-[34px]">
            {INSTRUCTIONS.map((ins) => (
                <li key={ins}>{ins}</li>
            ))}
        </ul>
    );
};

export default CreateBlogNameInstructions;
