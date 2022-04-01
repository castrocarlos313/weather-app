import { useSelector } from "react-redux";
import { getBgImg } from "../helpers";
import ClimaActual from "./ClimaActual";
import ClimaDetalle from "./ClimaDetalle";

const Clima = () => {
  const { climaActual } = useSelector((state) => state);

  return (
    <main
      className={`flex flex-col ${getBgImg(
        climaActual?.code,
        climaActual?.isDay
      )} bg-cover`}
    >
      <ClimaActual />
      <ClimaDetalle />
    </main>
  );
};

export default Clima;
