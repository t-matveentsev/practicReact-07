import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import s from "./TodoList.module.css";
import { useState } from "react";
import Modal from "../Modal/Modal";
import TodoForm from "./TodoForm";
import { editTodo } from "../../redux/operations";
import { selectVisibilityTaskByStatusMemo } from "../../redux/selectors";

const List = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState();

  const dispatch = useDispatch();
  const todos = useSelector(selectVisibilityTaskByStatusMemo);

  return (
    <ul className={s.list}>
      {todos.map((item) => (
        <Item
          {...item}
          key={item.id}
          edit={() => {
            setIsOpen(true);
            setItem(item);
          }}
        />
      ))}
      {isOpen && (
        <Modal>
          <TodoForm
            text="Edit right now!"
            initialValues={item}
            handleSubmit={(values) => {
              dispatch(editTodo({ ...item, ...values }));
              setIsOpen(false);
            }}
          />
        </Modal>
      )}
    </ul>
  );
};

export default List;
