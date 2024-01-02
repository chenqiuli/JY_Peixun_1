import axios from "axios";
import React, { useEffect, useState } from "react";
import ListItem from "./components/ListItem";
import EmptyList from "./components/EmptyList";
import InputList from "./components/InputList";
import { GlobalContext, ListType } from "./context";

export default function TodoList2() {
  const [list, setlist] = useState<ListType[]>([]);
  const [value, setvalue] = useState("");

  useEffect(() => {
    axios("/test.json").then((res) => {
      setlist(res.data.list.data);
    });
  }, []);

  return (
    <GlobalContext.Provider // 改成父子通信
      value={{
        value,
        setvalue,
        list,
        setlist,
      }}
    >
      <InputList />
      <ul>
        {list.map((item) => {
          return <ListItem key={item.id} item={item} />;
        })}
        {!list.length && <EmptyList />}
      </ul>
    </GlobalContext.Provider>
  );
}

// 通过这个案例，我们对组件化开发、组件props传参、组件通信方式等知识进行了练习。那其实react也有对应的ui库Antd，下面来看看
