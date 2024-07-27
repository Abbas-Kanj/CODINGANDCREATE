import React from "react";
import image from "../assets/images/cardib.png";
import { MdPlayArrow } from "react-icons/md";
import audio1 from "../assets/audio/NEFFEX - Badass [Lyric Video].m4a";
import audio2 from "../assets/audio/AsYouFadeAway.mp3";
import { useDispatch } from "react-redux";
import { setCurrentTrack } from "../features/track/trackSlice";
const MusicCard = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex flex-col text-start gap-1 group relative">
        <img
          src={image}
          alt="Song Image"
          className="w-56 h-auto object-cover rounded-2xl shadow-xl"
        />
        <MdPlayArrow
          className="group-hover:block hidden fill-blue-500 size-11 absolute m-24
         bg-white bg-opacity-80 rounded-full hover:fill-blue-300 hover:cursor-pointer"
          onClick={() => dispatch(setCurrentTrack(audio1))}
        />
        <h2 className="font-semibold">Invation of privacy</h2>
        <small>Cardi B.</small>
      </div>
      <div className="flex flex-col text-start gap-1 group relative">
        <img
          src={image}
          alt="Song Image"
          className="w-56 h-auto object-cover rounded-2xl shadow-xl"
        />
        <MdPlayArrow
          className="group-hover:block hidden fill-blue-500 size-11 absolute m-24
         bg-white bg-opacity-80 rounded-full hover:fill-blue-300 hover:cursor-pointer"
          onClick={() => dispatch(setCurrentTrack(audio2))}
        />
        <h2 className="font-semibold">Invation of privacy</h2>
        <small>Cardi B.</small>
      </div>
    </>
  );
};

export default MusicCard;
