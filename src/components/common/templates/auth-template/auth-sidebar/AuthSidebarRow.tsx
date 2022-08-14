import { AuthSidebarCheck } from "@components/icons";

type RowProps = {
    heading: string;
    content: string;
};

const RowHeading = ({ heading }: Pick<RowProps, "heading">) => {
    return <p className="flex mb-[9px] font-semibold text-white">{heading}</p>;
};

const RowContent = ({ content }: Pick<RowProps, "content">) => {
    return <p className="text-lightBlue">{content}</p>;
};

export const AuthSidebarRow = ({ content, heading }: RowProps) => {
    return (
        <div className="flex mb-[66px]">
            <div className="bg-lightBlue rounded-full w-[20px] h-[20px] flex justify-center items-center px-[4px] py-[6px]">
                <AuthSidebarCheck />
            </div>
            <div className="ml-[15px]">
                <RowHeading heading={heading} />
                <RowContent content={content} />
            </div>
        </div>
    );
};
