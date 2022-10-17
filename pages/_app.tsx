import React from "react";
import "@styles/global.css";
import { Provider } from "react-redux";
import store from "@redux/store";

function MyApp({ Component, pageProps }: any): JSX.Element {
    return (
        <Provider store={ store }>
            <Component { ...pageProps } />
        </Provider>
    );
}

export default MyApp;
