import { useSelector } from "react-redux";
import Item from "./Item";
import s from "./TodoList.module.css";

const List = () => {
  const todos = useSelector((state) => state.todos.item);
  const filter = useSelector((state) => state.filter.filter);

  const filterData = todos.filter((item) =>
    item.todo.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={s.list}>
      {filterData.map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </ul>
  );
};

export default List;
