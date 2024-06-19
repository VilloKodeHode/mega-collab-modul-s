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

const fetchLabelLinks = async (albumData) => {
  try {
    const labelLinksData = await fetch(albumData.labels[0].resource_url);
    const data = await labelLinksData.json();
    albumData.labelLink = data.uri;
  } catch (error) {
    console.error("ERROR FETCHING LABEL DATA:", error);
    albumData.labelLink = null;
  }
};

const AlbumDetails: React.FC = () => {
  const [albumData, setAlbumData] = useState<any>(null);

  useEffect(() => {
    const displayAlbumInfo = async () => {
      const albumData = await fetchAlbumData();
      if (!albumData) return;

      await fetchLabelLinks(albumData);
      setAlbumData(albumData);
    };

    displayAlbumInfo();
  }, []);

  if (!albumData) {
    return <div>Loading...</div>;
  }

  const labelLinks = albumData.labelLink ? (
    <a
      className="league-blue"
      href={albumData.labelLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      {albumData.labels[0].name}
    </a>
  ) : (
    albumData.labels[0].name
  );

  return (
    <div id="albumDetails" className="league-black">
      <h2 className="league-blue-lrg">
        <strong>Album Name:</strong>{" "}
        <a
          className="league-blue-lrg"
          href={albumData.uri}
          target="_blank"
          rel="noopener noreferrer"
        >
          {albumData.title}
        </a>
      </h2>
      <p>
        <strong>Year:</strong> {albumData.year}
      </p>
      <p>
        <strong>Label:</strong> {labelLinks}
      </p>
    </div>
  );
};

export default AlbumDetails;
