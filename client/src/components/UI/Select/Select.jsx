import React from "react";
import { TextFieldWrapper } from "../Inputs/TextFieldWrapper";
import "./Select.styles.scss";
const Select = ({
  label = "",
  options = [],
  field = { onChange: () => {} },
  handler = () => {},
  defaultPlaceholder,
  disabled,
  form,
  ...props
}) => {
  const { onChange, ..._field } = field;
  const onChangeHandler = (e) => {
    onChange(e);
    handler(e.target.value);
  };
  return (
    <TextFieldWrapper
      label={label}
      name={field.name}
      errors={form.errors}
      touched={form.touched}
      submitCount={form.submitCount}
    >
      <select
        disabled={disabled}
        className={!_field?.value?.length ? "select select_disabled" : "select"}
        {..._field}
        onChange={onChangeHandler}
      >
        {defaultPlaceholder && (
          <option value="" disabled children={defaultPlaceholder} />
        )}
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </TextFieldWrapper>
  );
};

export default Select;
