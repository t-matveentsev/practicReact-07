import { useEffect } from "react";
import AddForm from "./AddForm";
import List from "./List";
import SearchBar from "./SearchBar";
import s from "./TodoList.module.css";
import { fetchData } from "../../redux/operations";
import { useDispatch } from "react-redux";

const TodoList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className={s.todoWrapper}>
      <AddForm />
      <SearchBar />
      <List />
    </div>
  );
};

export default TodoList;
