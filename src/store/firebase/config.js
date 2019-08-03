import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'; 

// Replace with your own config
const config = {
  apiKey: "************************************",
  authDomain: "************************************",
  databaseURL: "************************************",
  projectId: "************************************",
  storageBucket: "************************************",
  messagingSenderId: "************************************",
  appId: "************************************"
}
firebase.initializeApp(config);

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(firebase, {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true}),
    reduxFirestore(firebase) 
  )
);

export default store

