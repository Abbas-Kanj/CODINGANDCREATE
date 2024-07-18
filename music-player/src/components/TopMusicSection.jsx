import React from "react";
import image from "../assets/cardib.png";
const TopMusicSection = () => {
  return (
    <section className="flex flex-col gap-4 mt-5">
      <h1 className="font-extrabold text-lg">Top Music</h1>
      <div className="flex gap-6">
        <div className="flex flex-col text-start gap-1">
          <img
            src={image}
            alt="Song Image"
            className="w-56 h-auto object-cover rounded-2xl shadow-xl"
          />
          <h2 className="font-semibold">Invation of privacy</h2>
          <small>Cardi B.</small>
        </div>
        <div className="flex flex-col text-start gap-1">
          <img
            src={image}
            alt="Song Image"
            className="w-56 h-auto object-cover rounded-2xl shadow-xl"
          />
          <h2 className="font-semibold">Invation of privacy</h2>
          <small>Cardi B.</small>
        </div>
        <div className="flex flex-col text-start gap-1">
          <img
            src={image}
            alt="Song Image"
            className="w-56 h-auto object-cover rounded-2xl shadow-xl"
          />
          <h2 className="font-semibold">Invation of privacy</h2>
          <small>Cardi B.</small>
        </div>
        <div className="flex flex-col text-start gap-1">
          <img
            src={image}
            alt="Song Image"
            className="w-56 h-auto object-cover rounded-2xl shadow-xl"
          />
          <h2 className="font-semibold">Invation of privacy</h2>
          <small>Cardi B.</small>
        </div>
      </div>
    </section>
  );
};

export default TopMusicSection;
