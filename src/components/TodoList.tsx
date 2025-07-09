import type { Todo } from "../types/todo";

interface TodoListProps {
  todos: Todo[];
}

function TodoList({ todos }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <li>
          <input type="checkbox" checked={todo.checked}></input>
          {todo.text}
          <button>삭제</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
