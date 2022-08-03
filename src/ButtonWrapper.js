import React from "react";

export default function ButtonWrapper({ title, ...props }) {
  return <button {...props}>{title}</button>;
}
