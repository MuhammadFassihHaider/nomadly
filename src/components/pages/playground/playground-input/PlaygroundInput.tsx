import { Input, TInputProps } from "@components/common/atoms/input";
import { PlaygroundFormNumberOfWords } from "../playground-form-number-of-words";
import {
    PlaygroundInputLabel,
    TPlaygroundTemplateInputLabelProps,
} from "../playground-input-label";

type Props = {
    inputProps?: TInputProps;
    labelProps: TPlaygroundTemplateInputLabelProps;
};

const PlaygroundInput = ({ inputProps, labelProps }: Props) => {
    return (
        <div className="flex flex-col space-y-[8px]">
            <Input
                {...inputProps}
                label={<PlaygroundInputLabel {...labelProps} />}
            />
            <PlaygroundFormNumberOfWords numberOfWords={0} />
        </div>
    );
};

export default PlaygroundInput;
