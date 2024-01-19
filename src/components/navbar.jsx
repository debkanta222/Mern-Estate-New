import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../src/styles/header.css";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="text-normal font-bold sm:text-xl flex flex-erap">
            <span className="text-slate-500">MERN</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4 items-center">
          <Link to={"/"}>
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
            About
          </li>
          <Link to={"/login"}>
            <li className="hidden sm:block text-slate-700 hover:underline text-center">
              <button
                type="button"
                class="text-white bg-slate-500 hover:bg-slate-500 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-6 py-2 "
              >
                Login
              </button>
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
