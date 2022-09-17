import { ArrowRight } from "@components/icons";

const PlaygroundHeader = () => {
    return (
        <header
            className="bg-white w-full h-[60px] px-[37px] flex items-center fixed top-0 left-0 right-0 z-10"
            style={{
                boxShadow: "0px 1px 0px #F1F3F2",
            }}
        >
            <ArrowRight className="w-[18px] h-[12px] fill-mBlack-0 transform rotate-180 mr-[21px]" />
            <p className="font-medium text-mBlack-0">New Project – Blog Post</p>
        </header>
    );
};

export default PlaygroundHeader;
