import React from "react";

export default function Alert(props) {
  props.alert && console.log(props.alert.msg);

  const capitalized = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.msgtype} alert-dismissible fade show`}
        role="alert"
      >
        <strong> {props.alert.msgtype}</strong> : {capitalized(props.alert.msg)}
      </div>
    )
  );
}
