import React from "react";

export default function App1() {
  return React.createElement(
    "div",
    {
      id: "aaa",
      style: {
        width: 200,
        height: 200,
        background: "yellow",
      },
    },
    [
      React.createElement("p", { id: "bbb", key: "bbb" }, 111),
      React.createElement("p", { id: "ccc", key: "ccc" }, 222),
    ]
  );

  //   <div
  //   id="aaa"
  //   style={{
  //     width: 200,
  //     height: 200,
  //     background: "yellow",
  //   }}
  // >
  //   <p id="bbb">111</p>
  //   <p id="ccc">222</p>
  // </div>
}
