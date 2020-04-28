import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'marvelApi',
      storage,
      whitelist: ['favoriteCharacters'],
    },
    reducers
  );

  return persistedReducer;
};
