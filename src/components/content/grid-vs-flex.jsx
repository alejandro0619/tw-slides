import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const GridxFlex = () => {
  // Estado para el código de Grid
  const [gridCode, setGridCode] = useState(`.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}`);

  // Estado para el código de Flexbox
  const [flexCode, setFlexCode] = useState(`.flex-container {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}`);

  // Estado para el número de elementos
  const [itemCount, setItemCount] = useState(4);


  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-900 rounded-lg shadow-xl w-[50%] h-[50%] mt-[5%]">
      {/* Barra de título */}
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-t-lg">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-sm text-gray-400">Grid vs Flexbox</span>
      </div>

      {/* Contenido principal */}
      <div className="flex flex-col md:flex-row gap-8 mt-6">
        {/* Grid Editor y Visualización */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-200 mb-4">CSS Grid</h2>
          {/* Editor de código */}
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
            {gridCode}
          </SyntaxHighlighter>

        </div>

        {/* Flexbox Editor y Visualización */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-200 mb-4">Flexbox</h2>
          {/* Editor de código */}
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
            {flexCode}
          </SyntaxHighlighter>

        </div>
      </div>
    </div>
  );
};

export default GridxFlex;