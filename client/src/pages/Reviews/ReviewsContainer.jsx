import React, { useState } from "react";
import { CreateNewReviewsModal } from "./CreateNewReviewsModal";
import Reviews from "./Reviews";

const ReviewsContainer = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const onOpenModalHandler = () => {
    setIsOpenModal(true);
  };
  const onCloseModalHandler = () => {
    setIsOpenModal(false);
  };
  return (
    <>
      {isOpenModal && <CreateNewReviewsModal onClose={onCloseModalHandler} />}
      <Reviews onOpenModalHandler={onOpenModalHandler} />
    </>
  );
};
export default ReviewsContainer;
