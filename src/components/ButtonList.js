import React from "react";
import Button from "./Button";

function ButtonList() {
  return (
    <div className="grid grid-flow-col">
      <Button name="All" /> <Button name="Movie" /> <Button name="Songs" />{" "}
      <Button name="Cricket" /> <Button name="Live" /> <Button name="Gaming" /><Button name="News" /><Button name="Cooking" />
    </div>
  );
}

export default ButtonList;
