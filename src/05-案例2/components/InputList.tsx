import React, { useContext } from "react";
import { GlobalContext } from "../context";

export default function InputList() {
  const { value, setvalue, list, setlist } = useContext(GlobalContext);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setvalue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const newList = [...list]; // 不可对原对象进行修改，需要深拷贝一个
          newList.unshift({
            title: value,
            id: list.length + 1,
          });
          setlist(newList);
          setvalue("");
        }}
      >
        确定
      </button>
    </div>
  );
}
