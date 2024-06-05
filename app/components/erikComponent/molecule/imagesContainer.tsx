import React from "react";
import ImageBox from "../atom/imageBox";
// import AFArrows from "/../../../../public/erik/images/AFArrows.jpg";

const ImagesContainer: React.FC = () => {
  return (
    <div>
      <ImageBox
        imageURL="/../../../../public/erik/images/AFArrows.jpg"
        altText="Arrows"
        width={150}
        height={150}
      />
    </div>
  );
};

export default ImagesContainer;
