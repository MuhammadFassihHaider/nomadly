import { SpinnerFullpage } from "@components/common/molecules/spinner-fullpage";
import store from "@redux/store";
import "@styles/global.css";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { useAuthPages } from "src/hooks/useAuthPages";

function MyApp({ Component, pageProps }: any): JSX.Element {
    const { showPage } = useAuthPages();
    return (
        <Provider store={store}>
            <Toaster position="top-right" reverseOrder={true} />
            {showPage && <Component {...pageProps} />}
            <SpinnerFullpage />
        </Provider>
    );
}

export default MyApp;
