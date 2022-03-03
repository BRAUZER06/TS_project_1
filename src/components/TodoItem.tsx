import { ITodo } from "../types/data";
interface ItodoItem extends ITodo {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<ItodoItem> = (props) => {
  const { id, title, complete, removeTodo, toggleTodo } = props;
  const g = () => {};
  return (
    <div>
      <input
        onChange={() => toggleTodo(id)}
        type="checkbox"
        checked={complete}
      />
      {title}
      <button onClick={() => removeTodo(id)}>x</button>
    </div>
  );
};
export { TodoItem };
