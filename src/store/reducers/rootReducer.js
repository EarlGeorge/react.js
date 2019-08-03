import { combineReducers } from 'redux'

import userAuthReducer from './auth'

import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: userAuthReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer
