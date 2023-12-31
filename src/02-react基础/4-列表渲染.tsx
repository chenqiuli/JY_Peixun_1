import React from "react";

export default function App4() {
  const arr = [
    {
      label: "A",
      value: "1",
    },
    {
      label: "B",
      value: "2",
    },
    {
      label: "C",
      value: "3",
    },
  ];
  return (
    <div>
      {arr.map((item) => {
        return <div key={item.value}>{item.label}</div>;
      })}
    </div>
  );
}
