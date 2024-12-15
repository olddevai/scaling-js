import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Simplify Your JavaScript with Ease</h1>
        <p className="text-lg mb-6">Paste your code, and we’ll minify it instantly.</p>
        <a
          href="#tool"
          className="bg-primary text-white py-3 px-6 rounded shadow hover:bg-secondary"
        >
          Try Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
