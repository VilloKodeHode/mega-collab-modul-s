import React from "react";
import ImageBox from "../atom/imageBox";

const ImagesContainer: React.FC = () => {
  return (
    <div>
      <ImageBox
        imageURL="../Images/AFArrows.jpg"
        altText="Antifa Arrows - No Racists Allowed!"
        width={150}
        height={150}
      />
    </div>
  );
};

export default ImagesContainer;
