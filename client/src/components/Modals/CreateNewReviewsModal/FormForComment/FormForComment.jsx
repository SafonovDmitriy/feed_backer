import { Field, Form } from "formik";
import React from "react";
import { Button } from "../../../UI/Button";
import { PhoneField } from "../../../UI/Inputs/PhoneField";

import { Textarea } from "../../../UI/Inputs/Textarea";
import { TextField } from "../../../UI/Inputs/TextField";

import { Select } from "../../../UI/Select";
import "./FormForComment.styles.scss";
const FormForComment = ({ regions, cities, setSelectRegionHandler }) => {
  return (
    <Form className="formForComment">
      <Field name="lastname" label="Фамилия" component={TextField} />
      <Field name="firstname" label="Имя" component={TextField} />
      <Field name="midname" label="Отчество" component={TextField} />
      <Field
        as="select"
        name="region"
        label="Регион"
        component={Select}
        options={regions}
        handler={setSelectRegionHandler}
        defaultPlaceholder="Выберете регион"
      />
      <Field
        as="select"
        name="city_id"
        label="Город"
        component={Select}
        disabled={!cities.length}
        options={cities}
        defaultPlaceholder="Выберете город"
      />
      <Field name="phone" label="Контактный телефон" component={PhoneField} />
      <Field name="email" label="Email" component={TextField} />
      <Field name="comment" label="Комментарий" component={Textarea} />
      <div className="submitBox">
        <Button
          typeStyles="add"
          type="submit"
          classes={["formForComment_submit_btn"]}
          children="Сохранить"
        />
      </div>
    </Form>
  );
};

export default FormForComment;
