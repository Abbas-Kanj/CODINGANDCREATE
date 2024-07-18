import React from "react";
import { MdSettings } from "react-icons/md";
import { MdNotifications } from "react-icons/md";
const SearchField = () => {
  return (
    <section className="flex justify-between items-center">
      <label class="input input-bordered flex items-center rounded-3xl bg-white bg-opacity-40 gap-5 w-fit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="h-4 w-4 opacity-70"
        >
          <path
            fill-rule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clip-rule="evenodd"
          />
        </svg>
        <input type="text" class="grow" placeholder="Search" />
      </label>
      <div className="flex gap-3 mr-6">
        <MdSettings className="fill-gray-500 size-5" />
        <MdNotifications className="fill-gray-500 size-5" />
      </div>
    </section>
  );
};

export default SearchField;
