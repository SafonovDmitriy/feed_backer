import React from "react";

const FeedBackItem = ({
  feedBack,
  selectFeedBackId,
  selectFeedBackIDHandler,
}) => (
  <div
    className={`row ${
      selectFeedBackId === feedBack.feedback_id
        ? "reviewsTable_content_selectFeedBack"
        : ""
    }`}
    onClick={() => selectFeedBackIDHandler(feedBack.feedback_id)}
  >
    <span className="cell id">{feedBack.feedback_id}</span>
    <div className="cell box">
      <span className="lastname">{feedBack.feedback_lastname}</span>
      <span>{`${feedBack.feedback_firstname} ${feedBack.feedback_midname}`}</span>
      <span className="address">{`${feedBack.region_name},${feedBack.city_name}`}</span>
    </div>
    <span className="cell">{feedBack.feedback_phone}</span>
    <span className="cell">{feedBack.feedback_email}</span>
    <span className="cell comment">{feedBack.feedback_comment}</span>
  </div>
);
export default FeedBackItem;
