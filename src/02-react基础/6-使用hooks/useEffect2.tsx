import React, { useEffect, useState } from "react";

export default function App11() {
  const [show, setshow] = useState(true);
  return (
    <div>
      <button onClick={() => setshow(!show)}>点击</button>
      {show && <Child />}
    </div>
  );
}

const Child = () => {
  useEffect(() => {
    window.onresize = () => {
      console.log("resize");
    };

    return () => {
      window.onresize = null;
    };
  }, []);

  return <div>Child</div>;
};
