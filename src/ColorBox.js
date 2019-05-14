import React from "react";

const ColorBox = props =>
  <div className="color-box" style={{ opacity: props.opacity }}>
    {props.opacity >= 0.2 ? <ColorBox opacity={props.opacity - 0.1} />
      : null}
  </div>

export default ColorBox;
