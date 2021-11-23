import React from "react";

const TextField = ({ field, label, ...props }) => {
  console.log(`props`, props);
  return (
    <>
      <label children={label} />
      <input {...field} />
    </>
  );
};

export default TextField;
