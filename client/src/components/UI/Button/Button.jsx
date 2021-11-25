import clsx from "clsx";
import React from "react";
import "./Button.styles.scss";
const Button = ({
  classes = [],
  children,
  typeStyles = "default",
  ...props
}) => {
  const TYPE_BUTTONS_MAP = {
    add: {
      classes: ["btn_add"],
      prevSymbol: null,
    },
    addWithIco: {
      classes: ["btn_add"],
      prevSymbol: "0xFF0B",
    },

    del: {
      classes: ["btn_del"],
      prevSymbol: null,
    },
    delWithIco: {
      classes: ["btn_del"],
      prevSymbol: "0x2212",
    },
    close: {
      classes: [],
      prevSymbol: "0x2A2F",
    },
    default: {
      classes: [],
      prevSymbol: "",
    },
  };

  return TYPE_BUTTONS_MAP[typeStyles] ? (
    <button
      className={clsx(
        ...classes,
        "btn",
        ...TYPE_BUTTONS_MAP[typeStyles].classes
      )}
      {...props}
    >
      {TYPE_BUTTONS_MAP[typeStyles].prevSymbol && (
        <span className={!classes ? "btn_prevSymbol" : ""}>
          {String.fromCharCode(TYPE_BUTTONS_MAP[typeStyles].prevSymbol)}
        </span>
      )}
      {children}
    </button>
  ) : null;
};
export default Button;
