import React, { ComponentProps } from "react";

const NoteDown = (props: ComponentProps<"svg">) => {
    return (
        <svg
            width={15}
            height={15}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.146.792a2.706 2.706 0 0 0-.49.17c-.251.118-.368.226-3.133 2.891-2.317 2.233-2.881 2.795-2.921 2.904-.071.196-.555 2.398-.57 2.597-.011.135.002.192.068.286.135.193.295.278.5.263.205-.015 2.485-.482 2.688-.551.113-.039.699-.588 3.005-2.822 2.742-2.654 2.87-2.784 2.994-3.026a2.16 2.16 0 0 0 .231-.877c0-.252-.094-.61-.23-.869C13.9 1.013 13.01.612 12.146.792Zm.799 1.126c.282.14.438.392.438.71 0 .294-.072.414-.484.808l-.335.32-.584-.564-.584-.564.331-.323c.333-.324.451-.408.646-.457.148-.037.424-.003.572.07ZM.764 2.953c-.347.118-.6.368-.714.705-.05.15-.055.659-.047 5.24l.01 5.075.12.213c.132.236.24.338.505.472l.178.091H11.465l.22-.115c.244-.128.35-.233.489-.488l.094-.173.01-2.842c.01-3.169.023-2.983-.23-3.17a.577.577 0 0 0-.642 0c-.251.185-.238.02-.238 3.025v2.7H1.113v-9.71h2.796c3.113 0 2.941.013 3.132-.23a.527.527 0 0 0 0-.62c-.191-.242-.008-.23-3.228-.227-2.537.001-2.911.008-3.05.054ZM9.78 6.446 7.8 8.359l-.73.153a10.04 10.04 0 0 1-.742.14c-.007-.007.058-.33.145-.717l.157-.705L8.61 5.317l1.981-1.914.586.565.585.564L9.78 6.446Z"
            />
        </svg>
    );
};

export default NoteDown;