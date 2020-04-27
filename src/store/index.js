import { persistStore } from 'redux-persist';

import createStore from './createStore';
import persistReducers from './persistReducer';

import rootReducer from './modules/rootReducer';

const store = createStore(persistReducers(rootReducer));
const persistor = persistStore(store);

export { store, persistor };
