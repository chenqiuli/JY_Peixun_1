import axios from "axios";
import React, { useEffect, useState } from "react";

type ListType = { id: number; title: string };

export default function Brother() {
  const [list, setlist] = useState<ListType[]>([]);

  const [info, setinfo] = useState("");

  useEffect(() => {
    axios("/test.json").then((res) => {
      setlist(res.data.list.data);
    });
  }, []);

  return (
    <div>
      <ul>
        {list.map((item) => (
          <ListItem
            item={item}
            key={item.id}
            onCallback={(val) => {
              setinfo(val);
            }}
          />
        ))}
      </ul>
      <ListDetail info={info} />
    </div>
  );
}

interface ListItemProps {
  item: ListType;
  key: number;
  onCallback: (val: string) => void;
}

const ListItem = (props: ListItemProps) => {
  const { item, onCallback } = props;
  return (
    <div
      style={{ width: 100, height: 100, margin: 8, border: "1px solid #ccc" }}
      onClick={() => {
        onCallback(item.title);
      }}
    >
      {item.title}
    </div>
  );
};

const ListDetail = ({ info }: { info: string }) => {
  return <div>ListDetail- {info}</div>;
};
