## 前端-react 和 ant design 入门

### 一、React 介绍

#### 1、React 的特性与发展

- （1）React 起源与发展：2013 年 5 月起源于 Facebook，用于创建用户界面的 JavaScript 库。

- （2）React 的特性

  - 高效：React 通过对虚拟 dom，减少与 Dom 的交互
  - JSX：JavaScript 语法的扩展，使用 JSX 语法在 render 中创建 dom，提高代码可读性
  - 组件化：通过 React 构建组件，使代码更容易得到复用
  - 单向数据流：数据流向只能从父组件流向子组件，子组件通过回调函数将数据传递回父组件

### 二、React 基础

#### 1、如何创建第一个 react 项目

- （1）全局安装
  ```bash
  npm i -g create-react-app
  create-react-app myproject --template typeScript
  ```
  - PS：如遇全局安装失败，执行`npm prefix -g`检测 npm 的 node_modules 的 bin 目录，将其 bin 路径添加至系统环境电脑 path 中即可。
- （2）临时安装
  ```bash
  npx create-react-app myproject --template typeScript
  ```
  - PS：`npx`可以避免全局模块安装，而直接执行 npm 的 node_modules 的 bin 目录下的命令
- （2）函数式组件：

  ```tsx
  import ReactDOM from "react-dom/client";
  const App = () => <h1>Hello World</h1>;
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(<App />);
  ```

  - PS：组件名必须大写。

- （3）JSX 语法：JSX 是 JavaScript 语法的扩展，它可以让我们在 JavaScript 中编写类似 HTML 的代码。

- 原始写法：

```jsx
React.createElement(
  "div",
  {
    id: "aaa",
    style: {
      width: 200,
      height: 200,
      background: "yellow",
    },
  },
  [
    React.createElement("p", { id: "bbb" }, 111),
    React.createElement("p", { id: "ccc" }, 222),
  ]
);
```

- 现代写法：

```jsx
<div
  id="aaa"
  style={{
    width: 200,
    height: 200,
    background: "yellow",
  }}
>
  <p id="bbb">111</p>
  <p id="ccc">222</p>
</div>
```

- （4）在 JSX 中使用 JavaScript 表达式

  - 三元运算符
  - 变量
  - 函数调用
  - 对象
  - 作为属性变量

  ```jsx
  import moment from "moment";
  import React from "react";

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
        <img
          src={
            "https://th.bing.com/th/id/OIP.duz6S7Fvygrqd6Yj_DcXAQHaF7?w=198&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          }
          alt=""
        />
      </>
    );
  }
  ```

- （5）条件渲染

  - 根据某个条件动态展示某段 JSX，可以使用三元运算符或者&&符号

  ```jsx
  import React from "react";

  export default function App3() {
    return 3 < 2 ? <div>有内容</div> : <div>空空如也</div>;
  }
  ```

  ```jsx
  import React, { useState } from "react";

  export default function App11() {
    const [show, setshow] = useState(true);
    return (
      <div>
        <button onClick={() => setshow(!show)}>点击</button>
        {show && <Child />}
      </div>
    );
  }
  ```

- （6）列表渲染

  - 为了列表的复用和重排，设置 key 值，提高性能；理想的 key 是 item.id，如果不涉及列表的增加删除重排，可以设置成索引。经常是对一个数组进行 map 遍历展示 JSX

  ```jsx
  import React from "react";

  export default function App4() {
    const arr = [
      {
        label: "A
        value: "1",
      },
      {
        label: "B",
        value: "2",
      },
      {
        label: "C",
        value: "3",
      },
    ];
    return (
      <div>
        {arr.map((item) => {
          return <div key={item.value}>{item.label}</div>;
        })}
      </div>
    );
  }
  ```

- （7）事件绑定

  - React 中的事件绑定跟普通事件不太一样，普通事件是小驼峰命名法，它绑定是直接绑定在当前元素身上；而 react 中是大驼峰命名，它是把所有事件都绑定在根节点身上，采用事件代理的方式冒泡到当前元素。但相同的是都有 event 对象。

  ```jsx
  import React from "react";

  export default function App5() {
    const handleClick2 = (e: any) => {
      console.log(e, "你点击了按钮2");
    };

    // 可以传递其他额外参数
    const handleClick3 = (num: number, e: any) => {
      console.log(e, num, "你点击了按钮3");
    };

    return (
      <>
        <button
          onClick={(e) => {
            console.log(e, "你点击了按钮1");
          }}
        >
          按钮1
        </button>
        <button onClick={handleClick2}>按钮2</button>
        <button onClick={(e) => handleClick3(1, e)}>按钮3</button>
      </>
    );
  }
  ```

