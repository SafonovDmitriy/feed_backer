import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCitiesAction } from "../../../redux/actions/cityActions";
import {
  postFeedBackAction,
  putFeedBackAction,
} from "../../../redux/actions/feedbackActions";
import {
  fetchRegionsAction,
  setLoadedFlagForRegionsAction,
} from "../../../redux/actions/regionActions";
import {
  citiesSelector,
  isEmptyRegionsSelector,
  regionsLoadedSelector,
  regionsSelector,
} from "../../../redux/selectors/index.js";
import CreateNewReviewsModal from "./CreateNewReviewsModal";
const CreateNewReviewsModalContainer = ({
  editFeedBack = null,
  onClose = () => {},
}) => {
  const dispatch = useDispatch();
  const isEditMode = !!editFeedBack;
  const regions = useSelector(regionsSelector);
  const isEmptyRegions = useSelector(isEmptyRegionsSelector);
  const cities = useSelector(citiesSelector);
  const regionLoaded = useSelector(regionsLoadedSelector);
  const [selectRegion, setSelectRegion] = useState(
    isEmptyRegions ? "" : regions[0]
  );
  const setSelectRegionHandler = (value) => {
    setSelectRegion(value);
  };

  const _editFeedBack = isEditMode
    ? {
        lastname: editFeedBack.feedback_lastname,
        firstname: editFeedBack.feedback_firstname,
        midname: editFeedBack.feedback_midname,
        region: editFeedBack.region_id,
        city_id: editFeedBack.city_id,
        phone: editFeedBack.feedback_phone,
        email: editFeedBack.feedback_email,
        comment: editFeedBack.feedback_comment,
      }
    : null;

  const onSubmitHandler = (form) => {
    let _form = {};
    for (const key in form) {
      if (form[key].length) _form = Object.assign(_form, { [key]: form[key] });
    }
    if (isEditMode) {
      dispatch(
        putFeedBackAction({ id: editFeedBack.feedback_id, body: _form })
      );
    } else {
      dispatch(postFeedBackAction(_form));
    }
    onClose();
  };

  useEffect(() => {
    dispatch(fetchRegionsAction());
    if (isEditMode) {
      setSelectRegionHandler(editFeedBack.region_id);
    }
    return () => {
      dispatch(setLoadedFlagForRegionsAction(false));
    };
  }, [dispatch]);

  useEffect(() => {
    if (selectRegion) dispatch(fetchCitiesAction(selectRegion));
  }, [selectRegion]);

  return (
    (regionLoaded || !isEmptyRegions) && (
      <CreateNewReviewsModal
        onClose={onClose}
        regions={regions}
        cities={cities}
        setSelectRegionHandler={setSelectRegionHandler}
        onSubmitHandler={onSubmitHandler}
        editFeedBack={_editFeedBack}
      />
    )
  );
};

export default CreateNewReviewsModalContainer;
