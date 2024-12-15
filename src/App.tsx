import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import UseCases from "./components/UseCases";
import Footer from "./components/Footer";
import CodeInput from "./components/CodeInput";
import CodeOutput from "./components/CodeOutput";
import { minify } from "terser";

const App: React.FC = () => {
  const [code, setCode] = useState("");
  const [minifiedCode, setMinifiedCode] = useState("");

  const handleMinify = async () => {
    if (!code.trim()) {
      setMinifiedCode("Please provide some JavaScript code to minify.");
      return;
    }
    try {
      const result = await minify(code);
      setMinifiedCode(result.code || "Minification failed. Check your input.");
    } catch (error) {
      setMinifiedCode("Error during minification: " + error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <main id="tool" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Minify Your Code</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CodeInput code={code} onCodeChange={setCode} />
            <CodeOutput minifiedCode={minifiedCode} />
          </div>
          <div className="text-center mt-6">
            <button
              onClick={handleMinify}
              className="bg-primary text-white py-3 px-6 rounded-lg hover:bg-secondary"
            >
              Minify Code
            </button>
          </div>
        </div>
      </main>
      <Features />
      <UseCases />
      <Footer />
    </div>
  );
};

export default App;
