import React from "react";

export default function App1() {
  return (
    <div
      id="aaa"
      style={{
        width: 200,
        height: 200,
        background: "yellow",
      }}
    >
      <p id="bbb">111</p>
      <p id="ccc">222</p>
    </div>
  );
}

// 编译后
// React.createElement(
//   "div",
//   {
//     id: "aaa",
//     style: {
//       width: 200,
//       height: 200,
//       background: "yellow",
//     },
//   },

//   [
//     React.createElement(
//       "p",
//       {
//         id: "bbb",
//       },
//       111
//     ),
//     React.createElement(
//       "p",
//       {
//         id: "ccc",
//       },
//       2222
//     ),
//   ]
// );
