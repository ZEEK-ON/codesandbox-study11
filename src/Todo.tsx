import { TodoType } from "./types/todo";

// type TodoType = {
//   userId: number;
//   title: string;
//   // ?で必須じゃないと明示的にできる
//   completed?: boolean;
// };

// export const Todo = (props: { title: any; userid: any; completed: any; }) => {
// export const Todo = (props: TodoType) => {
export const Todo = (
  // props: Pick<TodoType, "userId" | "title" | "completed">,
  props: Omit<TodoType, "id">,
) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
