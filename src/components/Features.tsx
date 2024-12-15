import React from "react";
import { Code, Lightning, Shield } from "lucide-react";

const features = [
  { icon: <Code />, title: "Efficient", description: "Minifies your code in seconds." },
  { icon: <Lightning />, title: "Fast", description: "Lightning-fast performance." },
  { icon: <Shield />, title: "Secure", description: "Handles your code securely." },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow flex flex-col items-center text-center"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
