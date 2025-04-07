import React from "react";
import ItemContainer from "./ItemContainer";
function BackgroundImg() {
  return (
    <div className="relative h-screen bg-[url(/wallhaven-x13lxo_1920x1080.png)] bg-center bg-cover bg-no-repeat">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-66"></div>
      
    </div>
  );
}

export default BackgroundImg;
