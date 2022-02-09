import React, {  } from "react";
import Banner from "containers/Banner";
import Competitions from "containers/Competitions";
import Events from "containers/Events";
import MainWrapper from "./_main_wrapper";

const Main = () => {
  return (
    <MainWrapper hideAuth={false}>
      <Banner />
      <Competitions />
      <Events />
    </MainWrapper>
  );
};
export default Main;
