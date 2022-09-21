import { useEffect, useRef } from "react";

const EnterKeyCode = 16;

/**
 * this hook ensures that api request is not sent as
 * many times as the event listener is attached while
 * the same time ensures that the data passed to api
 * fetch function is the latest one.
 */
export const useKeyDown = (handler: () => void) => {
    const savedHandler = useRef<any>();

    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        const handleKeyDown = (event: any) => {
            if (event.keyCode === EnterKeyCode && event.ctrlKey) {
                savedHandler.current();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
};
