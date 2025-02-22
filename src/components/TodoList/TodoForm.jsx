import s from "./TodoList.module.css";
import { Field, Form, Formik } from "formik";

const TodoForm = ({ initialValues, handleSubmit }) => {
  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.formContainer}>
          <Field
            className={s.modalForm}
            name="todo"
            placeholder="your task, write here..."
          />
          <button className={s.modalBtn} type="submit">
            Add task
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default TodoForm;
