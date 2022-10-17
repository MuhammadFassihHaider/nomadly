type TEmptyObject = Record<string, never>;

type TMenuItem = {
    label: string;
    value: string;
};

type TSidebarItem = {
    id: number;
    label: string;
    icon: ({ isSelected }: { isSelected?: boolean }) => JSX.Element;
    route: string;
};

type TSetState<T> = React.Dispatch<React.SetStateAction<T>>;

type TSuccessResponse<T = "", U = {}> = {
    status: "success";
    token?: string;
    message: string;
    // is undefined for logout
    data: {
        [T in string]: U;
    };
};

type TFailedResponse<T = []> = {
    status: "error";
    errors: any[] | T[];
};
