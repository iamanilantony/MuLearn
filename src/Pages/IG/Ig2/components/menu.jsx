import React from "react";

const ContentsMenu = () => {
  // List of content items
  const contents = [
    "FOUNDATION",
    "PARTNERS",
    "PRE-REQUISITES",
    "LEARNING PATH",
    "µ CHALLENGES",
    "EVENTS & BOOTCAMPS",
    "MENTOR DETAILS",
    "IG LEADS / IG LEADERBOARD",
    "OPPORTUNITIES",
    "TOP PEOPLE TO FOLLOW",
    "TOP BLOGS TO FOLLOW",
    "TOP KEYWORDS",
  ];

  return (
    <div
      style={{
        boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.1)",
      }}
      className="p-4 rounded-md w-64 bg-white "
    >
      {/* Heading */}
      <h2 className="text-xl font-bold text-orange-500 mb-4 text-left ml-0">
        Contents
      </h2>

      {/* List of items */}
      <ul className="space-y-4 pl-2">
        {contents.map((item, index) => (
          <li
            key={index}
            className="text-gray-700 font-medium text-[15px] hover:text-orange-500 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentsMenu;
