import React from "react";
import loadingImage from "../assets/images/loading.gif";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <img src={loadingImage} alt="Loading" />
    </div>
  );
};

export default Loading;
