import axios, { AxiosResponse } from "axios";
type Todo = {
  id: number;
  title: string;
  completed: boolean;
};
interface Todo1 {
  id: number;
  title: string;
  completed: boolean;
}

axios("https://jsonplaceholder.typicode.com/todos/1", { method: "GET" }).then((response: AxiosResponse) => {
  //   const { id, title, completed: finished }: Todo | Todo1 = response.data;
  const { id, title, completed: finished } = <Todo>response.data;
  console.log(logTodo(id, title, finished));
});

const logTodo = (id: number, title: string, completed: boolean): string => {
  return `finished: ${completed}    title: ${title}   id : ${id}`;
};
