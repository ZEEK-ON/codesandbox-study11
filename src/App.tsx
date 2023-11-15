import axios from "axios";
import "./styles.css";
import { useState } from "react";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";

const user: User = {
  name: "イワシ",
  hobbies: ["映画", "ゲーム"],
};

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
      <UserProfile user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={onCLickFetchData}>データ取得</button>
      {todos.map((todo) => (
        // 型がないとエラーも無く気づけない
        <Todo
          // id={0}
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
