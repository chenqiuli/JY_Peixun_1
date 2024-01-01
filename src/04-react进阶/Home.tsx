import React, { useState } from "react";
import Header from "./components/Header";
import Brother from "./components/Brother";
import Special from "./components/Special";

export default function Home() {
  const [flag, setflag] = useState(false);

  return (
    <div>
      <h2>父子通信</h2>
      <Header
        title="Header1"
        onCallback={(val) => {
          setflag(val);
        }}
      />
      {flag && <div>有内容</div>}
      {/* <Header /> */}
      <h2>插槽</h2>
      <Special>
        111
        <div style={{ color: "red" }}>哈哈哈</div>
      </Special>
      <h2>兄弟组件通信</h2>
      <Brother />
      <h2>跨组件通信</h2>
      {/* 看useContext那一章节，App12 */}
    </div>
  );
}
