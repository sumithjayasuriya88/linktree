import React from "react";
import StyleEditButtons from "./StyleEditButtons";
import "./StyleHeadlineBlock.css";

function StyleHeadlineBlock({ headlineType ,text}) {
  return (
    <div className="styleHeadlineBlock">
      {headlineType == "h1" && <h1>{text}</h1>}

      {headlineType == "h2" && <h2>{text}</h2>}
      {headlineType == "h3" && <h3>{text}</h3>}

      <StyleEditButtons />
    </div>
  );
}

export default StyleHeadlineBlock;
