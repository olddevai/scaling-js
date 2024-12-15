import React from "react";

type Props = {
  code: string;
  onCodeChange: (value: string) => void;
};

const CodeInput: React.FC<Props> = ({ code, onCodeChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-lg font-medium text-gray-700 mb-2">
        Paste Your JavaScript Code
      </label>
      <textarea
        value={code}
        onChange={(e) => onCodeChange(e.target.value)}
        placeholder="Write or paste your JavaScript code here..."
        rows={10}
        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
      />
    </div>
  );
};

export default CodeInput;
