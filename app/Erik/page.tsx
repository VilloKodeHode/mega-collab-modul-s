import React from "react";
import AlbumInfo from "../ErikComponent/organisms/AlbumInfo";
import Banner from "../ErikComponent/organisms/Banner";

const HomePage: React.FC = () => {
  return (
    <div>
      <Banner />
      <AlbumInfo />
    </div>
  );
};

export default HomePage;
