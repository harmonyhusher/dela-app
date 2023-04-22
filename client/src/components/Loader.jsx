import React from "react";
import WidgetWrapper from "./WidgetWrapper";
import svg from "./svg.svg"

const Loader = () => {
  return (
    <WidgetWrapper sx={{display: "flex", justifyContent: "center"}}>
        <img src={svg}/>
    </WidgetWrapper>
  );
};

export default Loader;