import React from "react";
import "./Reviews.styles.scss";
import { ReviewsTable } from "../../components/ReviewsTable";
import { СhangeBox } from "../../components/СhangeBox";
const Reviews = ({
  feedBackList,
  selectFeedBackId,
  onOpenModalHandler,
  selectFeedBackIDHandler,
  deleteSelectFeedBackHandler,
  changeSelectedFeedBackHandler,
}) => {
  return (
    <div className="reviews">
      <СhangeBox
        onOpenModalHandler={onOpenModalHandler}
        isShowExtraButtons={!!selectFeedBackId}
        changeHandler={changeSelectedFeedBackHandler}
        deleteHandler={deleteSelectFeedBackHandler}
      />
      <ReviewsTable
        feedBackList={feedBackList}
        selectFeedBackId={selectFeedBackId}
        selectFeedBackIDHandler={selectFeedBackIDHandler}
      />
    </div>
  );
};

export default Reviews;
