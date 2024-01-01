import React, { useState } from "react";

interface HeaderProps {
  title?: string;
  onCallback?: (val: boolean) => void;
}

export default function Header(props: HeaderProps) {
  const { title = "default Header", onCallback } = props;

  const [collapsed, setcollapsed] = useState(false);

  return (
    <div
      style={{
        height: 100,
        border: "1px solid #ccc",
        marginBlockEnd: 8,
      }}
    >
      {title}
      <button
        onClick={() => {
          setcollapsed(!collapsed);
          onCallback?.(!collapsed);
        }}
      >
        点击
      </button>
    </div>
  );
}
