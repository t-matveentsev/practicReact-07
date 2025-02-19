import { useDispatch } from "react-redux";
import s from "./TodoList.module.css";
import { setFilter } from "../../redux/filter/filterSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.wrapperSearch}>
      <input
        onChange={(e) => dispatch(setFilter(e.target.value))}
        type="text"
        placeholder="search..."
      />
    </div>
  );
};

export default SearchBar;
