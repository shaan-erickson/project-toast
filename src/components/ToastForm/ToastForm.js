import React from "react";
import Button from "../Button";
import { ToastContext } from "../ToastProvider";
import styles from "../ToastPlayground/ToastPlayground.module.css";

function ToastForm({ options = ["notice", "warning"] }) {
  const { setToastList } = React.useContext(ToastContext);
  const [message, setMessage] = React.useState("");
  const [selectedVariant, setSelectedVariant] = React.useState(options[0]);
  const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
  function handleSubmit() {
    setToastList((current) => [
      ...current,
      { message: message, variant: selectedVariant, id: Math.random() },
    ]);
  }
  return (
    <div className={styles.controlsWrapper}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
          setMessage("");
          setSelectedVariant(VARIANT_OPTIONS[0]);
        }}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              onChange={(event) => {
                const newMessage = event.target.value;
                setMessage(newMessage);
              }}
              value={message}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => (
              <label htmlFor={`variant-${option}`} key={`label-${option}`}>
                <input
                  id={`variant-${option}`}
                  key={option}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={selectedVariant === option}
                  onChange={(event) => {
                    setSelectedVariant(event.target.value);
                  }}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastForm;
