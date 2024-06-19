import React from "react";
import AlbumArt from "../molecules/AlbumArt";
import AlbumDetails from "../molecules/AlbumDetails";
import Tracklist from "../molecules/TrackList";
import BandImage from "../molecules/BandImage";

const AlbumInfo: React.FC = () => {
  return (
    <div className="albumInfo">
      <AlbumArt />
      <div id="albumOverview">
        <AlbumDetails />
      </div>
      <Tracklist />
      <BandImage />
    </div>
  );
};

export default AlbumInfo;
