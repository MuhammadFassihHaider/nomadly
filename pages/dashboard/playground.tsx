import { PlaygroundHeader } from "@components/pages/playground/playground-header";
import { PlaygroundSidebar } from "@components/pages/playground/playground-sidebar";

const Playground = () => {
    return (
        <div>
            <PlaygroundHeader />
            <div className="flex">
                <PlaygroundSidebar />
                <main className="flex-1"></main>
            </div>
        </div>
    );
};

export default Playground;
