module.exports = {
    content: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "#54499E",
                "mGray-0": "#E0E4E9",
                "mGray-1": "#535353",
                gmail: "#EA4335",
                lightBlue: "#BFD1FF",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
