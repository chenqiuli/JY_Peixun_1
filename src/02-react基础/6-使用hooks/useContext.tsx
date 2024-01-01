import axios from "axios";
import React, { useEffect, useState } from "react";

interface GlobalContextProps {
  info?: string;
  setinfo?: (val: string) => void;
}

const GlobalContext = React.createContext<GlobalContextProps>({});

type ListType = { id: number; title: string };

export default function App12() {
  const [list, setlist] = useState<ListType[]>([]);

  const [info, setinfo] = useState("");

  useEffect(() => {
    axios("/test.json").then((res) => {
      setlist(res.data.list.data);
    });
  }, []);

  return (
    <div>
      <GlobalContext.Provider
        value={{
          info,
          setinfo,
        }}
      >
        <ul>
          {list.map((item) => (
            <ListItem item={item} key={item.id} />
          ))}
        </ul>
        <ListDetail />
      </GlobalContext.Provider>
    </div>
  );
}

interface ListItemProps {
  item: ListType;
  key: number;
}

const ListItem = (props: ListItemProps) => {
  const { item } = props;
  return (
    <GlobalContext.Consumer>
      {(value) => {
        console.log(value, "aksdk");
        return (
          <div
            style={{
              width: 100,
              height: 100,
              margin: 8,
              border: "1px solid #ccc",
            }}
            onClick={() => {
              value.setinfo?.(item.title);
            }}
          >
            {item.title}
          </div>
        );
      }}
    </GlobalContext.Consumer>
  );
};

const ListDetail = () => {
  return (
    <GlobalContext.Consumer>
      {(value) => <div>ListDetail- {value.info}</div>}
    </GlobalContext.Consumer>
  );
};
