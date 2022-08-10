import Divider from "@components/common/divider/Divider";
import React from "react";

const Home: React.FC = () => {
    return (
        <div>
            {/* <Button
                className="button__gmail"
                variant="grey"
                size="xl"
                fullWidth
                iconLeft={<Gmail />}
                iconRight={<OpenNewTab className="-ml-[7px]" />}
            >
                Continue With Google
            </Button> */}
            <Divider text="Divider" />
        </div>
    );
};

export default Home;
