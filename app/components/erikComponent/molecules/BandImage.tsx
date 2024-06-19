import React from "react";
import ImageBox from "../atoms/ImageBox";

const BandImage: React.FC = () => {
  return (
    <div id="bandImage">
      <ImageBox
        id="bandLineUp"
        src="/Images/ritesband2.jpg"
        alt="Band Line Up"
        width={150}
        height={150}
      />
    </div>
  );
};

export default BandImage;
