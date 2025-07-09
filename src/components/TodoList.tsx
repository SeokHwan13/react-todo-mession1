import type { Todo } from "../types/todo";

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

function TodoList({ todos, onDelete, onToggle }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <li>
          <input
            type="checkbox"
            checked={todo.checked}
            onChange={() => onToggle(todo.id)}
          ></input>
          {todo.text}
          <button onClick={() => onDelete(todo.id)}>삭제</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
