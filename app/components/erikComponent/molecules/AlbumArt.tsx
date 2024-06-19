import React from "react";
import ImageBox from "../atoms/ImageBox";

const AlbumArt: React.FC = () => {
  return (
    <div id="albumArt" className="montserr">
      <p>Front:</p>
      <ImageBox
        className="albumImages"
        src="/../../../public/images/pages/erik/ritesalbum1.png"
        alt="Front of album"
        width={150}
        height={150}
      />
      <p>Back:</p>
      <ImageBox
        className="albumImages"
        src="/../../../public/images/pages/erik/ritesalbum2.png"
        alt="Back of album"
        width={150}
        height={150}
      />
    </div>
  );
};

export default AlbumArt;
