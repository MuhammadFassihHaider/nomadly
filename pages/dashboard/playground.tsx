import { Editor } from "@components/common/organisms/editor";
import { PlaygroundHeader } from "@components/pages/playground/playground-header";
import { PlaygroundSidebar } from "@components/pages/playground/playground-sidebar";

const Playground = () => {
    return (
        <div>
            <PlaygroundHeader />
            <div className="flex">
                <PlaygroundSidebar />
                <main className="flex-1 ml-[340px] mt-[60px]">
                    <Editor />
                </main>
            </div>
        </div>
    );
};

export default Playground;
