import React, { useEffect, useState } from "react";

const fetchAlbumData = async () => {
  try {
    const albumURL = "https://api.discogs.com/releases/28742893";
    const response = await fetch(albumURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("ERROR FETCHING ALBUM DATA:", error);
    return null;
  }
};

const Tracklist: React.FC = () => {
  const [albumData, setAlbumData] = useState<any>(null);

  useEffect(() => {
    const getAlbumData = async () => {
      const data = await fetchAlbumData();
      setAlbumData(data);
    };

    getAlbumData();
  }, []);

  if (!albumData) {
    return <div>Loading...</div>;
  }

  return (
    <div id="tracklist" className="league-black">
      <h2>Tracklist</h2>
      <ul className="league-black-sml">
        {albumData.tracklist.map((track) => (
          <li key={track.position}>
            <span className="track-number">{track.position}.</span>{" "}
            {track.title}{" "}
            <span className="track-length">({track.duration})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tracklist;
