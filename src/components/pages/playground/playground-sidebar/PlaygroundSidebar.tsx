import { Button } from "@components/common/atoms/button";
import { Label } from "@components/common/atoms/label";
import { PlaygroundInput } from "../playground-input";
import { PlaygroundOutputLength } from "../playground-output-length";
import { PlaygroundTextarea } from "../playground-textarea";

const PlaygroundSidebar = () => {
    return (
        <aside className="w-[340px] bg-mGray-12 p-[38px] min-h-[calc(100vh-60px)] h-full">
            <div className="flex flex-col space-y-[24px]">
                <PlaygroundInput labelProps={{ label: "Title" }} />
                <PlaygroundTextarea
                    labelProps={{ label: "Content description/brief" }}
                    textareaProps={{ textareaProps: { rows: 8 } }}
                />
                <PlaygroundInput labelProps={{ label: "Tone of voice" }} />
                <PlaygroundTextarea
                    labelProps={{ label: "Keywords" }}
                    textareaProps={{ textareaProps: { rows: 5 } }}
                />
            </div>
            <div className="mb-[55px]">
                <Label
                    label={"Output lengths"}
                    labelProps={{
                        className: "text-mBlack-0",
                    }}
                />
                <div className="flex space-x-[10px] items-center">
                    <PlaygroundOutputLength isSelected length="S" />
                    <PlaygroundOutputLength length="M" />
                    <PlaygroundOutputLength length="L" />
                </div>
            </div>
            <Button fullWidth size="lg">
                Compose
            </Button>
        </aside>
    );
};
export default PlaygroundSidebar;
