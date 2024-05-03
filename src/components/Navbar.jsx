import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-primary p-4 text-white font-roboto">
      <ul className="flex space-x-4">
        {["Home", "About", "Contact"].map((item, index) => (
          <li key={index} className={"hover:text-secondary"}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
