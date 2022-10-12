import React from "react";
import image from "../../../src/image/image-withbg.png";

const Navbar = () => {
  return (
    <div>
      <nav
        className="
  relative
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-4
  bg-gray-100
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  shadow-lg
  navbar navbar-expand-lg navbar-light
  "
      >
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button
            className="
      navbar-toggler
      text-gray-500
      border-0
      hover:shadow-none hover:no-underline
      py-2
      px-2.5
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
          <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
            <a
              className="
        flex
        items-center
        text-gray-900
        hover:text-gray-900
        focus:text-gray-900
        mt-2
        lg:mt-0
        mr-1
      "
              href="/#"
            >
              <h1 className="text-extrabold font-serif text-indigo-500">SIMMI FOUNDATION</h1>
            </a>
            <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
              <li className="nav-item p-2">
                <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#">
                  Dashboard
                </a>
              </li>
              <li className="nav-item p-2">
                <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#">
                  Team
                </a>
              </li>
              <li className="nav-item p-2">
                <a className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center relative">
            <a className="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4" href="/#">
              <h1>About</h1>
            </a>
            <div className="dropdown relative">
              <a
                className="
          text-gray-500
          hover:text-gray-700
          focus:text-gray-700
          mr-4
          dropdown-toggle
          hidden-arrow
          flex items-center
        "
                href="/#"
                id="dropdownMenuButton1"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h1>Contact us</h1>
              </a>
              <ul
                className="
      dropdown-menu
      min-w-max
      absolute
      hidden
      bg-white
      text-base
      z-50
      float-left
      py-2
      list-none
      text-left
      rounded-lg
      shadow-lg
      mt-1
      hidden
      m-0
      bg-clip-padding
      border-none
      left-auto
      right-0
    "
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a
                    className="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        "
                    href="/#"
                  >
                    Head Office
                  </a>
                </li>
                <li>
                  <a
                    className="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        "
                    href="/#"
                  >
                    Hub
                  </a>
                </li>
                <li>
                  <a
                    className="
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        "
                    href="/#"
                  >
                    General Manager
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown relative">
              <a className="dropdown-toggle flex items-center hidden-arrow" href="/#" id="dropdownMenuButton2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={image} className="rounded-full" style={{ height: 25, width: 25 }} alt="" loading="lazy" />
              </a>
              <ul
                className="
    dropdown-menu
    min-w-max
    absolute
    hidden
    bg-white
    text-base
    z-50
    float-left
    py-2
    list-none
    text-left
    rounded-lg
    shadow-lg
    mt-1
    hidden
    m-0
    bg-clip-padding
    border-none
    left-auto
    right-0
  "
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <a
                    className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      "
                    href="/#"
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      "
                    href="/#"
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <a
                    className="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      "
                    href="/#"
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
