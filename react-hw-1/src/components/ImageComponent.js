import React from "react";
import image from "../assets/image.png";

function ImageComponent() {
  return (
    <div>
      <img width={100} src={image} alt="Description" />
    </div>
  );
}

export default ImageComponent;
