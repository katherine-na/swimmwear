import { combineReducers } from 'redux';
import counterReducer from './reducer'; // Asegúrate de que la ruta sea correcta

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
