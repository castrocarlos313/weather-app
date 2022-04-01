/* eslint-disable indent */
import {
  CAMBIAR_TIEMPO_DETALLE,
  CAMBIAR_UNIDAD_TERMOMETRICA,
  FETCHING,
  FETCHING_ERROR,
  FETCHING_SUCCESS,
} from "../types";

const initialState = {
  climaActual: null,
  climaPorHora: [],
  climaSeleccionado: null,
  mensaje: "Busque una ciudad",
  error: true,
  loading: false,
  isCelsius: true,
};

const climaReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case FETCHING_SUCCESS:
      return {
        ...state,
        climaActual: action.payload.climaActual,
        climaPorHora: action.payload.climaPorHora,
        climaSeleccionado: action.payload.climaSeleccionado,
        loading: false,
      };
    case FETCHING_ERROR:
      return {
        ...state,
        mensaje: "No se pudo encontrar la ciudad",
        error: true,
        loading: false,
      };
    case CAMBIAR_TIEMPO_DETALLE:
      return {
        ...state,
        climaSeleccionado: action.payload,
      };
    case CAMBIAR_UNIDAD_TERMOMETRICA:
      return {
        ...state,
        isCelsius: !state.isCelsius,
      };
    default:
      return state;
  }
};

export default climaReducer;
