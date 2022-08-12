import Divider from "@components/common/atoms/divider/Divider";
import { Input } from "@components/common/atoms/input";
import { GoogleButton } from "@components/common/molecules/google-button";
import React from "react";

const Home: React.FC = () => {
    return (
        <div>
            <Divider text="Divider" />
            <Input
                label={
                    <p>
                        Testing <span className="text-red-300">something</span>
                    </p>
                }
            />
            <GoogleButton brandType="gmail">Welcome</GoogleButton>
        </div>
    );
};

export default Home;
