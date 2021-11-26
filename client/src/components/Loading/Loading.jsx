import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./Loading.styles.scss";
const Loading = () => (
  <div className="spinner_wrapper">
    <ClipLoader loading={true} size={150} />
  </div>
);
export default Loading;
