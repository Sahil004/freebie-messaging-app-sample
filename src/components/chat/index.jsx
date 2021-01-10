import React, { useState } from "react";
import "./index.css";
import chatNavSvg from "./../../assets/chat-nav.svg";
import { SAMPLE_CHAT } from "../../utils/static";
export default function Chat() {
  const [chat, setChat] = useState(SAMPLE_CHAT);
  const [enableCall, setEnableCall] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const sendMessage = () => {
    if (!inputValue) {
      return;
    }
    let tempChat = chat;
    tempChat.unshift({
      source: "me",
      sentTime: "7:48 PM",
      text: inputValue,
    });
    setChat(tempChat);
    setInputValue("");
  };
  return (
    <div className="chat-body">
      <div className="chat-head">
        <div className="chat-head-leftSection">
          <div className="profile-picture">
            <div className={`indicator online`}></div>
          </div>
          <div style={{ marginTop: "12px", color: "#9095A4" }}>
            Michael Wong
          </div>
        </div>
        <div className="chat-head-rightSection">
          <button
            class="circular ui green icon button"
            onClick={(e) => setEnableCall(true)}
          >
            <i class="phone icon"></i>
          </button>
        </div>
        <img
          src={chatNavSvg}
          style={{ width: "100%", position: "absolute", bottom: "-11.2px" }}
          alt="chat-nav"
        />
      </div>
      <div className="chat-text-body">
        {chat.map((res) => {
          return (
            <div
              className={`chat-text-wrapper ${res.source === "me" ? "me" : ""}`}
            >
              <div className="date-time"></div>
              <div className="message-text">{res.text}</div>
            </div>
          );
        })}
      </div>
      <div className="chat-foot">
        <div className="chat-foot-wrapper">
          <div class="ui right action input" style={{ width: "100%" }}>
            <input
              type="text"
              value={inputValue}
              placeholder="Message Michael"
              id="amount"
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <div
              class="ui small basic icon buttons"
              style={{ border: "0px", background: "#f0f0fb" }}
            >
              <button
                class="ui button chat-icons"
                onClick={(e) => sendMessage()}
              >
                <i class="paper plane icon"></i>
              </button>
              <button class="ui button chat-icons">
                <i class="smile outline icon"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {enableCall && (
        <div className="call-view">
          <div className="top-section">
            <div className="call-name" style={{ color: "#fff" }}>
              Michael Wong
            </div>
            <div className="call-picture">
              <div
                className="profile-picture"
                style={{
                  width: "280px",
                  height: "280px",
                  border: "30px solid rgba(255, 255, 255, 0.06)",
                  boxShadow: "0px 0px 0px 30px rgba(255, 255, 255, 0.03)",
                }}
              >
                <div
                  className={`indicator online`}
                  style={{ right: "50px", bottom: "10px" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="bottom-section">
            <button class="circular large ui icon button transparent">
              <i class="microphone icon"></i>
            </button>
            <button class="circular large ui icon button transparent">
              <i class="video icon"></i>
            </button>
            <button
              class="circular huge ui red icon button"
              onClick={(e) => setEnableCall(false)}
              style={{ boxShadow: "0px 0px  20px rgba(223, 129, 131, 0.26)" }}
            >
              <i class="phone icon"></i>
            </button>
            <button class="circular large ui icon button transparent">
              <i class="user plus icon"></i>
            </button>
            <button class="circular large ui icon button transparent">
              <i class="ellipsis horizontal icon"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
