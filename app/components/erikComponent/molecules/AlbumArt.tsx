import React from "react";
import ImageBox from "../atoms/ImageBox";

const AlbumArt: React.FC = () => {
  return (
    <div id="albumArt" className="montserr">
      <p>Front:</p>
      <ImageBox
        className="albumImages"
        src="/Images/ritesalbum1.jpg"
        alt="Front of album"
        width={150}
        height={150}
      />
      <p>Back:</p>
      <ImageBox
        className="albumImages"
        src="/Images/ritesalbum2.jpg"
        alt="Back of album"
        width={150}
        height={150}
      />
    </div>
  );
};

export default AlbumArt;
