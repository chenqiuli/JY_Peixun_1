import React, { useRef } from "react";

export default function App9() {
  const inputRef = useRef(null);
  const countRef = useRef(0);

  console.log(countRef);

  return (
    <>
      <div>
        <input type="text" ref={inputRef} />
        <button
          onClick={() => {
            console.log(inputRef.current);
          }}
        >
          点击
        </button>
      </div>

      <div>
        <span>{countRef.current}</span>
        <button
          onClick={() => {
            countRef.current++;
          }}
        >
          改变count
        </button>
        <button
          onClick={() => {
            console.log(countRef.current);
          }}
        >
          拿到count
        </button>
      </div>
    </>
  );
}
