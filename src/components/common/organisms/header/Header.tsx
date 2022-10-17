import { SearchInput } from "@components/common/atoms/search-input";
import { HeaderProfileDropdown } from "@components/common/molecules/header-profile-dropdown";
import React from "react";
import { Notification } from "@components/icons";

const Header = () => {
    return (
        <div className="flex items-center justify-between py-[15px] pl-[32px] pr-[35px] border-b border-[#F1F3F2] page-template-layout__header ">
            <SearchInput />
            <div className="flex items-center">
                <Notification className="mr-[13px]" />
                <HeaderProfileDropdown
                    name="Watson"
                    image="https://via.placeholder.com/150"
                />
            </div>
        </div>
    );
};

export default Header;
