import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../api/todoService";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTodos()
      .then((response) => {
        setTodos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching todos", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading todos...</p>;

  return (
    <div>
      <h2>Todo List</h2>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>
              {todo.title} —{" "}
              {todo.completed ? "Completed" : "Pending"}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
