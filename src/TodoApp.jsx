import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis";

export const TodoApp = () => {
  const [todoId, settodoId] = useState(1);
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const prevTodo = () => {
    if (todoId === 1) return;
    settodoId(todoId - 1);
  };

  const nextTodo = () => {
    settodoId(todoId + 1);
  };

  return (
    <>
      <h2>Todos - RTK Query</h2>
      <hr />
      <h4>isLoading... {isLoading ? "true" : "false"}</h4>

      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={prevTodo}>Prev Todo</button>

      <button onClick={nextTodo}>Next Todo</button>

      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong> {todo.completed ? "✅" : "❌"} </strong>
            {todo.title}
          </li>
        ))}
      </ul> */}
    </>
  );
};
