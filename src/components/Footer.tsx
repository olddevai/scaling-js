import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} JS Minifier Tool. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
