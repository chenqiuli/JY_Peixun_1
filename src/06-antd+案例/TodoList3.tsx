import axios from "axios";
import React, { useEffect, useState } from "react";
import ListItem from "./components/ListItem";
import { Button, Empty, Input } from "antd"; // 按需加载

export type ListType = { id: number; title: string };

export default function TodoList3() {
  const [list, setlist] = useState<ListType[]>([]);
  const [value, setvalue] = useState("");

  useEffect(() => {
    axios("/test.json").then((res) => {
      setlist(res.data.list.data);
    });
  }, []);

  return (
    <>
      <div>
        <Input
          value={value}
          onChange={(e) => {
            setvalue(e.target.value);
          }}
          size="middle"
        />
        <Button
          onClick={() => {
            const newList = [...list]; // 不可对原对象进行修改，需要深拷贝一个
            newList.unshift({
              title: value,
              id: list.length + 1,
            });
            setlist(newList);
            setvalue("");
          }}
          type="primary"
        >
          增加
        </Button>
      </div>
      <ul>
        {list.map((item) => {
          return (
            <ListItem key={item.id} item={item} list={list} setlist={setlist} />
          );
        })}
        {!list.length && <Empty />}
      </ul>
    </>
  );
}

// 通过这个案例，我们对组件化开发、组件通信方式等知识进行了练习。那前端开发中，有很多重复的轮子，我们是可以复用别人的，，下面来看看
