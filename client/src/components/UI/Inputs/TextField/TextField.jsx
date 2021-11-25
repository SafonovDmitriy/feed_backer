import React from "react";
import { TextFieldWrapper } from "../TextFieldWrapper";

const TextField = ({ field, label, form }) => {
  return (
    <TextFieldWrapper
      label={label}
      name={field.name}
      errors={form.errors}
      touched={form.touched}
      submitCount={form.submitCount}
    >
      <input {...field} />
    </TextFieldWrapper>
  );
};

export default TextField;
