// store.ts
import { createStore } from 'redux';
import rootReducer from './reducers'; // Asegúrate de que la ruta sea correcta

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
