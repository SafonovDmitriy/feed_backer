import React from "react";
import NumberFormat from "react-number-format";
import { TextFieldWrapper } from "../TextFieldWrapper/index";

const PhoneField = ({ field, label, form }) => {
  return (
    <TextFieldWrapper
      label={label}
      name={field.name}
      errors={form.errors}
      touched={form.touched}
      submitCount={form.submitCount}
    >
      <NumberFormat {...field} format="(###) ###-##-##" type="tel" />
    </TextFieldWrapper>
  );
};
export default PhoneField;
