// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import userReducer from './slice'; // Your user slice

// Set up the persist configuration
const persistConfig = {
  key: 'root',
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, userReducer);

// Create and configure the Redux store
const store = configureStore({
  reducer: {
    user: persistedReducer, // Use the persisted reducer
  },
});

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };
