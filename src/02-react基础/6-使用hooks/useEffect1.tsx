import axios from "axios";
import React, { useEffect, useState } from "react";

export default function App7() {
  const [list, setlist] = useState([]);
  const [flag, setflag] = useState(true);

  // useEffect(() => {
  //   axios("/test.json").then((res) => {
  //     console.log(res);
  //     setlist(res.data.list.data);
  //   });
  // }, []);

  useEffect(() => {
    console.log(1);
    // Todo
  }, [flag]);

  return (
    <div>
      <button onClick={() => setflag(!flag)}>name点击</button>
    </div>
  );
}
