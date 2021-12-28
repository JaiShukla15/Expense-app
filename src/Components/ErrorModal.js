import React from "react";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
const ErrroModal = (props) => {
  const hideModal = () => {
    props.hide(true);
  };
  return (
    <div className={styles.error_modal_wrapper}>
      <div>{props.message}</div>
      <Button
        type="button"
        text="Got it"
        className={styles.add_btn}
        clickHandler={hideModal}
      />
    </div>
  );
};
export default ErrroModal;
