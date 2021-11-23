import { Formik } from "formik";
import React from "react";
import { Modal } from "../../../components/UI/Modal";
import { FormForComment } from "./FormForComment";

const CreateNewReviewsModal = (props) => {
  return (
    <Modal {...props} headerTitle="Новый отзыв">
      <Formik
        initialValues={{
          lastName: "",
          firstName: "",
          middleName: "",
          region: "",
          city: "",
          phoneNumber: "",
          email: "",
          commentary: "",
        }}
        onSubmit={async (values) => {
          console.log(`values`, values);
        }}
      >
        {(props) => <FormForComment {...props} />}
      </Formik>
    </Modal>
  );
};

export default CreateNewReviewsModal;
