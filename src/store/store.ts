// import { configureStore } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';
// import dashboardReducer from './dashboardSlice';
// import dashboardSaga from './dashboardSaga';

// const sagaMiddleware = createSagaMiddleware();

// const store = configureStore({
//   reducer: {
//     dashboard: dashboardReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
// });

// sagaMiddleware.run(dashboardSaga);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;

// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import dashboardReducer from './dashboardSlice';
import dashboardSaga from './dashboardSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(dashboardSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
