import { tempFormater } from "../helpers";
import Detalle from "./Detalle";

const DetalleTemperaturaActual = ({ max, min, avg, prec, hume, isCelsius }) => {
  return (
    <div className="grid grid-cols-3 m-5 gap-3 mt-5 lg:mt-0  text-sm xl:text-xl">
      <Detalle detalle={"Maxima: "} cantidad={tempFormater(max, isCelsius)} />
      <Detalle detalle={"Minima: "} cantidad={tempFormater(min, isCelsius)} />
      <Detalle detalle={"Promedio: "} cantidad={tempFormater(avg, isCelsius)} />
      <Detalle detalle={"Precipitacion: "} cantidad={`${prec}mm`} />
      <Detalle detalle={"Humedad: "} cantidad={`${hume}%`} />
    </div>
  );
};

export default DetalleTemperaturaActual;
