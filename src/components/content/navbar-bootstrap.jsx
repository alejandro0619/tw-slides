import { useState } from "react";

const MockupBrowser = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-900 rounded-lg shadow-xl w-[70%] h-fit mt-10">
      {/* Barra de título estilo navegador */}
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-t-lg">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-sm text-gray-400">https://miweb.com</span>
      </div>

      {/* Contenido principal */}
      <div className="bg-white rounded-b-lg p-6">
        {/* Navbar */}
        <nav className="shadow-md bg-gray-100 p-4 rounded-lg">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <a href="#" className="text-xl font-bold text-gray-800">
              MiLogo
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-800 hover:text-blue-500">
                Inicio
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-500">
                Servicios
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-500">
                Proyectos
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-500">
                Contacto
              </a>
            </div>
            {/* Botón menú móvil */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-800 focus:outline-none"
            >
              ☰
            </button>
          </div>
          {/* Menú móvil */}
          {isOpen && (
            <div className="md:hidden mt-4 space-y-2">
              <a href="#" className="block text-gray-800 hover:text-blue-500">
                Inicio
              </a>
              <a href="#" className="block text-gray-800 hover:text-blue-500">
                Servicios
              </a>
              <a href="#" className="block text-gray-800 hover:text-blue-500">
                Proyectos
              </a>
              <a href="#" className="block text-gray-800 hover:text-blue-500">
                Contacto
              </a>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="mt-10 text-center flex justify-around items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Bienvenido a MiWeb
            </h1>
            <p className="text-gray-600 mt-2">
              Descubre nuestros servicios y proyectos innovadores.
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Comenzar
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1648737966636-2fc3a5fffc8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero"
            className="mt-6 rounded-lg shadow-lg w-[300px] "
          />
        </section>

        {/* Landing Content */}
        <section className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Servicio 1</h3>
            <p className="text-gray-600 mt-2">
              Descripción breve del servicio.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Servicio 2</h3>
            <p className="text-gray-600 mt-2">
              Descripción breve del servicio.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Servicio 3</h3>
            <p className="text-gray-600 mt-2">
              Descripción breve del servicio.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MockupBrowser;
