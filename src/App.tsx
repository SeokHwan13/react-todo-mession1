import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";

function App() {
  const { todos, addTodo, checkTodo, removeTodo } = useTodos();

  return (
    <>
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} onDelete={removeTodo} onToggle={checkTodo} />
    </>
  );
}

export default App;
