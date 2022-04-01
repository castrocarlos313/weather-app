import { useSelector } from "react-redux";
import { timeFormater } from "../helpers";
import ClimaLista from "./ClimaLista";
import DetalleTemperatura from "./DetalleTemperatura";
import Spinner from "./Spinner";
import Temperatura from "./Temperatura";

const ClimaDetalle = () => {
  const { climaPorHora, climaSeleccionado, error, loading, isCelsius } =
    useSelector((state) => state);

  return (
    <div className="col-span-2 p-10 bg-white/50 backdrop-blur-sm">
      <div className="flex flex-col justify-around items-center h-screen  rounded">
        {!error && !loading && (
          <ClimaLista tiempos={climaPorHora} isCelsius={isCelsius} />
        )}
        <div className="flex flex-col md:flex-row gap-3 mt-5 lg:mt-0  ">
          {!error && !loading && (
            <>
              <Temperatura
                text={timeFormater(climaSeleccionado.time)}
                feel={climaSeleccionado.feel}
                isCelsius={isCelsius}
                temp={climaSeleccionado.temp}
                icon={climaSeleccionado.icon}
              />
              <DetalleTemperatura
                cloud={climaSeleccionado.cloud}
                rainChance={climaSeleccionado.rainChance}
                hume={climaSeleccionado.hume}
                prec={climaSeleccionado.prec}
              />
            </>
          )}
          {loading && <Spinner />}
        </div>
      </div>
    </div>
  );
};

export default ClimaDetalle;
