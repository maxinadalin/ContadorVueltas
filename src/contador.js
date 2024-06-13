

import React, { useState } from "react";
import logo from "./assets/img/img.png"

export default function Contador() {
  const [contador, setContador] = useState(0);
  const [casillas, setCasillas] = useState([]);

  const aumentarContador = () => {
    setContador((prevContador) => prevContador + 1);
  };

  const disminuirContador = () => {
    setContador((prevContador) => Math.max(0, prevContador - 1));
  };

  const resetearContador = () => {
    setContador(0);
  };

  const agregarCasilla = () => {
    setCasillas([...casillas, { id: casillas.length }]);
  };
  const EliminarCasillas = () => {
    setCasillas([]);
  };
  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto  ">
          <img
            className="mx-auto h-12 w-auto"
            src={logo}
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Contador de Vueltas
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="input"
                  className="block text-sm font-medium text-gray-700 text-center"
                >
                  Vueltas
                </label>
                <div className="mt-1">
                  <input
                    id="input"
                    value={contador} // El valor del input es controlado por el estado 'contador'
                    readOnly
                    type="text"
                    placeholder="0"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-center"
                  />
                </div>
              </div>
              <div>
                <div className="flex mb-5 ">
                  <button
                    type="button" // Evita que el formulario se envíe al hacer clic
                    onClick={aumentarContador} // Manejador de evento para incrementar el contador
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 m-1"
                    id="aumentar"
                  >
                    Aumentar
                  </button>
                  <button
                    type="button" // Evita que el formulario se envíe al hacer clic
                    onClick={disminuirContador} // Manejador de evento para decrementar el contador
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 m-1"
                    id="disminuir"
                  >
                    Disminuir
                  </button>
                </div>
                <button
                  type="button" // Evita que el formulario se envíe al hacer clic
                  onClick={resetearContador} // Manejador de evento para resetear el contador
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  id="resetear"
                >
                  Resetear
                </button>
              </div>

              <div class="card__marcador">
                <h2 className="mt-6 text-center text-lg font-extrabold text-gray-600">
                  Contador de Vueltas
                </h2>
                <div className="" id="contenedor">
                  {casillas.map((casilla) => (
                    <div
                      key={casilla.id}
                      className="marcador__marcadores mt-4 flex"
                    >
                      <div className="marcadores__vueltas m-1">
                        <label className="block text-sm font-medium text-gray-700 text-center">
                          Cantidad de vueltas
                        </label>
                        <input
                          type="text"
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-center"
                        />
                      </div>
                      <div className="marcadores__vueltas m-1">
                        <label className="block text-sm font-medium text-gray-700 text-center">
                          Cantidad de puntos
                        </label>
                        <input
                          type="text"
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-center"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex mt-5">
                  <button
                    type="button"
                    onClick={agregarCasilla}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 m-1"
                    id="aumentar"
                  >
                    Agregar Casilla
                  </button>
                  <button
                    type="button" // Evita que el formulario se envíe al hacer clic
                    onClick={EliminarCasillas} // Manejador de evento para decrementar el contador
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 m-1"
                    id="disminuir"
                  >
                    Disminuir
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
