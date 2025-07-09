import { useState, type FormEvent } from "react";

interface AddTodoProps {
  onAdd: (text: string) => void;
}

function AddTodo({ onAdd }: AddTodoProps) {
  const [text, setText] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button className="add-btn" type="submit">
        추가!
      </button>
    </form>
  );
}

export default AddTodo;
