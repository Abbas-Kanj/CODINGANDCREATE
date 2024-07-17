import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  MdHome,
  MdPlaylistAdd,
  MdPerson,
  MdAlbum,
  MdRadio,
  MdEvent,
  MdPodcasts,
  MdHeartBroken,
} from "react-icons/md";
import femaleImg from "../assets/femaleImg.jpg";

const Sidebar = () => {
  const browseSection = [
    { name: "Home", icon: MdHome, href: "../" },
    { name: "Playlists", icon: MdPlaylistAdd, href: "../Playlists" },
    { name: "Artists", icon: MdPerson, href: "../Profile" },
    { name: "Albums", icon: MdAlbum, href: "../Albums" },
  ];
  const discoverSection = [
    { name: "Radio", icon: MdRadio, href: "../Radio" },
    { name: "Event", icon: MdEvent, href: "../Event" },
    { name: "Podcast", icon: MdPodcasts, href: "../Podcast" },
    { name: "For You", icon: MdHeartBroken, href: "../ForYou" },
  ];

  return (
    <div className="drawer lg:drawer-open h-full gap-3">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center h-full">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-black drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu text-base-content h-max w-52 lg:min-h-[686px] rounded-xl p-0 bg-white">
          <div className="flex flex-col items-center">
            <img
              src={femaleImg}
              alt="femaleImg"
              className="w-24 h-24 mb-3 rounded-full object-cover shadow-2xl"
            />
            <h2 className="text-base text-black font-semibold">John Doe</h2>
            <h3 className="text-sm text-blue-500">johndoe@gmail.com</h3>
          </div>
          <div className="flex flex-col gap-5 mt-10 w-full">
            <h2 className="font-bold text-lg text-black ml-5">Browse</h2>
            <div className="flex flex-col gap-2 items-start">
              {browseSection.map((nav, i) => (
                <NavLink
                  key={i}
                  to={nav.href}
                  className={({ isActive }) => {
                    return (
                      "flex gap-3 items-center text-base font-semibold p-1 hover:bg-opacity-40 hover:bg-black w-full rounded-r-lg " +
                      (!isActive
                        ? "text-gray-600 opacity-40 hover:text-black"
                        : "text-black border-l-4 border-black border-solid")
                    );
                  }}
                >
                  {({ isActive }) => (
                    <>
                      <nav.icon
                        className={
                          "size-7 ml-3 " +
                          (!isActive
                            ? "fill-gray-600 opacity-40 "
                            : "fill-black ")
                        }
                      />
                      {nav.name}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
            <h2 className="font-bold text-lg text-black ml-5">Discover</h2>
            <div className="flex flex-col gap-2 items-start">
              {discoverSection.map((nav, i) => (
                <NavLink
                  key={i}
                  to={nav.href}
                  className={({ isActive }) => {
                    return (
                      "flex gap-3 items-center text-base font-semibold p-1 hover:bg-opacity-40 hover:bg-black w-full rounded-r-lg " +
                      (!isActive
                        ? "text-gray-600 opacity-40 hover:text-black"
                        : "text-black border-l-4 border-black border-solid")
                    );
                  }}
                >
                  {({ isActive }) => (
                    <>
                      <nav.icon
                        className={
                          "size-7 ml-3 " +
                          (!isActive
                            ? "fill-gray-600 opacity-40 "
                            : "fill-black ")
                        }
                      />
                      {nav.name}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
