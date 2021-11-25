import React from "react";
import { Button } from "../Button";
import "./Modal.styles.scss";
const Modal = ({ children, headerTitle, onClose, ...props }) => {
  return (
    <div className="modal">
      <div className="modal_children">
        <div className="modal_children_header">
          {headerTitle}
          <Button
            typeStyles="close"
            classes={["modal_children_header_btn"]}
            onClick={onClose}
          />
        </div>
        <div className="modal_children_content" children={children} />
      </div>
    </div>
  );
};

export default Modal;
