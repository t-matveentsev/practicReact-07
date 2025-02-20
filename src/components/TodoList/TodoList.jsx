import { useEffect, useState } from "react";
import List from "./List";
import SearchBar from "./SearchBar";
import s from "./TodoList.module.css";
import { addTodo, fetchData } from "../../redux/operations";
import { useDispatch } from "react-redux";
import Modal from "../Modal/Modal";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = (values, options) => {
    dispatch(addTodo(values));
    setIsOpen(false);
    options.resetForm();
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className={s.todoWrapper}>
      <button onClick={() => setIsOpen(true)}>Add</button>
      {/* <AddForm /> */}
      <SearchBar />
      <List />
      {isOpen && (
        <Modal>
          <TodoForm handleSubmit={handleSubmit} initialValues={{ todo: "" }} />
        </Modal>
      )}
    </div>
  );
};

export default TodoList;
