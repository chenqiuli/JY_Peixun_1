import React, { useImperativeHandle, useRef, useState } from "react";

interface IChildProps {
  type: string;
}

interface IChildInstance {
  setname: (val: string) => void | null;
  a: number;
  name: string;
}

const Child = React.forwardRef<IChildInstance, IChildProps>((props, ref) => {
  const { type } = props;
  const [name, setname] = useState("张三");

  useImperativeHandle(ref, () => {
    return {
      a: 1,
      name,
      setname,
    };
  });

  return (
    <div>
      Child组件-{name}-{type}
    </div>
  );
});

export default function App10() {
  const childRef = useRef<IChildInstance>(null);

  return (
    <div>
      <Child ref={childRef} type="Add" />
      <button
        onClick={() => {
          console.log(childRef.current, "childRef.current");
          childRef.current?.setname("李四");
        }}
      >
        点击
      </button>
    </div>
  );
}
