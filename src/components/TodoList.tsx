import { FC, useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const TodoList: FC = () => {
  const { page, error, loading, todos, limit } = useTypedSelector(
    (state) => state.todo
  );
  // кастомный хук всесто стандартного useDispatch
  const { fetchTodos, setTodoPage } = useActions();

  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    // чтобы получить список дел передаем action creator fetchTodos
    fetchTodos(page, limit);
  }, [page]);

  // условия на верхнем уровне компоненты, не надо их никуда пихать
  if (loading) {
    return <h1>Идет загрузка</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} -- {todo.title}
        </div>
      ))}
      <div style={{ display: "flex" }}>
        {pages.map((p) => (
          <div
            onClick={() => setTodoPage(p)}
            style={{
              border: p === page ? "2px solid lightgreen" : "1px solid gray",
              padding: "10px",
            }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
