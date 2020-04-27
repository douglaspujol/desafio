import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'favoritsCharacters',
      storage,
      whitelist: ['favoriteCharacters'],
    },
    reducers
  );

  return persistedReducer;
};
