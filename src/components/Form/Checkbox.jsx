import React, { useRef, useEffect } from "react";
import { useField } from "@unform/core";
import style from "./style.module.scss";

const Checkbox = ({ name, label, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);
  return (
    <div className={style.checkboxContainer}>
      <input
        type="checkbox"
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {label && <label htmlFor={fieldName}>{label}</label>}
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default Checkbox;
