import "./App.css";
import App1 from "./02-react基础/1-JSX语法";
import App2 from "./02-react基础/2-在 JSX 中使用 JavaScript 表达式";
import App3 from "./02-react基础/3-条件渲染";
import App4 from "./02-react基础/4-列表渲染";

function App() {
  return (
    <div className="App">
      <App1 />
      <App2 />
      <App3 />
      <App4 />
    </div>
  );
}

export default App;
