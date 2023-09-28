import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider";
import useEscapeKey from "../../hooks/UseEscapeKey";

function ToastShelf() {
  const { toastList, setToastList } = React.useContext(ToastContext);
  useEscapeKey(() => {
    setToastList([]);
  });
  function handleRemove(id) {
    const newToastList = toastList.filter((toast) => toast.id !== id);
    setToastList(newToastList);
  }
  return (
    toastList &&
    toastList.length > 0 && (
      <ol className={styles.wrapper}>
        {toastList.map(({ variant, message, id }) => (
          <li key={id} className={styles.toastWrapper}>
            <Toast
              handleRemove={handleRemove}
              selectedVariant={variant}
              id={id}
            >
              {message}
            </Toast>
          </li>
        ))}
      </ol>
    )
  );
}

export default ToastShelf;
