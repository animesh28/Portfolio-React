import React from "react";
import Work from "./Work";
import WorkMobile from "./WorkMobile";

function WorkRespPage() {
  const mq = window.matchMedia("(max-width: 50em)").matches;
  return mq ? <WorkMobile /> : <Work />;
}

export default WorkRespPage;
