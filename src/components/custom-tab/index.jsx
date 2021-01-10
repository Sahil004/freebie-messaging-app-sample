import React from "react";
import tabSvg from "./../../assets/tab-active.svg";

export const activeTabSvg = <img src={tabSvg} alt="tab svg" />;

function CustomTab(props) {
  return (
    <>
      <div className="ui grid tab-head-wrap">
        {props.tabs.map((res) => {
          return (
            <>
              <div
                className={`two wide colum pointer tab-head ${
                  res?.active ? "active" : ""
                }`}
                onClick={(e) =>
                  props.setTabsData(
                    props.tabs.map((item) =>
                      item.name === res.name
                        ? { name: res.name, active: true }
                        : { name: item.name, active: false }
                    )
                  )
                }
              >
                {res?.name}
                {res?.active && activeTabSvg}
              </div>
            </>
          );
        })}
        <div className="sixteen wide column" style={{ paddingTop: "0px" }}>
          <hr style={{ marginTop: "0px", border: "1px solid #F0F0FB" }} />
        </div>
      </div>
      <div className="tab-body-content">{props.children}</div>
    </>
  );
}

export default CustomTab;
