import { useRef, useState } from "react";
import type { Todo } from "../types/todo";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 0, text: "할일1", checked: false },
  ]);
  const lastId = useRef<number>(1);

  //할 일 추가
  const addTodo = (text: string) => {
    lastId.current += 1;
    const newTodo: Todo = {
      id: lastId.current,
      text: text,
      checked: false,
    };
    setTodos((todos) => [newTodo, ...todos]);
    console.log(todos);
  };
  return { todos, addTodo };
}