- （8）使用 hooks

  - <font color="red">注意：use 开头的必须在组件顶层使用，如果你的组件没有大写，那就会报错了；不能用在 if 条件或渲染里面</font>

  - useState：参数是由数组解构出来的，有缓存状态的功能；每次 useState 改变了，整个函数都会重新渲染，所以能看到状态改变在视图。但是 state 的值是在上一次的基础上进行的更新。

    ```jsx
    import React, { useState } from "react";

    export default function App6() {
      const [name, setName] = useState("张三");
      const [count, setCount] = useState(0);
      return (
        <>
          <div>
            <p>
              {name}
              {count}
            </p>
            <button
              onClick={() => {
                setName("李四");
                setCount(count + 1);
              }}
            >
              点击
            </button>
          </div>
        </>
      );
    }
    ```

  - useEffect：让组件拥有副作用的钩子函数

    - 依赖项为[]，只会执行一次

    ```jsx
    import axios from "axios";
    import React, { useEffect, useState } from "react";

    export default function App7() {
      const [list, setlist] = useState([]);

      useEffect(() => {
        axios("/test.json").then((res) => {
          console.log(res);
          setlist(res.data.list.data);
        });
      }, []);

      return <div>App7</div>;
    }
    ```

    - 依赖项 [] 有放变量，只要变量一改变，就会执行

    ```jsx
    import axios from "axios";
    import React, { useEffect, useState } from "react";

    export default function App7() {
      const [flag, setflag] = useState(true);

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
    ```

    - return 一个回调函数，清除函数副作用。通常是清除全局挂载的一些事件等

    ```jsx
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
    ```

  - useMemo：计算属性作用。当依赖项改变才会重新执行这段函数，不改变一直拿到的是缓存的结果。比 useEffect 先执行，所以如果计算体内有 useEffect 获取的变量，依赖项需加上

  ```jsx
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
  ```

  - useRef

    - 获取 dom 节点

    ```jsx
    import React, { useRef } from "react";

    export default function App9() {
      const inputRef = useRef(null);

      return (
        <div>
          <input type="text" ref={inputRef} />
          <button
            onClick={() => {
              console.log(inputRef.current);
            }}
          >
            点击
          </button>
        </div>
      );
    }
    ```

    - 保存变量：用于存储不需要刷新视图的变量

    ```jsx
    import React, { useRef } from "react";

    export default function App9() {
      const countRef = useRef(0);

      return (
        <div>
          <span>{countRef.current}</span>
          <button
            onClick={() => {
              countRef.current++;
            }}
          >
            改变count
          </button>
          <button
            onClick={() => {
              console.log(countRef.current);
            }}
          >
            拿到count
          </button>
        </div>
      );
    }
    ```

    - 获取子组件实例：当父组件调用子组件时，想要获取子组件上的某些 state 或方法。

    ```jsx
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
    ```

  - useContext

- （9）表单受控

### 三、实践演练一

- TodoList 练习，涉及到第二点所有知识，源代码如下：

```jsx
import React, { useState } from "react";

export default function Todolist() {
  const [list, setlist] = useState([
    {
      label: "肯德基",
      id: 1,
    },
    {
      label: "麦当劳",
      id: 2,
    },
    {
      label: "牛肉火锅",
      id: 3,
    },
    {
      label: "必胜客",
      id: 4,
    },
    {
      label: "烤鱼",
      id: 5,
    },
  ]);
  const [value, setvalue] = useState("");

  return (
    <>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setvalue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const newList = [...list]; // 不可对原对象进行修改，需要深拷贝一个
            newList.unshift({
              label: value,
              id: list.length + 1,
            });
            setlist(newList);
            setvalue("");
          }}
        >
          确定
        </button>
      </div>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={item.id} style={{ marginBottom: 8 }}>
              <span style={{ marginRight: 8 }}>{`今天吃${item.label}`}</span>
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
        })}
        {!list.length && <div>暂无想吃的</div>}
      </ul>
    </>
  );
}
```

