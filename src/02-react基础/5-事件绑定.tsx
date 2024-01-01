import React from "react";

export default function App5() {
  const handleClick2 = (e: any) => {
    console.log(e, "你点击了按钮2");
  };

  // 可以传递其他额外参数
  const handleClick3 = (num: number, e: any) => {
    console.log(e, num, "你点击了按钮3");
  };

  return (
    <>
      <button
        onClick={(e) => {
          console.log(e, "你点击了按钮1");
        }}
      >
        按钮1
      </button>
      <button onClick={handleClick2}>按钮2</button>
      <button onClick={(e) => handleClick3(1, e)}>按钮3</button>
    </>
  );
}
