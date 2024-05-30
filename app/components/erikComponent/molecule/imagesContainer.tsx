import React from "react";
import ImageBox from "../atom/imageBox";

const ImagesContainer: React.FC = () => {
  return (
    <div>
      <ImageBox
        imageURL="../Images/AFArrows.jpg"
        altText="AntifaArrows"
        width={150}
        height={150}
      />
    </div>
  );
};

export default ImagesContainer;
