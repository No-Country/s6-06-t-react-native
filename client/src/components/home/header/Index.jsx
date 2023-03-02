import React from "react";
import NavMenu from "./NavMenu";
import InfoComunity from "./InfoComunity";

const Index = ({ navigation, Channel }) => {
  return (
    <>
      <NavMenu />
      <InfoComunity Channel={Channel} />
    </>
  );
};

export default Index;
