import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const HowToUse = () => {
  const [itemCount, setItemCount] = useState(4); // Estado para el número de elementos

  // Genera el código CSS basado en el número de elementos
  const generateGridCode = () => {
    return `.grid-container {
  display: grid;
  grid-template-columns: repeat(${Math.ceil(Math.sqrt(itemCount))}, 1fr);
  gap: 1rem;
}`;
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-900 rounded-lg shadow-xl w-[50%] h-[60%] mt-[5%]">
      {/* Barra de título */}
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-t-lg">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-sm text-gray-400">grid-demo.css</span>
      </div>

      {/* Contenido principal */}
      <div className="flex flex-col md:flex-row gap-8 mt-6 ">
        {/* Slider y Grid */}
        <div className="flex-1">
          {/* Slider */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Número de elementos: {itemCount}
            </label>
            <input
              type="range"
              min="1"
              max="12" // Límite de 12 elementos
              value={itemCount}
              onChange={(e) => setItemCount(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Grid visual */}
          <div
            className="grid gap-4 p-4 bg-gray-800 rounded-lg transition-all duration-500"
            style={{
              gridTemplateColumns: `repeat(${Math.ceil(Math.sqrt(itemCount))}, 1fr)`,
            }}
          >
            {Array.from({ length: itemCount }).map((_, index) => (
              <div
                key={index}
                className="bg-blue-500 p-6 rounded-lg text-white flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Editor de código */}
        <div className="flex-1">
          <SyntaxHighlighter
            language="css"
            style={atomDark}
            customStyle={{
              padding: "1.5rem",
              borderRadius: "0.5rem",
              margin: "0",
              fontSize: "0.875rem",
            }}
          >
            {generateGridCode()}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;