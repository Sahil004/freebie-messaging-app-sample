import React, { useState, useEffect } from "react";
import { CHAT_LIST } from "../../utils/static";
import { activeTabSvg } from "../custom-tab";
import ellipses from "../../assets/ellipses-horizontal.svg";

export const ellipsesHorizontal = (
  <img src={ellipses} alt="horizontalEllipses" />
);

function ChatList(props) {
  const [state, setState] = useState(CHAT_LIST[props.tab.name.toLowerCase()]);
  useEffect(() => {
    setState(CHAT_LIST[props.tab.name.toLowerCase()]);
  }, [props.tab.name]);
  return (
    <>
      {state.map((res) => {
        return (
          <div
            className="chatList-item-wrapper pointer"
            onClick={() =>
              setState(
                state.map((item) =>
                  item.id === res.id
                    ? { ...item, selected: true }
                    : { ...item, selected: false }
                )
              )
            }
          >
            <div
              className={`chat-item-content ${res.selected ? "active" : ""}`}
            >
              <div
                className="profile-picture"
                style={{ background: `url('${res.image}')` }}
              >
                <div
                  className={`indicator ${res.online ? "online" : ""}`}
                ></div>
              </div>
              <div className="chat-content">
                <div style={{ fontSize: "13px", color: "#495969" }}>
                  {res.name}
                </div>
                <div style={{ fontSize: "11px", color: "#9095A4" }}>
                  {res.lastMessage.text}
                </div>
              </div>
              <div className="extras">
                {ellipsesHorizontal}
                <div
                  style={{
                    marginTop: "10px",
                    fontSize: "11px",
                    color: "#B6B9C3",
                  }}
                >
                  {res.lastMessage.sentTime}
                </div>
              </div>
            </div>
            <span className="selected-chat-indicator">
              {res.selected && activeTabSvg}
            </span>
          </div>
        );
      })}
    </>
  );
}

export default ChatList;
