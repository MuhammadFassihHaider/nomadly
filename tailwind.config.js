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
                "mGray-6": "#F3F3F3",
                "mGray-7": "#C8CDD6",
                "mGray-8": "#6D7787",
                "mGray-9": "#87888C",
                "mGray-10": "#D9D9D9",
                "mGray-11": "#BFBFBF",
                "mGray-12": "#F6F6F6",
                gmail: "#EA4335",
                mLightBlue: "#BFD1FF",
                "mBlack-0": "#101625",
                "mBlack-1": "#170F49",
                "mYellow-0": "#FAC53D",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
