import React from "react";
import { Button } from "../UI/Button";
import "./СhangeBox.styles.scss";
const СhangeBox = ({
  onOpenModalHandler,
  isShowExtraButtons,
  deleteHandler,
  changeHandler,
}) => {
  return (
    <div className="changeBox">
      <Button
        typeStyles="addWithIco"
        children="Добавить"
        onClick={onOpenModalHandler}
      />
      {!!isShowExtraButtons && (
        <>
          <Button
            typeStyles="add"
            children="Изменить"
            onClick={changeHandler}
          />
          <Button
            typeStyles="delWithIco"
            children="Удалить"
            onClick={deleteHandler}
          />
        </>
      )}
    </div>
  );
};
export default СhangeBox;
