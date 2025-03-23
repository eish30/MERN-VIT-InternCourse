import { useState } from "react";

const TextUpdater = () => {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col items-center p-4">
      <input
        type="text"
        className="border border-gray-300 p-2 rounded"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-4 text-lg font-semibold">{text}</p>
    </div>
  );
};

export default TextUpdater;
