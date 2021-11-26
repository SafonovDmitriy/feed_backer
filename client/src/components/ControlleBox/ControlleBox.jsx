import React from "react";
import { Button } from "../UI/Button";
import "./ControlleBox.styles.scss";
const ControlleBox = ({
  onOpenModalHandler = () => {},
  isShowExtraButtons = false,
  deleteHandler = () => {},
  changeHandler = () => {},
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
export default ControlleBox;
