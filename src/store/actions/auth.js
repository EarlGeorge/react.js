const LOGIN_ERROR = 'LOGIN_ERROR';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_ERROR = 'SIGNUP_ERROR';
const FACEBOOK_PROVIDER_SUCCESS = 'FACEBOOK_PROVIDER_SUCCESS';
const GITHUB_PROVIDER_SUCCESS = 'GITHUB_PROVIDER_SUCCESS';
const GOOGLE_PROVIDER_SUCCESS = 'GOOGLE_PROVIDER_SUCCESS';
const TWITTER_PROVIDER_SUCCESS = 'TWITTER_PROVIDER_SUCCESS';


export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then((email) => {
      dispatch({ type: LOGIN_SUCCESS, payload : email});
    }).catch((err) => {
      dispatch({ type: LOGIN_ERROR, err });
    });
  }
}

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: SIGNOUT_SUCCESS })
    });
  }
}

export const resetPasswordEmail = (res) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
   
   firebase.auth().sendPasswordResetEmail(
     res
    ).then(function() {
      alert("Please check your email " + res + " for instructions ");
      console.log(res + '// Password reset send.')
    })
    .catch(function(error) {
      // Error occurred. Inspect error.code.
      alert("Occurred" + ' ' + error + "email not found");
    });
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email, 
      newUser.password
    ).then(resp => {
      return firestore.collection('users').doc(resp.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
      });
    }).then(() => {
      dispatch({ type: SIGNUP_SUCCESS });
    }).catch((err) => {
      dispatch({ type: SIGNUP_ERROR, err});
    });
  }
}

// Google, facebook, github, twitter --- auth :)

export const loginWithProvider = (provider) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
   
    const facebook = () => {
      let provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider
        ).then((user) => {
          dispatch({ type: FACEBOOK_PROVIDER_SUCCESS, payload: user});
        }).catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
        alert("Facebook sign in error: " + errorMessage + errorCode + credential + email);
      });
    }

    const github = () => {
      let provider = new firebase.auth.GithubAuthProvider();
      firebase.auth().signInWithPopup(provider
        ).then((user) => {
          dispatch({ type: GITHUB_PROVIDER_SUCCESS, payload: user});
        }).catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
        alert("Github sign in error: " + errorMessage + errorCode + credential + email);
      });
    }

    const google = () => {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider
        ).then((user) => {
          dispatch({ type: GOOGLE_PROVIDER_SUCCESS, payload: user});
        }).catch(function(error) {
          const errorMessage = error.message;
          alert("Google sign in error: " + errorMessage);
        });
    }

    const twitter = () => {
      let provider = new firebase.auth.TwitterAuthProvider();
      firebase.auth().signInWithPopup(provider
        ).then((user) => {
          dispatch({ type: TWITTER_PROVIDER_SUCCESS, payload: user});
        }).catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
        alert("Twitter sign in error: " + errorMessage + errorCode + credential + email);
      });
    }

    switch (provider) {
      case 'facebook':
        return facebook()
      case 'github':
        return github()
      case 'google':
        return google()
      case 'twitter':
        return twitter()
      default:
        throw new Error('Provider is not supported!!!');
    };
  }
}







