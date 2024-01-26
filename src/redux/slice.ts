import { createSlice } from '@reduxjs/toolkit'

interface MyObjectType {
  username: string
  password: string
}

const loginDetails: MyObjectType = {
  username: '',
  password: ''
}

const loginDetailsSlice = createSlice({
  name: 'loginDetails',
  initialState: loginDetails,
  reducers: {
    storeLoginData: (state: any, action) => {
      state.username = action.payload.username
      state.password = action.payload.password
    }
  }
})

export const storeLoginData = loginDetailsSlice.actions.storeLoginData

export default loginDetailsSlice.reducer
