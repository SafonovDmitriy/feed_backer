import React from "react";
import { Button } from "../../components/UI/Button";
import "./Reviews.styles.scss";

const Reviews = ({ onOpenModalHandler }) => {
  return (
    <div className="reviews">
      <div className="changeBox">
        <Button type="add" children="Добавить" onClick={onOpenModalHandler} />
        <Button type="del" children="Удалить" />
      </div>
      <div className="reviewsTable"></div>
    </div>
  );
};

export default Reviews;
