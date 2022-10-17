import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AUTH_TOKEN } from "src/utils/constants";
import useDidMountEffect from "./useDidMountEffect";

export const useAuthPages = () => {
    const [showPage, setShowPage] = useState(false);
    const { pathname, push } = useRouter();

    const handleEffectsDueToPageLocation = () => {
        if (
            pathname !== "" &&
            pathname !== "/create-user" &&
            pathname !== "reset-password"
        ) {
            const auth_token = localStorage.getItem(AUTH_TOKEN);
            if (!auth_token) {
                if (pathname === "/") {
                    setShowPage(true);
                } else {
                    push("/");
                }
            } else {
                setShowPage(true);
            }
        } else {
            const auth_token = localStorage.getItem(AUTH_TOKEN);
            if (!!auth_token) {
                push("/dashboard");
            } else {
                push("/");
            }
        }
    };

    useEffect(() => {
        handleEffectsDueToPageLocation();
    }, []);

    useDidMountEffect(() => {
        !showPage && setShowPage(true);
    }, [pathname]);

    return {
        showPage,
    };
};
