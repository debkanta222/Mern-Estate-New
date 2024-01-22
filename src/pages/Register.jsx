import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "../../src/styles/register.css";
import { Link } from "react-router-dom";
import { IconBrandGoogleFilled } from "@tabler/icons-react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [username, setUsername] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  const fadeIn = useSpring({
    opacity: showAnimation ? 1 : 0,
    padding: showAnimation ? 0 : 50,
    delay: 700,
  });

  const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z]{2,}$/;
    return usernameRegex.test(username);
  };

  const handleUsernameChange = (e) => {
    const newUsername = e.target.value;
    const isValidUsername = validateUsername(newUsername);
    setUsername(newUsername);
    setIsUsernameValid(isValidUsername);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    const isValidEmail = validateEmail(newEmail);
    setEmail(newEmail);
    setIsEmailValid(isValidEmail);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    const isValidPassword = validatePassword(newPassword);
    setPassword(newPassword);
    setIsPasswordValid(isValidPassword);
  };

  return (
    <>
      <section className="dark:bg-gray-900 bg-[url('/login-bg.jpg')] main-section">
        <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0 sub-section">
          <Link to={"/"}>
            <h1 className="text-md font-bold sm:text-3xl flex flex-erap pb-7">
              <span className="text-slate-400">MERN</span>
              <span className="text-slate-50">Estate</span>
            </h1>
          </Link>
          <animated.div
            style={fadeIn}
            className="w-full bg-white rounded-lg login-container dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                Sign Up
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <input
                    value={username}
                    onChange={handleUsernameChange}
                    type="text"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your username"
                    required=""
                  />
                  {!isUsernameValid && (
                    <p className="font-semibold text-red-500">
                      Name should be at least two letters
                    </p>
                  )}
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={handleEmailChange}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your email"
                    required=""
                  />
                  {!isEmailValid && (
                    <p className="font-semibold text-red-500">
                      Please enter a valid Email
                    </p>
                  )}
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={handlePasswordChange}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  {!isPasswordValid && (
                    <p className="font-semibold text-red-500">
                      Please enter a valid Password
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-gray-800  hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Register
                </button>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center text-white bg-red-800  hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 button-margin"
                >
                  <IconBrandGoogleFilled className="mr-2" />
                  Continue with Google
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login
                  </a>
                </p>
              </form>
            </div>
          </animated.div>
        </div>
      </section>
    </>
  );
}
