import { Button } from "antd";
import { ListType } from "../TodoList3";

interface ListItemProps {
  item: ListType;
  list: ListType[];
  setlist: (val: ListType[]) => void;
}

export default function ListItem(props: ListItemProps) {
  const { item, list, setlist } = props;

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
      <Button
        onClick={() => {
          const newList = [...list].filter((ele) => ele.id !== item.id);
          setlist(newList);
        }}
      >
        删除
      </Button>
    </li>
  );
}
