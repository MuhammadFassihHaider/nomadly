import { Input, TInputProps } from "@components/common/atoms/input";
import { PlaygroundFormNumberOfWords } from "../playground-form-number-of-words";

type Props = TInputProps;

const PlaygroundInput = ({ inputProps, errorMessage, ...rest }: Props) => {
    return (
        <div className="flex flex-col space-y-[3px]">
            <Input
                { ...rest }
                inputProps={ inputProps }
                errorMessage={ errorMessage }
            />
            <PlaygroundFormNumberOfWords
                numberOfWords={ 0 }
                errorMessage={ errorMessage }
            />
        </div>
    );
};

export default PlaygroundInput;
