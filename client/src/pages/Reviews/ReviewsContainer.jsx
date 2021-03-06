import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../components/Loading";
import { CreateNewReviewsModal } from "../../components/Modals/CreateNewReviewsModal";
import {
  deleteFeedBackAction,
  fetchFeedBackAction,
  setLoadedFlagForFeedBackAction,
} from "../../redux/actions/feedbackActions";
import {
  feedbacksLoadedSelector,
  feedbacksSelector,
} from "../../redux/selectors";
import Reviews from "./Reviews";

const ReviewsContainer = () => {
  const disptach = useDispatch();
  const isLoadedFeedBackList = useSelector(feedbacksLoadedSelector);
  const feedBackList = useSelector(feedbacksSelector);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectFeedBackId, setSelectFeedBackId] = useState(null);
  const [editFeedBack, setEditFeedBack] = useState(null);

  const isShowContent = isLoadedFeedBackList || !!feedBackList.length;
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
  return isShowContent ? (
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
  ) : (
    <Loading />
  );
};
export default ReviewsContainer;
