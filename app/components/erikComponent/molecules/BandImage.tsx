import React from "react";
import ImageBox from "../atoms/ImageBox";

const BandImage: React.FC = () => {
  return (
    <div id="bandImage">
      <ImageBox
        id="bandLineUp"
        src="/../../../public/images/pages/erik/ritesband.png"
        alt="Band Line Up"
        width={150}
        height={150}
      />
    </div>
  );
};

export default BandImage;
