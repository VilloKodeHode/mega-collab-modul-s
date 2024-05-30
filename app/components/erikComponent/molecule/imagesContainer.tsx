import React from "react";
import ImageBox from "../atom/imageBox";
import AFArrows from "../Images/AFArrows.jpg";

const ImagesContainer: React.FC = () => {
  return (
    <div>
      <ImageBox
        imageURL="AFArrows"
        altText="Antifa Arrows - No Racists Allowed!"
        width={150}
        height={150}
      />
    </div>
  );
};

export default ImagesContainer;
