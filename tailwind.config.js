module.exports = {
    content: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "#54499E",
                mLightPurple: "#ECEBFF",
                "mGray-0": "#E0E4E9",
                "mGray-1": "#535353",
                "mGray-2": "#98A2B2",
                "mGray-3": "#616E82",
                "mGray-4": "#7C889B",
                "mGray-5": "#6F6C90",
                gmail: "#EA4335",
                mLightBlue: "#BFD1FF",
                "mBlack-0": "#101625",
                "mBlack-1": "#170F49",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
