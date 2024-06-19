import React from "react";
import AlbumInfo from "../components/erikComponent/organisms/AlbumInfo";
import Banner from "../components/erikComponent/organisms/Banner";

const HomePage: React.FC = () => {
  return (
    <div>
      <Banner />
      <AlbumInfo />
    </div>
  );
};

export default HomePage;
