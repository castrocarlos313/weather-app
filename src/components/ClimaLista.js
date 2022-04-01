/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useDispatch } from "react-redux";
import { seleccionarTiempo } from "../actions/climaActions";
import { tempFormater, timeFormater } from "../helpers";

const Tiempo = ({ tiempo, isCelsius }) => {
  const { temp, time, icon } = tiempo;

  const dispatch = useDispatch();

  const seleccionar = () => {
    dispatch(seleccionarTiempo(tiempo));
  };
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className="basis-64 min-w-[150px] border-r-gray-400 border-r-2 bg-white/30 backdrop-blur-sm transition-colors hover:bg-white/70"
      onClick={seleccionar}
    >
      <p className="text-center p-3 bg-white">{timeFormater(time)}</p>
      <div className="flex flex-col justify-around h-3/4">
        <img src={icon} alt="clima_icon" className="m-auto" />
        <p className="text-center text-3xl">{tempFormater(temp, isCelsius)}</p>
      </div>
    </div>
  );
};

const ClimaLista = ({ tiempos = [], isCelsius }) => {
  return (
    <div className="flex flex-nowrap overflow-x-scroll w-3/4 h-80 ">
      {tiempos.map((tiempo) => (
        <Tiempo tiempo={tiempo} key={tiempo.id} isCelsius={isCelsius} />
      ))}
    </div>
  );
};

export default ClimaLista;
