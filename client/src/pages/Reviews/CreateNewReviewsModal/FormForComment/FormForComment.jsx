import { Field, Form } from "formik";
import React from "react";
import { Select } from "../../../../components/UI/Select";
import { TextField } from "../../../../components/UI/TextField";
import "./FormForComment.styles.scss";
const FormForComment = (props) => {
  return (
    <Form className="formForComment">
      <Field name="lastName" label="Фамилия" component={TextField} />
      <Field name="firstName" label="Имя" component={TextField} />
      <Field name="middleName" label="Отчество" component={TextField} />
      <Field
        as="select"
        name="region"
        label="Регион"
        component={Select}
        options={[]}
      />
      <Field
        as="select"
        name="city"
        label="Регион"
        component={Select}
        options={[]}
      />
      <Field
        name="phoneNumber"
        label="Контактный телефон"
        component={TextField}
      />
      <Field name="email" label="Email" component={TextField} />
      <Field name="commentary" label="Комментарий" component={TextField} />

      <button type="submit">Сохранить</button>
    </Form>
  );
};

export default FormForComment;
