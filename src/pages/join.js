import React from "react";
import JoinFlow from "containers/JoinFlow";
import MainWrapper from "./_main_wrapper";

const Main = () => {
  return (
    <MainWrapper hideAuth>
      <JoinFlow />
    </MainWrapper>
  );
};
export default Main;
