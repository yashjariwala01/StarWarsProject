import { createStore,applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';
import { combineReducers } from 'redux';
import coursesReducer from './Reducers/courseReducer';
import detailsReducer from './Reducers/detailsReducer';


const persistConfig = {
    key: 'root',
    storage,
  };

const rootReducer = combineReducers({
    planets:coursesReducer,
    planetDetails: detailsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer,applyMiddleware(thunk))


export const persistor = persistStore(store);