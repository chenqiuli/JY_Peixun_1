import React, { useState } from "react";

export default function App6() {
  const [name, setName] = useState("张三");
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <p>
          {name}
          {count}
        </p>
        <button
          onClick={() => {
            setName("李四");
            setCount(count + 1);
          }}
        >
          点击
        </button>
      </div>
    </>
  );
}
