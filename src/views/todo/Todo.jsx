import TodoForm from "../../components/todo/TodoForm";
import TodoList from "../../components/todo/TodoList";
import './Todo.css';
import {add_todo, remove_todo} from '../../redux/index'
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

function Todo() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const addTodo = (task) => {
    dispatch(add_todo(task));
  };

  const deleteTodo = (index) => {
    dispatch(remove_todo(index));
  }

  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Todo;
