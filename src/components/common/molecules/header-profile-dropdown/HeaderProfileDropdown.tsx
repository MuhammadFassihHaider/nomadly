import { DownArrow } from "@components/icons";
import { Menu } from "@headlessui/react";

type Props = {
    name: string;
    image: string;
};

const HeaderProfileDropdown = ({ name, image }: Props) => {
    return (
        <div className="relative flex items-center ">
            <p className="font-medium text-sm leading-[17px] text-mBlack-0 mr-[15px] pl-[13px] border-l border-mGray-7">
                {name}
            </p>
            <Menu>
                <Menu.Button className={"flex items-center"}>
                    <img
                        src={image ?? "https://via.placeholder.com/150"}
                        className="rounded-full w-[40px] h-[40px] mr-[9px]"
                    />
                    <DownArrow className="fill-[#6D7787] w-[8px] h-[8px]" />
                </Menu.Button>
                <Menu.Items
                    className={
                        "absolute top-[calc(40px+15px)] right-0 bg-white rounded-md shadow-sm p-4 border border-mGray-0 min-w-[150px] z-10"
                    }
                >
                    <Menu.Item>
                        {({ active }) => (
                            <p className="text-sm cursor-pointer text-mBlack-0">
                                Profile
                            </p>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Menu>{" "}
        </div>
    );
};

export default HeaderProfileDropdown;
