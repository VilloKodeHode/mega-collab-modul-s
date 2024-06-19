import React from "react";
import ImageBox from "../atoms/ImageBox";

const Banner: React.FC = () => {
  return (
    <Banner id="Banner">
      <ImageBox
        src="/Images/ritesbanner.png"
        alt="Band banner with Sax, Drag and Rock'n'Roll tagline"
        width={500}
        height={150}
      />
    </Banner>
  );
};

export default Banner;
