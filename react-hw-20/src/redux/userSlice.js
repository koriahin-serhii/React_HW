import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'smith@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
  ],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

export default userSlice.reducer
