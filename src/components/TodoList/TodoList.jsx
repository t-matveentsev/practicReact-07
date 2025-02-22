import { useEffect, useState } from "react";
import List from "./List";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import s from "./TodoList.module.css";
import { addTodo, fetchData } from "../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectUncompletedTodosMemo } from "../../redux/selectors";
import Modal from "../Modal/Modal";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const uncompletedTodos = useSelector(selectUncompletedTodosMemo);
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
      <button onClick={() => setIsOpen(true)}>Add new task</button>
      {/* <AddForm /> */}
      <SearchBar />
      <Filter />
      <h2>Uncompleted todos: {uncompletedTodos}</h2>
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
