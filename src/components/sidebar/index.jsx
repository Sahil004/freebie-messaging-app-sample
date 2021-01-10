import React, { useState } from "react";
import CustomTab from "../custom-tab";
import { MESSAGE_TAB_TYPES } from "../../utils/static";
import ChatList from "../chat-list";

function SideBar() {
  const [tabsData, setTabsData] = useState(MESSAGE_TAB_TYPES);
  return (
    <div className="sidebar-wrapper" id="sidebar">
      <div className="sidebar-head">
        <div className="ui left icon input search-people">
          <input type="text" placeholder="Find people and conversations" />
          <i className="search icon"></i>
        </div>
        <button class="circular ui icon button add-chat">
          <i class="icon plus"></i>
        </button>
      </div>
      <div className="sidebar-body">
        <CustomTab tabs={tabsData} setTabsData={setTabsData}>
          <ChatList tab={tabsData.filter((res) => res.active)[0]} />
        </CustomTab>
      </div>
    </div>
  );
}

export default SideBar;
