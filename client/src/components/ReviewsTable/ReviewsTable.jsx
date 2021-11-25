import React from "react";
import "./ReviewsTable.styles.scss";
import { ReviewsTableContent } from "./ReviewsTableContent";
import { ReviewsTableHeader } from "./ReviewsTableHeader";

const ReviewsTable = ({
  feedBackList,
  selectFeedBackId,
  selectFeedBackIDHandler,
}) => {
  return (
    <div className="reviewsTable">
      <ReviewsTableHeader />
      <ReviewsTableContent
        feedBackList={feedBackList}
        selectFeedBackId={selectFeedBackId}
        selectFeedBackIDHandler={selectFeedBackIDHandler}
      />
    </div>
  );
};
export default ReviewsTable;
