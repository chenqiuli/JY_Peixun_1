import React, { useState } from "react";

export default function Todolist() {
  const [list, setlist] = useState([
    {
      label: "肯德基",
      id: 1,
    },
    {
      label: "麦当劳",
      id: 2,
    },
    {
      label: "牛肉火锅",
      id: 3,
    },
    {
      label: "必胜客",
      id: 4,
    },
    {
      label: "烤鱼",
      id: 5,
    },
  ]);
  const [value, setvalue] = useState("");

  return (
    <>
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
              label: value,
              id: list.length + 1,
            });
            setlist(newList);
            setvalue("");
          }}
        >
          增加
        </button>
      </div>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={item.id} style={{ marginBottom: 8 }}>
              <span style={{ marginRight: 8 }}>{`今天吃${item.label}`}</span>
              <button
                onClick={() => {
                  const newList = [...list].filter((ele) => ele.id !== item.id);
                  setlist(newList);
                }}
              >
                删除
              </button>
            </li>
          );
        })}
        {!list.length && <div>暂无想吃的</div>}
      </ul>
    </>
  );
}

// 通过这个案例，我们对JSX，组件样式，条件渲染，列表渲染，事件点击，表单受控等知识进行了练习，接下来让我们进入react进阶模块吧。
