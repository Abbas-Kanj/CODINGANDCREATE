import React, { useEffect, useRef, useState } from "react";
import {
  MdShuffle,
  MdRepeat,
  MdSkipPrevious,
  MdSkipNext,
  MdPlayArrow,
  MdPause,
} from "react-icons/md";
import image from "../assets/images/cardib.png";
import audio1 from "../assets/audio/NEFFEX - Badass [Lyric Video].m4a";
import { FaHeart } from "react-icons/fa";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuraduration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audio = useRef();
  const progressBar = useRef();
  const animation = useRef();

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audio.current.play();
      animation.current = requestAnimationFrame(whilePlaying);
    } else {
      audio.current.pause();
      cancelAnimationFrame(animation.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audio.current.currentTime;
    setCurrentTime(progressBar.current.value);
    animation.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audio.current.currentTime = progressBar.current.value;
    setCurrentTime(progressBar.current.value);
  };

  return (
    <section className="flex items-center justify-between px-5 gap-4 bg-white h-20 rounded-xl">
      <div className="flex gap-3">
        <img src={image} alt="Song Image" className="w-14 h-auto rounded-3xl" />
        <div className="flex flex-col justify-center">
          <h2 className="font-semibold">Invation of privacy</h2>
          <small>Cardi B.</small>
        </div>
      </div>
      <div className="flex ">
        <MdSkipPrevious className="size-9 fill-blue-600 cursor-pointer hover:bg-opacity-40 hover:bg-gray-300 rounded-full" />

        <button onClick={togglePlayPause}>
          {!isPlaying ? (
            <MdPlayArrow className="size-9 fill-blue-600 cursor-pointer hover:bg-opacity-40 hover:bg-gray-300 rounded-full" />
          ) : (
            <MdPause className="size-9 fill-blue-600 cursor-pointer hover:bg-opacity-40 hover:bg-gray-300 rounded-full" />
          )}
        </button>

        <MdSkipNext className="size-9 fill-blue-600 cursor-pointer hover:bg-opacity-40 hover:bg-gray-300 rounded-full" />
      </div>
      <div className="flex">
        <audio src={audio1} ref={audio} preload="meta-data"></audio>
        <p>{calculateTime(currentTime)}</p>
        <input
          type="range"
          defaultValue={0}
          min={0}
          max={duration}
          ref={progressBar}
          onChange={changeRange}
          className="w-[700px] h-auto bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-300 mx-2"
        />
        <p>
          {duration && !isNaN(duration) && calculateTime(duration)
            ? calculateTime(duration)
            : "00:00"}
        </p>
      </div>
      <div className="flex gap-3">
        <FaHeart className="size-6 fill-red-600 cursor-pointer hover:fill-red-400" />
        <MdRepeat className="size-6 fill-blue-600 cursor-pointer hover:bg-opacity-40 hover:bg-gray-300 rounded-full" />
        <MdShuffle className="size-6 fill-blue-600 cursor-pointer hover:bg-opacity-40 hover:bg-gray-300 rounded-full" />
      </div>
    </section>
  );
};

export default AudioPlayer;
