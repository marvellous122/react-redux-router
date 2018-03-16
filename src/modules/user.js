import axios from 'axios';

export const REQUEST_USER_INFO = 'REQUEST_USER_INFO';
export const GET_USER_INFO = 'GET_USER_INFO';

const initialState = {
  users: [
    "GrahamCampbell",
    "fabpot",
    "weierophinney",
    "rkh",
    "josh"
  ],
  loadUserInfo: false,
  userProfile: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_USER_INFO:
      return {
        ...state,
        loadUserInfo: true
      }

    case GET_USER_INFO:
      return {
        ...state,
        userProfile: action.payload
      }

    default:
      return state
  }
}

export const getUserInfo = (username) => {
  return dispatch => {
    axios.get(`https://api.github.com/users/${username}`)
    .then(response => {
      dispatch({
        type: GET_USER_INFO,
        payload: response.data
      });
    })
  }
}
