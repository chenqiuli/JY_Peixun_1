import React from "react";

export type ListType = { id: number; title: string };

interface GlobalContextProps {
  value: string;
  setvalue: (val: string) => void;
  list: ListType[];
  setlist: (val: ListType[]) => void;
}

export const GlobalContext = React.createContext<GlobalContextProps>({
  value: "",
  setvalue: () => {},
  list: [],
  setlist: () => {},
});
