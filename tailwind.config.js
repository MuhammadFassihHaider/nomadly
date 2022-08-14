module.exports = {
    content: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "#54499E",
                "mGray-0": "#E0E4E9",
                "mGray-1": "#535353",
                "mGray-2": "#98A2B2",
                "mGray-3": "#616E82",
                "mGray-4": "#7C889B",
                gmail: "#EA4335",
                lightBlue: "#BFD1FF",
                mBlack: "#101625",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
