import React from "react";
import ImageBox from "../atom/ImageBox";

const ImagesContainer: React.FC = () => {
  return (
    <div>
      <ImageBox
        imageURL="/pages/erik/Emma-bush.jpeg"
        altText="Arrows"
        width={150}
        height={150}
      />
    </div>
  );
};

export default ImagesContainer;
