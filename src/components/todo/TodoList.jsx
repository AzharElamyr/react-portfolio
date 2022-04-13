
import "./TodoList.css";

const TodoList = ({ deleteTodo,todos }) => {
   
    const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, index) => {
        return (
          <ul key={index}>
            <li className=" d-flex todoitem">
                <div className="text text-dark">
                    <p><span className="spanText">Title : </span> {todo.title}</p>
                    <p><span className="spanText">Content : </span> {todo.content}</p>
                    <button className="btn btn-outline-dark" onClick={()=> {
                        deleteTodo(index)
                    }}>X</button>
                </div>
            </li>
          </ul>
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );

  return (
    <div className="text-left mt-3 todolist">
      <h1 className="mx-5 text-light">Todos List</h1>
      {todosList}
    </div>
  );
};

export default TodoList;
