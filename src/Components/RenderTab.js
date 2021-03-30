import React from "react";
import "./RenderTabStyle.css";
import Tabs from "./Tab";
import TabPane from './TabPane'

export default function RenderTab() {
  return (
    <div className="RenderTab">
      <div className="rt-container">
        <Tabs>
          <TabPane name="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane name="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}