import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cambiarUnidadMetrica, obtenerTiempo } from "../actions/climaActions";

const BarraBusqueda = () => {
  const [busqueda, setBusqueda] = useState("");
  const { isCelsius } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (busqueda.trim() !== "") {
      dispatch(obtenerTiempo(busqueda));

      setBusqueda("");
    }
  };

  const handleChange = () => {
    dispatch(cambiarUnidadMetrica());
  };

  return (
    <div className="flex justify-between">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="busqueda"
          id="busqueda"
          className="rounded-l-xl p-2 w-32 sm:w-40 focus:outline-none"
          value={busqueda}
          placeholder="Ingrese ciudad"
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white p-2 rounded-r-xl"
        >
          Buscar
        </button>
      </form>
      <div className="flex items-center justify-end my-auto">
        <label htmlFor="toggleB" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              id="toggleB"
              className="sr-only"
              checked={isCelsius}
              onChange={handleChange}
            />
            <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
            <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
          </div>
          <div className="ml-3 font-medium text-black">
            {isCelsius ? "°C" : "°F"}
          </div>
        </label>
      </div>
    </div>
  );
};

export default BarraBusqueda;
