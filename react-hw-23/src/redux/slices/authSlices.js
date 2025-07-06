import { createSlice } from '@reduxjs/toolkit'

const savedUser = JSON.parse(localStorage.getItem('registeredUser'))

const initialState = {
  registerUser: savedUser || null,
  isAuthenticated: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action) => {
      state.registerUser = action.payload
      localStorage.setItem('registeredUser', JSON.stringify(action.payload))
    },
    login: (state, action) => {
      const email = action.payload.email
      const password = action.payload.password
      if (
        state.registerUser &&
        state.registerUser.email === email &&
        state.registerUser.password === password
      ) {
        state.isAuthenticated = true
        state.error = null
      } else {
        state.isAuthenticated = false
        state.error = 'Invalid email or password'
      }
    },
    logOut: (state) => {
      state.isAuthenticated = false
      state.error = null
    },
  },
})

export default authSlice.reducer
export const { register, login, logOut } = authSlice.actions
