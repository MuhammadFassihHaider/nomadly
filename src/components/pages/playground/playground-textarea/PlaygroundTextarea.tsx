import { TTextareaProps, Textarea } from "@components/common/atoms/textarea";
import React from "react";
import { PlaygroundFormNumberOfWords } from "../playground-form-number-of-words";
import {
    TPlaygroundTemplateInputLabelProps,
    PlaygroundInputLabel,
} from "../playground-input-label";

type Props = {
    textareaProps?: TTextareaProps;
    labelProps: TPlaygroundTemplateInputLabelProps;
};

const PlaygroundTextarea = ({ labelProps, textareaProps }: Props) => {
    return (
        <div className="flex flex-col space-y-[8px]">
            <Textarea
                label={<PlaygroundInputLabel {...labelProps} />}
                textareaProps={{ draggable: false, ...textareaProps }}
            />
            <PlaygroundFormNumberOfWords numberOfWords={0} />
        </div>
    );
};

export default PlaygroundTextarea;
