import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Modal } from "../../UI/Modal";
import { VALIDATION_MESSAGES_MAP } from "../../../constants";
import { FormForComment } from "./FormForComment";

const CreateNewReviewsModal = ({
  cities = [],
  regions = [],
  editFeedBack,
  onSubmitHandler,
  onClose = () => {},
  setSelectRegionHandler = () => {},
}) => {
  const createCommentSchema = Yup.object().shape({
    lastname: Yup.string().trim().required(VALIDATION_MESSAGES_MAP.required),
    firstname: Yup.string().trim().required(VALIDATION_MESSAGES_MAP.required),
    midname: Yup.string().trim().required(VALIDATION_MESSAGES_MAP.required),
    region: Yup.string(),
    city_id: Yup.string().required(VALIDATION_MESSAGES_MAP.required),
    phone: Yup.string()
      .trim()
      .length(15, VALIDATION_MESSAGES_MAP.length)
      .required(VALIDATION_MESSAGES_MAP.required),
    email: Yup.string()
      .trim()
      .email(VALIDATION_MESSAGES_MAP.invalidEmail)
      .required(VALIDATION_MESSAGES_MAP.required),
    comment: Yup.string().trim().required(VALIDATION_MESSAGES_MAP.required),
  });

  return (
    <Modal onClose={onClose} headerTitle="Новый отзыв">
      <Formik
        initialValues={
          editFeedBack || {
            lastname: "",
            firstname: "",
            midname: "",
            region: "",
            city_id: "",
            phone: "",
            email: "",
            comment: "",
          }
        }
        onSubmit={async (values) => {
          onSubmitHandler(values);
        }}
        validationSchema={createCommentSchema}
        validateOnChange={false}
      >
        {(props) => (
          <FormForComment
            {...props}
            regions={regions}
            cities={cities}
            setSelectRegionHandler={setSelectRegionHandler}
          />
        )}
      </Formik>
    </Modal>
  );
};

export default CreateNewReviewsModal;
