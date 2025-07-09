import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";

function App() {
  const { todos, addTodo, checkTodo, removeTodo } = useTodos();

  return (
    <div className="container">
      <h1>Todo List</h1>
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} onDelete={removeTodo} onToggle={checkTodo} />
    </div>
  );
}

export default App;
