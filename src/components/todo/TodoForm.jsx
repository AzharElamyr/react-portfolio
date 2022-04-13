import { useState } from "react";
import "./TodoForm.css";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();
    addTodo({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div className="ToDoForm">
      <h1 className="text-light mb-4">Add a To do</h1>

      <form onSubmit={handleSubmission}>
        <span className="spanText">Title</span> <br />
        <input
            className="mb-3"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <span className="spanText">Content</span><br />
        <textarea
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <button className="my-4 btn btn-outline-dark btn-sm px-4" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
