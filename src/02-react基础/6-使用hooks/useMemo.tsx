import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

type ListType = { id: number; title: string };

export default function App8() {
  const [list, setlist] = useState<ListType[]>([]);
  const [text, settext] = useState("");

  const getList = useMemo(() => {
    return list.filter((item) =>
      item.title.toUpperCase().includes(text.toUpperCase())
    );
  }, [list, text]);

  useEffect(() => {
    axios("/test.json").then((res) => {
      setlist(res.data.list.data);
    });
  }, []);

  return (
    <>
      <div>
        <input type="text" onChange={(evt) => settext(evt.target.value)} />
        <ul>
          {getList.map((item: ListType) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
