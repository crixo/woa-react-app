export const userActions = {
  login,
  logout
};

function login(username, password) {
  return dispatch => {
    console.log(process.env.REACT_APP_USER + '@' + process.env.REACT_APP_PWD);
    const auth = process.env.REACT_APP_USER == username && process.env.REACT_APP_PWD == password;
    const msg = auth? '' : 'credenziali non valide';
    return dispatch({
      type: 'LOGIN',
      payload: {authenticated: auth, msg:msg}
    })
  }
}

function logout() {
  return dispatch => {
    return dispatch({
      type: 'LOGOUT',
      payload: {authenticated: false}
    })
  }
}