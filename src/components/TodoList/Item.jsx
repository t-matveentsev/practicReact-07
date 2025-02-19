import { FaStar } from "react-icons/fa";
import s from "./TodoList.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteTodo, editTodo } from "../../redux/operations";

const Item = ({ completed, todo, id, isFavorite }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(todo);
  return (
    <li className={s.item}>
      <div>
        {editMode ? (
          <div>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={() => {
                dispatch(editTodo({ id, completed, todo: value }));
                setEditMode(false);
              }}
            />
          </div>
        ) : (
          <p onClick={() => setEditMode(true)}>
            {isFavorite && <FaStar color="gold" />}
            {todo}
            {""}
          </p>
        )}
      </div>
      <div>
        <button>{isFavorite ? "Dislike" : "Like"}</button>
        <button onClick={() => setEditMode(true)}>Edit</button>
        <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
      </div>
    </li>
  );
};

export default Item;
