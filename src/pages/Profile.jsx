import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import "../../src/styles/profile.css";
import {
  IconPlaylistAdd,
  IconList,
  IconTrash,
  IconPower,
  IconCameraFilled,
} from "@tabler/icons-react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Profile() {
  const [showAnimation, setShowAnimation] = useState(false);
  const inputRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [imageUrl, setImageUrl] = useState("");
  const [imageUrlnew, setImageUrlnew] = useState("");

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  const fadeIn = useSpring({
    opacity: showAnimation ? 1 : 0,
    padding: showAnimation ? 0 : 50,
    delay: 700,
  });

  useEffect(() => {
    axios
      .get("https://api.api-ninjas.com/v1/logo?name=Microsoft", {
        headers: {
          "X-Api-Key": "KRkG+94bLp90w50srZVgtg==fqIeomlkkhUkocLt",
          Accept: "image/jpg",
        },
      })
      .then((response) => {
        response.data.map((item) => {
          setImageUrlnew(item.image);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <section className="main-bg bg-[url('/profile-bg.jpg')] py-60">
        <animated.div style={fadeIn} className="container mx-auto max-w-5xl">
          <div>
            <div className="bg-white relative shadow-xl rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
              <div className="flex justify-center image-uploader">
                <input
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                    setImageUrl(URL.createObjectURL(e.target.files[0]));
                  }}
                  type="file"
                  ref={inputRef}
                  hidden
                  accept="image/*"
                />
                <img
                  src={
                    imageUrl ||
                    imageUrlnew ||
                    "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                  }
                  onClick={() => inputRef.current.click()}
                  alt="profile avatar"
                  className="rounded-full cursor-pointer mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white"
                />

                <IconCameraFilled
                  className="cursor-pointer ml-24 absolute icon-color opacity-50 hover:opacity-100"
                  size={30}
                  onClick={() => inputRef.current.click()}
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
                  <Link to={"/create-listing"}>
                    <a className="cursor-pointer flex font-semibold items-center text-cyan-600 transition duration-300 transform hover:scale-105">
                      <IconPlaylistAdd
                        className="mr-2 text-cyan-600"
                        size={25}
                      />
                      Create Listing
                    </a>
                  </Link>
                  <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                  <a className="cursor-pointer flex font-semibold items-center text-cyan-600 mt-2 transition duration-300 transform hover:scale-105">
                    <IconList className="mr-2 text-cyan-600" size={25} />
                    Show Listing
                  </a>
                  <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                  <a className="cursor-pointer flex font-semibold items-center text-red-600 mt-2 transition duration-300 transform hover:scale-105">
                    <IconTrash className="mr-2 text-red-600" size={25} />
                    Delete Account
                  </a>
                  <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                  <a className="cursor-pointer flex font-semibold items-center text-red-600 mt-2 transition duration-300 transform hover:scale-105">
                    <IconPower className="mr-2 text-red-600" size={25} />
                    Log out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      </section>
    </>
  );
}
