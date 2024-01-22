import React from "react";
import "../../src/styles/profile.css";
import {
  IconPlaylistAdd,
  IconList,
  IconTrash,
  IconPower,
} from "@tabler/icons-react";
import { useRef } from "react";

export default function Profile() {
  const inputRef = useRef(null);
  return (
    <>
      <div className="container mx-auto my-60 max-w-8xl">
        <div>
          <div className="bg-white relative shadow-xl rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
            <div className="flex justify-center">
              <input type="file" ref={inputRef} hidden />
              <img
                src="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                onClick={() => inputRef.current.click()}
                alt="profile avatar"
                className="rounded-full cursor-pointer mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-300 transform hover:scale-125"
              />
            </div>
            <div className="mt-16">
              <h1 className="font-bold text-3xl text-gray-900 text-center">
                Welcome ! Ankan Jha
              </h1>
              <div className="my-5 px-14">
                <a
                  href="#"
                  className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white"
                >
                  Edit Profile
                </a>
              </div>

              <div className="flex flex-col pb-8 px-14 justify-start">
                <a className="cursor-pointer flex font-semibold items-center text-cyan-600 transition duration-300 transform hover:scale-110">
                  <IconPlaylistAdd className="mr-2 text-cyan-600" size={30} />
                  Create Listing
                </a>
                <a className="cursor-pointer flex font-semibold items-center text-cyan-600 mt-2 transition duration-300 transform hover:scale-110">
                  <IconList className="mr-2 text-cyan-600" size={30} />
                  Show Listing
                </a>
                <a className="cursor-pointer flex font-semibold items-center text-red-600 mt-2 transition duration-300 transform hover:scale-110">
                  <IconTrash className="mr-2 text-red-600" size={30} />
                  Delete Account
                </a>
                <a className="cursor-pointer flex font-semibold items-center text-red-600 mt-2 transition duration-300 transform hover:scale-110">
                  <IconPower className="mr-2 text-red-600" size={30} />
                  Log out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
