import React from "react";
import { Clipboard, Check } from "lucide-react";

type Props = {
  minifiedCode: string;
};

const CodeOutput: React.FC<Props> = ({ minifiedCode }) => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(minifiedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
  };

  return (
    <div>
      <label className="block text-lg font-medium text-gray-700 mb-2">
        Minified JavaScript Code
      </label>
      <textarea
        value={minifiedCode}
        readOnly
        rows={10}
        className="w-full p-4 border border-gray-300 rounded-lg bg-gray-100 focus:ring-primary focus:border-primary"
      />
      <button
        onClick={copyToClipboard}
        className="mt-4 flex items-center gap-2 bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary"
      >
        {copied ? <Check className="w-5 h-5" /> : <Clipboard className="w-5 h-5" />}
        {copied ? "Copied!" : "Copy to Clipboard"}
      </button>
    </div>
  );
};

export default CodeOutput;
