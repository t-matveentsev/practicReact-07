import { useEffect } from "react";
import s from "./Modal.module.css";
const Modal = ({ children, closeModal }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);
  return (
    <div className={s.wrapper} onClick={handleBackdropClick}>
      <div className={s.content}>
        <>
          <h2>Field for created a new task</h2>
          <hr />
        </>
        <button onClick={closeModal} className={s.closeBtn}>
          x
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
