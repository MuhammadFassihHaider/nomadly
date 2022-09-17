import { Textarea, TTextareaProps } from "@components/common/atoms/textarea";
import { PlaygroundFormNumberOfWords } from "../playground-form-number-of-words";

type Props = TTextareaProps;

const PlaygroundTextarea = ({ textareaProps, ...rest }: Props) => {
    return (
        <div className="flex flex-col space-y-[3px]">
            <Textarea
                {...rest}
                textareaProps={{ draggable: false, ...textareaProps }}
            />
            <PlaygroundFormNumberOfWords
                numberOfWords={0}
                errorMessage={rest.errorMessage}
            />
        </div>
    );
};

export default PlaygroundTextarea;
