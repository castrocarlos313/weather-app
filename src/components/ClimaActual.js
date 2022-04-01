import Temperatura from "./Temperatura";
import { useSelector } from "react-redux";
import DetalleTemperaturaActual from "./DetalleTemperaturaActual";
import Spinner from "./Spinner";

const ClimaActual = () => {
  const { climaActual, error, loading, mensaje, isCelsius } = useSelector(
    (state) => state
  );

  return (
    <div className="col-span-1 mx-auto">
      <div className="max-w-5xl flex flex-col sm:flex-row justify-between py-10 px-3 sm:px-8 bg-white m-10 rounded">
        {!error && !loading && (
          <>
            <Temperatura
              text={`${climaActual.city}, ${climaActual.country}`}
              feel={climaActual.feel}
              isCelsius={isCelsius}
              icon={climaActual.icon}
              temp={climaActual.temp}
            />
            <DetalleTemperaturaActual
              avg={climaActual.avg}
              hume={climaActual.hume}
              max={climaActual.max}
              min={climaActual.min}
              prec={climaActual.prec}
              isCelsius={isCelsius}
            />
          </>
        )}
        {error && <p className="text-xl text-center p-10">{mensaje}</p>}
        {loading && <Spinner />}
      </div>
    </div>
  );
};

export default ClimaActual;
