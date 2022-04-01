import Detalle from "./Detalle";

const DetalleTemperatura = ({ cloud, rainChance, prec, hume }) => {
  return (
    <div className="grid grid-cols-3 m-5 gap-3 mt-5 lg:mt-0  text-sm xl:text-xl">
      <Detalle detalle={"Nubosidad: "} cantidad={`${cloud} %`} />
      <Detalle
        detalle={"Posibilidad de lluvia: "}
        cantidad={`${rainChance} %`}
      />
      <Detalle detalle={"Precipitacion: "} cantidad={`${prec}mm`} />
      <Detalle detalle={"Humedad: "} cantidad={`${hume}%`} />
    </div>
  );
};

export default DetalleTemperatura;
