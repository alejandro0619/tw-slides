import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeSnippet = () => {
  const codeString = `
/* Crear un grid de 3 columnas y 2 filas */
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
  gap: 16px;
}

/* Posicionar elementos en el grid */
.item-1 {
  grid-column: 1 / 3; /* Ocupa 2 columnas */
  grid-row: 1;       /* Primera fila */
}

`;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 rounded-lg shadow-xl">
      {/* Barra de título */}
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-t-lg">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-sm text-gray-400">grid-example.css</span>
      </div>

      {/* Código resaltado */}
      <SyntaxHighlighter
        language="css"
        style={atomDark}
        customStyle={{
          padding: "1.5rem",
          borderRadius: "0 0 0.5rem 0.5rem",
          margin: "0",
          fontSize: "0.875rem",
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;