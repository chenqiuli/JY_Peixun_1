import moment from "moment";
import React from "react";
import "./index.css";



const formatDate = (val: Date) => {
  return moment(val).format("YYYY-MM-DD");
};

export default function App2() {
  const name = "张三";
  const style = { color: "green" };

  return (
    <>
      <div>{2 > 1 ? "真" : "假"}</div>
      <div>{name}</div>
      <div>{formatDate(new Date())}</div>
      <div style={{ color: "blue" }}>Hello World1</div>
      <div style={style}>Hello World2</div>
      <div className="active">Hello World3</div>
      <img src={'https://th.bing.com/th/id/OIP.duz6S7Fvygrqd6Yj_DcXAQHaF7?w=198&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'} alt="" />
    </>
  );
}
