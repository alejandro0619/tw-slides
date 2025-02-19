import Card from "../Card";
import CodeSnippet from "../content/Code-snippet";

export default function WhatIsGrid({ title, content }) {
  return (
    <>
      {/* Contenedor de dos columnas */}
      <div className="w-full max-w-6xl mx-auto flex gap-8 mt-[5%]">
              {/* Card (izquierda) */}
              <div className="flex-1">
                <Card content={content} title={title} />
              </div>

              {/* CodeSnippet (derecha) */}
              <div className="flex-1">
                <CodeSnippet />
              </div>
            </div>
    </>
  )
}