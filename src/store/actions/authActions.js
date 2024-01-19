import userService from '../../services/userService';

export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});

export const logout = () => ({
  type: 'LOGOUT',
});

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await userService.login(email, password);
    dispatch(loginSuccess(response.data));
    localStorage.setItem('user', JSON.stringify(response.data));
  } catch (error) {
    console.error(error);
  }
};
