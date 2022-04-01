export const tempFormater = (temp, isCelcius = true) => {
  if (isCelcius) {
    return `${temp}  \u2103`;
  }

  let fahrenheit = temp * (9 / 5) + 32;

  fahrenheit = fahrenheit.toFixed(0);
  return `${fahrenheit} \u2109`;
};

export const timeFormater = (time) => {
  const date = new Date(time);

  return date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const dataTransform = ({ current, forecast, location }) => {
  const climaPorHora = forecast.forecastday[0].hour.map((f) => ({
    temp: f.temp_c,
    cloud: f.cloud,
    rainChance: f.chance_of_rain,
    prec: f.precip_mm,
    hume: f.humidity,
    time: f.time,
    id: f.time_epoch,
    icon: f.condition.icon,
    code: f.condition.code,
    feel: f.feelslike_c,
    isDay: f.is_day,
  }));

  const climaActual = {
    id: current.last_updated_epoch,
    country: location.country,
    city: location.name,
    temp: current.temp_c,
    max: forecast.forecastday[0].day.maxtemp_c,
    min: forecast.forecastday[0].day.mintemp_c,
    avg: forecast.forecastday[0].day.avgtemp_c,
    prec: current.precip_mm,
    feel: current.feelslike_c,
    hume: forecast.forecastday[0].day.avghumidity,
    icon: forecast.forecastday[0].day.condition.icon,
    code: forecast.forecastday[0].day.condition.code,
    isDay: current.is_day,
    time: current.last_updated,
  };

  const climaSeleccionado = getCurrentTime(climaActual, climaPorHora);

  return {
    climaActual,
    climaPorHora,
    climaSeleccionado,
  };
};

const getCurrentTime = (climaActual, climaPorHora = []) => {
  return climaPorHora.find((c) => {
    console.log(c);
    const t1 = new Date(climaActual.time);
    const t2 = new Date(c.time);

    console.log(t1.getHours(), t2.getHours());

    return t1.getHours() === t2.getHours();
  });
};

export const getGradientBgByWeather = (code = 1006, isDay = 1) => {
  const arrClear = [1000, 1003];
  const arrRain = [
    1006, 1009, 1030, 1063, 1087, 1135, 1150, 1153, 1180, 1183, 1186, 1189,
    1192, 1195, 1240, 1243, 1246, 1279, 1276,
  ];
  const arrSnow = [
    1066, 1069, 1072, 1114, 1117, 1135, 1168, 1171, 1198, 1201, 1204, 1207,
    1210, 1216, 1219, 1222, 1225, 1237, 1249, 1252, 1255, 1258, 1261, 1264,
    1279, 1282,
  ];

  let css = "";

  if (arrClear.includes(code)) {
    if (isDay === 1) {
      css += "from-sky-500";
    } else {
      css += "from-sky-900";
    }
  }

  if (arrRain.includes(code)) {
    css += "from-gray-500";
  }

  if (arrSnow.includes(code)) {
    if (isDay === 1) {
      css += "from-teal-400";
    } else {
      css += "from-teal-800";
    }
  }

  return css;
};

export const getBgImg = (code, isDay = 1) => {
  const arrClear = [1000, 1003];
  const arrRain = [
    1006, 1009, 1030, 1063, 1087, 1135, 1150, 1153, 1180, 1183, 1186, 1189,
    1192, 1195, 1240, 1243, 1246, 1279, 1276,
  ];
  const arrSnow = [
    1066, 1069, 1072, 1114, 1117, 1135, 1168, 1171, 1198, 1201, 1204, 1207,
    1210, 1216, 1219, 1222, 1225, 1237, 1249, 1252, 1255, 1258, 1261, 1264,
    1279, 1282,
  ];

  let css = "bg-soleado";

  if (arrClear.includes(code)) {
    if (isDay === 1) {
      css = "bg-soleado";
    } else {
      css = "bg-despejado";
    }
  }

  if (arrRain.includes(code)) {
    css = "bg-lluvia";
  }

  if (arrSnow.includes(code)) {
    if (isDay === 1) {
      css = "bg-nevandoDia";
    } else {
      css = "bg-nevandoNoche";
    }
  }

  return css;
};
