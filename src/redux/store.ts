import { configureStore } from "@reduxjs/toolkit";

import createSagaMiddleware from "@redux-saga/core";
import themeReducer from "./reducers/themeSlice";
import postsReducer from "./reducers/postSlice";
import rootSaga from "./sagas/rootSaga";
import authReducer  from "./reducers/authSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    theme: themeReducer,
    posts: postsReducer,
    auth: authReducer,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>;

export default store;