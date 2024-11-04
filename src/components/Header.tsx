import React from "react";

const Header = () => (
    <header className="bg-white border-b p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-[#206BC4] rounded-lg p-2 flex items-center justify-center w-10 h-10">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <span className="text-2xl font-normal text-[#1A1D1F]">tabler</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-50 border border-blue-600 font-semibold text-blue-600 px-4 py-2 rounded">
            Source code
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path>
          </svg>
          <div className="flex items-center space-x-2 text-gray-800">
            <img
              className="inline-block h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            ></img>
            <div className="text-sm">
              <div className="font-semibold text-gray-900 text-lg">
                Jane Pearson
              </div>
              <div>Administrator</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );

  export default Header;