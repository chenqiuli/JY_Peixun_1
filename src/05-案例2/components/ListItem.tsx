import React, { useContext } from "react";
import { GlobalContext, ListType } from "../context";

interface ListItemProps {
  item: ListType;
}

export default function ListItem(props: ListItemProps) {
  const { list, setlist } = useContext(GlobalContext);
  const { item } = props;

  return (
    <li
      key={item.id}
      style={{
        marginBottom: 8,
        color: "purple",
        width: "100%",
        height: 40,
        background: "pink",
      }}
    >
      <span style={{ marginRight: 8 }}>{`${item.title}`}</span>
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
}
