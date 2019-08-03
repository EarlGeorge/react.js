const LOGIN_ERROR = 'LOGIN_ERROR';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_ERROR = 'SIGNUP_ERROR';
const FACEBOOK_PROVIDER_SUCCESS = 'FACEBOOK_PROVIDER_SUCCESS';
const GITHUB_PROVIDER_SUCCESS = 'GITHUB_PROVIDER_SUCCESS';
const GOOGLE_PROVIDER_SUCCESS = 'GOOGLE_PROVIDER_SUCCESS';
const TWITTER_PROVIDER_SUCCESS = 'TWITTER_PROVIDER_SUCCESS';

const initState = {
  myEmail: [],
  provider: [],
  authError: null,
}

const authReducer = (state = initState, action) => {
  switch(action.type){

    case LOGIN_SUCCESS: {
      console.log(LOGIN_SUCCESS)
      return {
        ...state,
        authError: null, 
        myEmail:action.payload
      }
    }

    case LOGIN_ERROR: {
      console.log(LOGIN_ERROR)
      return {
        ...state,
        authError: 'Login failed'
      }
    }
   
    case SIGNOUT_SUCCESS: {
      console.log(SIGNOUT_SUCCESS)
      return {
        ...state,
      };
    }
  
    case SIGNUP_SUCCESS: {
      console.log(SIGNUP_SUCCESS)
      return {
        ...state,
        authError: null 
      }
    }
    
    case SIGNUP_ERROR: {
      console.log(SIGNUP_ERROR)
      return {
        ...state,
        authError: action.err.message
      }
    }

    case FACEBOOK_PROVIDER_SUCCESS: {
      console.log(FACEBOOK_PROVIDER_SUCCESS)
      return {
        ...state,
        provider:action.payload
      }
    }

    case GITHUB_PROVIDER_SUCCESS: {
      console.log(GITHUB_PROVIDER_SUCCESS)
      return {
        ...state, 
        provider:action.payload
      }
    }

    case GOOGLE_PROVIDER_SUCCESS: {
      console.log(GOOGLE_PROVIDER_SUCCESS)
      return {
        ...state, 
        provider:action.payload
      }
    }

    case TWITTER_PROVIDER_SUCCESS: {
      console.log(TWITTER_PROVIDER_SUCCESS)
      return {
        ...state,
        provider:action.payload
      }
    };

    default:
      return state;
  }

};

export default authReducer;


