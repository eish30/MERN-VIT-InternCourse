import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>Follow us on:</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:underline">Facebook</a>
        <a href="#" className="hover:underline">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