### 四、React 进阶

- （1）组件化开发：每个组件都有自己的实例

  - <font color="red">注意：组件名必须大写</font>

  ```jsx
  <!-- Home.tsx -->
  import React from "react";
  import Header from "./components/Header";

  export default function Home() {
    return (
      <div>
        <Header />
        <Header />
      </div>
    );
  }
  <!-- Header组件 -->
  import React from "react";

  export default function Header() {
    return (
      <div
        style={{
          height: 100,
          border: '1px solid #ccc',
          marginBlockEnd: 8,
        }}
      >
        Header
      </div>
    );
  }
  ```

- （2）组件通信方式

  - 父子通信：① 在父组件上使用 key="value"的形式传递 props，子组件通过 props 接收【父传子】。在父组件上定义一个回调函数，子组件通过 props 接收父组件的回调函数传递参数给父组件【子传父】 ② 父组件引用 ref 获取子组件的实例，得到子组件的所有属性

  ```jsx
  <!-- ① demo -->
  <!-- 父组件 -->
  import React, { useState } from "react";
  import Header from "./components/Header";

  export default function Home() {
    const [flag, setflag] = useState(false);

    return (
      <div>
        <Header
          title="Header1"
          onCallback={(val) => {
            setflag(val);
          }}
        />
        {flag && <div>有内容</div>}
        {/* <Header /> */}
      </div>
    );
  }
  <!-- 子组件 -->
  import React, { useState } from "react";

  interface HeaderProps {
    title?: string;
    onCallback?: (val: boolean) => void;
  }

  export default function Header(props: HeaderProps) {
    const { title = "default Header", onCallback } = props;

    const [collapsed, setcollapsed] = useState(false);

    return (
      <div
        style={{
          height: 100,
          border: "1px solid #ccc",
          marginBlockEnd: 8,
        }}
      >
        {title}
        <button
          onClick={() => {
            setcollapsed(!collapsed);
            onCallback?.(!collapsed);
          }}
        >
          点击
        </button>
      </div>
    );
  }
  <!-- ② demo 看useRef2章节 -->
  ```

  - 特殊的 props 属性：children-插槽

  ```jsx
  <!-- 父组件 -->
  import React, { useState } from "react";
  import Special from "./components/Special";

  export default function Home() {

    return (
      <div>
        <Special>
          111
          <div style={{ color: "red" }}>哈哈哈</div>
        </Special>
      </div>
    );
  }
  <!-- 子组件 -->
  import React from "react";

  export default function Special({ children }: { children: React.ReactNode }) {
    return (
      <div>
        Special
        {children}
        {children}
      </div>
    );
  }
  ```

  - 兄弟组件通信：通过父组件中间人模式通信，兄弟 A 组件回调给父组件，父组件再传递 props 给兄弟 B 组件。这种适用于父组件内只有一层子组件的情况。

  ```jsx
  <!-- 父组件 -->
  import axios from "axios";
  import React, { useEffect, useState } from "react";

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
  <!-- 子组件 -->
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
  <!-- 子组件 -->
  const ListDetail = ({ info }: { info: string }) => {
    return <div>ListDetail- {info}</div>;
  };
  ```

  - 跨组件通信：用于嵌套层级较深的组件间，比较方便

  ```jsx
  <!-- 父组件 -->
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
  <!-- 子组件 -->
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
  <!-- 子组件 -->
  const ListDetail = () => {
    return (
      <GlobalContext.Consumer>
        {(value) => <div>ListDetail- {value.info}</div>}
      </GlobalContext.Consumer>
    );
  };
  ```

- （3）组件路由

### 五、实践演练二

- TodoList 案例列表页跳转详情页带参数，组件复用 demo

### 六、Antd Design & ProComponent

- （1）介绍文档
- （2）介绍常用的蚂蚁组件，代码演示
- （3）如何修改蚂蚁的样式，特殊的有 Modal，Drawer
- Antd Design 与 Procomponent

### 七、总结

### 八、答疑
