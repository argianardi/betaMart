import React from "react";
import loadingImage from "../assets/images/loading.gif";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img src={loadingImage} alt="Loading" />
    </div>
  );
};

export default Loading;
