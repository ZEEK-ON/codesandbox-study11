import axios from "axios";
import "./styles.css";
import { useState } from "react";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onCLickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        // res.data.map((todo) => todo.title)
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <button onClick={onCLickFetchData}>データ取得</button>
      {todos.map((todo) => (
        // 型がないとエラーも無く気づけない
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
        // <Todo title={todo.title} userId={todo.userId} />
      ))}
    </div>
  );
}
