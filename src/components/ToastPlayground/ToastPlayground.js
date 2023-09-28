import React from "react";
import ToastForm from "../ToastForm";
import ToastShelf from "../ToastShelf";
import ToastProvider from "../ToastProvider";

import styles from "./ToastPlayground.module.css";

function ToastPlayground() {
  return (
    <ToastProvider>
      <div className={styles.wrapper}>
        <header>
          <img alt="Cute toast mascot" src="/toast.png" />
          <h1>Toast Playground</h1>
        </header>
        <ToastShelf />
        <ToastForm />
      </div>
    </ToastProvider>
  );
}

export default ToastPlayground;
