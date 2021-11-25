import React from "react";
import { TextFieldWrapper } from "../TextFieldWrapper/index";

const Textarea = ({ field, label, form }) => {
  return (
    <TextFieldWrapper
      label={label}
      name={field.name}
      errors={form.errors}
      touched={form.touched}
      submitCount={form.submitCount}
    >
      <textarea {...field} />
    </TextFieldWrapper>
  );
};

export default Textarea;
