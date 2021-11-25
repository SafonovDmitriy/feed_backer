import React from "react";
import "./TextFieldWrapper.styles.scss";
const TextFieldWrapper = ({
  label,
  errors,
  children,
  name,
  touched,
  submitCount,
}) => {
  const error = errors[name];
  const isTouch = !!touched[name];
  const isShowError = !!error && (isTouch || submitCount > 0);

  return (
    <div className={`textField_wrapper ${isShowError && "errorInput"}`}>
      <label children={label} />
      {children}
      {isShowError && <span className="error">{error}</span>}
    </div>
  );
};
export default TextFieldWrapper;
