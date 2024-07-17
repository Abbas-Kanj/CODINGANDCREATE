import React from "react";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="drawer lg:drawer-open h-full gap-3 bg-red-500">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center h-full bg-blue-500">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
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
        <ul className="menu bg-base-200 text-base-content h-max p-4 rounded-md m-3">
          <div className="flex flex-col text-center">
            <img src="" alt="" />
            <h2>John Doe</h2>
            <h3>johndoe@gmail.com</h3>
          </div>
          <li>Browse</li>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Playlists</a>
          </li>
          <li>
            <a>Artists</a>
          </li>
          <li>
            <a>Albums</a>
          </li>
          <li>Discover</li>
          <li>
            <a>Radio</a>
          </li>
          <li>
            <a>Event</a>
          </li>
          <li>
            <a>Podcast</a>
          </li>
          <li>
            <a>For You</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
