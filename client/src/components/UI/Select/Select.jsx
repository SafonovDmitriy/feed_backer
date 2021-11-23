import React from "react";

const Select = ({ label, options, ...props }) => {
  console.log(`props`, props);
  return (
    <>
      <label children={label} />
      <select></select>
    </>
  );
};

export default Select;
