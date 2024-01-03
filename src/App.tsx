import "./App.css";
import App1 from "./02-react基础/1-JSX语法";
import App2 from "./02-react基础/2-在 JSX 中使用 JavaScript 表达式";
import App3 from "./02-react基础/3-条件渲染";
import App4 from "./02-react基础/4-列表渲染";
import Todolist from "./03-案例/Todolist";
import App5 from "./02-react基础/5-事件绑定";
import App6 from "./02-react基础/6-使用hooks/useState";
import App7 from "./02-react基础/6-使用hooks/useEffect1";
import App8 from "./02-react基础/6-使用hooks/useMemo";
import App9 from "./02-react基础/6-使用hooks/useRef1";
import App10 from "./02-react基础/6-使用hooks/useRef2";
import App11 from "./02-react基础/6-使用hooks/useEffect2";
import App12 from "./02-react基础/6-使用hooks/useContext";
import Home from "./04-react进阶/Home";
import App13 from "./02-react基础/7-表单受控";
import TodoList2 from "./05-案例2/TodoList2";
import TodoList3 from "./06-antd+案例/TodoList3";

function App() {
  return (
    <div className="App">
      {/* <h1>基础</h1> */}
      {/* <App1 />
      <App2 />
      <App3 />
      <App4 /> */}
      {/* <App5 />
      <App6 />
      <App7 />
      <App11 />
      <App8 />
      <App9 />
      <App10 /> 
      <App12 />  
      <App13 /> */}
      {/* <Todolist /> */}
      {/* <h2>进阶</h2> */}
      {/* <Home /> */}
      {/* <TodoList2 /> */}
      {/* <h2>Antd案例</h2> */}
      <TodoList3 />
    </div>
  );
}

export default App;
