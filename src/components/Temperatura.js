import { tempFormater } from "../helpers";

const Temperatura = ({ temp, feel, text, icon, isCelsius }) => {
  return (
    <div className="m-auto">
      <p>{`${text}`}</p>
      <div className="flex gap-3">
        <h3 className="m-auto text-3xl sm:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
          {tempFormater(temp, isCelsius)}
        </h3>
        <img src={icon} alt="clima_icon" className="m-auto" />
      </div>
      <p>Sensación termica: {tempFormater(feel, isCelsius)}</p>
    </div>
  );
};

export default Temperatura;
