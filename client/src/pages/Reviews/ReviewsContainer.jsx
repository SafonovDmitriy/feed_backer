import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFeedBackAction,
  fetchFeedBackAction,
  setLoadedFlagForFeedBackAction,
} from "../../redux/actions/feedbackActions";
import {
  feedbacksLoadedSelector,
  feedbacksSelector,
} from "../../redux/selectors";
import { CreateNewReviewsModal } from "../../components/Modals/CreateNewReviewsModal";
import Reviews from "./Reviews";

const ReviewsContainer = () => {
  const disptach = useDispatch();
  const isLoadedFeedBackList = useSelector(feedbacksLoadedSelector);
  const feedBackList = useSelector(feedbacksSelector);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectFeedBackId, setSelectFeedBackId] = useState(null);
  const [editFeedBack, setEditFeedBack] = useState(null);
  const onOpenModalHandler = () => {
    setIsOpenModal(true);
  };
  const onCloseModalHandler = () => {
    setIsOpenModal(false);
    if (!!editFeedBack) {
      setEditFeedBack(null);
      setSelectFeedBackId(null);
    }
  };
  const selectFeedBackIDHandler = (id) => {
    setSelectFeedBackId(id);
  };
  const changeSelectedFeedBackHandler = () => {
    if (selectFeedBackId) {
      const selectedFeedBack = feedBackList.find(
        (feedBack) => feedBack.feedback_id === selectFeedBackId
      );
      setEditFeedBack(selectedFeedBack);
      onOpenModalHandler();
    }
  };
  const deleteSelectFeedBackHandler = () => {
    if (selectFeedBackId) disptach(deleteFeedBackAction(selectFeedBackId));
  };
  useEffect(() => {
    disptach(fetchFeedBackAction());
    return () => {
      disptach(setLoadedFlagForFeedBackAction(false));
    };
  }, [disptach]);
  return isLoadedFeedBackList ? (
    <>
      {isOpenModal && (
        <CreateNewReviewsModal
          onClose={onCloseModalHandler}
          editFeedBack={editFeedBack}
        />
      )}
      <Reviews
        feedBackList={feedBackList}
        selectFeedBackId={selectFeedBackId}
        onOpenModalHandler={onOpenModalHandler}
        selectFeedBackIDHandler={selectFeedBackIDHandler}
        deleteSelectFeedBackHandler={deleteSelectFeedBackHandler}
        changeSelectedFeedBackHandler={changeSelectedFeedBackHandler}
      />
    </>
  ) : null;
};
export default ReviewsContainer;
