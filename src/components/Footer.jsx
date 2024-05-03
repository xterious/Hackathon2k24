import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white text-center p-4 ">
      <p>
        &copy; {new Date().getFullYear()} Your Company Name. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
