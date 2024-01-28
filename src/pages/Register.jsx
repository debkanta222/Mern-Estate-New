import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "../../src/styles/register.css";
import { Link } from "react-router-dom";
import {
  IconBrandGoogleFilled,
  IconEye,
  IconEyeOff,
  IconX,
} from "@tabler/icons-react"; // Import eye icons

// Modal component for displaying suggested password
const SuggestedPasswordModal = ({
  suggestedPassword,
  onClose,
  onUsePassword,
}) => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <animated.div
      style={fadeIn}
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div
        className="absolute inset-0 bg-gray-900 opacity-75"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg w-80 p-8 z-50 relative">
        <button
          className="absolute top-0 right-0 p-2 cursor-pointer"
          onClick={onClose}
        >
          <IconX
            className="hover:text-red-800 hover:scale-125 hover:stroke-2"
            size={20}
            strokeWidth={1}
          />
        </button>
        <p className="text-lg font-semibold mb-4 text-center">
          Suggested Password
        </p>
        <p className="text-sm mr-2 text-center pt-2 pb-4">
          {suggestedPassword}
        </p>
        <div className="text-center">
          <button
            type="button"
            onClick={() => onUsePassword(suggestedPassword)}
            className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-3xl group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
          >
            <span className="relative px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-3xl group-hover:bg-opacity-0">
              Use this password
            </span>
          </button>
        </div>
      </div>
    </animated.div>
  );
};

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State to track password visibility
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [username, setUsername] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [showAnimation, setShowAnimation] = useState(false);
  const [suggestedPassword, setSuggestedPassword] = useState("");
  const [isPasswordTyped, setIsPasswordTyped] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  const fadeIn = useSpring({
    opacity: showAnimation ? 1 : 0,
    padding: showAnimation ? 0 : 50,
    delay: 700,
  });

  const validateUsername = (username) => {
    const usernameRegex = /^(?=.*[a-zA-Z]{2})[a-zA-Z0-9\s]+$/;
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
    setIsPasswordTyped(/[a-zA-Z0-9]/.test(newPassword));
  };

  const generateRandomPassword = () => {
    const length = 10;
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialChars = "@$!%*?&";
    const numbers = "0123456789";

    const getRandomChar = (charset) =>
      charset[Math.floor(Math.random() * charset.length)];

    let password = "";
    password += getRandomChar(uppercaseChars);
    password += getRandomChar(lowercaseChars);
    password += getRandomChar(specialChars);
    password += getRandomChar(numbers);
    for (let i = 4; i < length; i++) {
      const randomCharset =
        lowercaseChars + uppercaseChars + specialChars + numbers;
      password += getRandomChar(randomCharset);
    }

    // Shuffle the password characters
    password = password
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");

    return password;
  };

  const handleSuggestPassword = () => {
    const suggestedPassword = generateRandomPassword();
    setSuggestedPassword(suggestedPassword);
    setIsPasswordValid(true); // Reset password validation
    setShowModal(true);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const useSuggestedPassword = (password) => {
    setPassword(password);
    setIsPasswordValid(true); // Reset password validation
    setShowModal(false);
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
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Full Name
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
                    htmlFor="email"
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
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <div className="flex items-center">
                    <div className="relative w-full">
                      <input
                        value={password}
                        onChange={handlePasswordChange}
                        type={isPasswordVisible ? "text" : "password"} // Toggle password visibility
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 flex items-center mr-3 focus:outline-none"
                      >
                        {isPasswordVisible ? (
                          <IconEyeOff
                            color="rgb(73, 80, 87)"
                            strokeWidth={1.2}
                          />
                        ) : (
                          <IconEye color="rgb(73, 80, 87)" strokeWidth={1.2} />
                        )}
                      </button>
                    </div>
                  </div>
                  {!isPasswordValid && (
                    <p className="font-semibold text-red-500">
                      Please enter a valid Password
                    </p>
                  )}
                  {isPasswordTyped && (
                    <button
                      type="button"
                      onClick={handleSuggestPassword}
                      className="relative inline-flex mt-7 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-3xl group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                    >
                      <span className="relative px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-3xl group-hover:bg-opacity-0">
                        Suggest strong password
                      </span>
                    </button>
                  )}
                </div>
                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full text-white bg-gray-800  hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Register
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center text-white bg-red-800  hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 button-margin"
                >
                  <IconBrandGoogleFilled className="mr-2" size={20} />
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
      {showModal && (
        <SuggestedPasswordModal
          suggestedPassword={suggestedPassword}
          onClose={closeModal}
          onUsePassword={useSuggestedPassword}
        />
      )}
    </>
  );
}
