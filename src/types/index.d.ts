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
