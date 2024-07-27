import React from "react";
import Sidebar from "../components/Sidebar";
import AudioPlayer from "../components/AudioPlayer";

const MainLayout = () => {
  return (
    <div className="w-screen h-screen flex flex-col p-4 gap-3">
      <Sidebar />
      <AudioPlayer />
    </div>
  );
};

export default MainLayout;
