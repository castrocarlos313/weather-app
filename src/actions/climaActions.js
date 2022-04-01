import axios from "axios";
import { dataTransform } from "../helpers";
import {
  CAMBIAR_TIEMPO_DETALLE,
  CAMBIAR_UNIDAD_TERMOMETRICA,
  FETCHING,
  FETCHING_ERROR,
  FETCHING_SUCCESS,
} from "../types";

export function obtenerTiempo(busqueda) {
  return async (dispatch) => {
    dispatch(fetching());
    try {
      const { data } = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${busqueda}&days=1&aqi=no&alerts=no&lang=es`
      );

      const dt = dataTransform(data);

      dispatch(fetchingSuccess(dt));
    } catch (error) {
      console.log(error);
      dispatch(fetchingError());
    }
  };
}

const fetching = () => {
  return { type: FETCHING };
};

const fetchingError = () => {
  return {
    type: FETCHING_ERROR,
  };
};

const fetchingSuccess = (data) => {
  return {
    type: FETCHING_SUCCESS,
    payload: data,
  };
};

export function seleccionarTiempo(tiempo) {
  return (dispatch) => {
    dispatch(cambiarTiempoSelecionado(tiempo));
  };
}

const cambiarTiempoSelecionado = (tiempo) => {
  return {
    type: CAMBIAR_TIEMPO_DETALLE,
    payload: tiempo,
  };
};

export function cambiarUnidadMetrica() {
  return (dispatch) => dispatch(cambiarUnidad());
}

const cambiarUnidad = () => {
  return {
    type: CAMBIAR_UNIDAD_TERMOMETRICA,
  };
};
