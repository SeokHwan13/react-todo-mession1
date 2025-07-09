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

  //할 일 삭제
  const removeTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  //완료 체크
  const checkTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return { todos, addTodo, removeTodo, checkTodo };
}
