import React, { useState } from "react";
import { SearchIcon } from "../../../assets/svg/svg_package";
import { colors } from "../../../utils/theme";
import { useMediaQuery } from "@mantine/hooks";

const ChatSidebarSearch = ({ search, setSearch }) => {
  const [searchFocused, setSearchFocused] = useState(false);
  const smallPlaceHolderText = useMediaQuery('(max-width: 820px)');

  const placeHolderText = smallPlaceHolderText ? 'Ara' : searchFocused
    ? "Aramaya başla!"
    : "Birini mi arıyorsun?";

  return (
    <div className={`chat-sidebar-search ${searchFocused ? "active" : ""}`}>
      <SearchIcon
        color={colors.iconColor}
        width="27"
        height="27"
        className={'chat-sidebar-search-icon'}
      />
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onBlur={() => setSearchFocused(false)}
        onFocus={() => setSearchFocused(true)}
        className="chat-sidebar-search-input"
        placeholder={placeHolderText}
      />
    </div>
  );
};

export default ChatSidebarSearch;
