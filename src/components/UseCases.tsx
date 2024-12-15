import React from "react";

const useCases = [
  "Optimizing website performance",
  "Reducing file size for production",
  "Sharing compact code snippets",
];

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Use Cases</h2>
        <ul className="space-y-4 text-lg list-disc list-inside">
          {useCases.map((caseItem, index) => (
            <li key={index}>{caseItem}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default UseCases;
