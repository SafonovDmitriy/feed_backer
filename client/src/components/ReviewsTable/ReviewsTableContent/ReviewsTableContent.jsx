import React from "react";
import { FeedBackItem } from "./FeedBackItem";

const ReviewsTableContent = ({
  feedBackList,
  selectFeedBackId,
  selectFeedBackIDHandler,
}) => (
  <div className="reviewsTable_content">
    {feedBackList.length ? (
      feedBackList.map((feedBack) => (
        <React.Fragment key={feedBack.feedback_id}>
          <FeedBackItem
            feedBack={feedBack}
            selectFeedBackIDHandler={selectFeedBackIDHandler}
            selectFeedBackId={selectFeedBackId}
          />
        </React.Fragment>
      ))
    ) : (
      <h4 children="Записей нет" />
    )}
  </div>
);
export default ReviewsTableContent;
