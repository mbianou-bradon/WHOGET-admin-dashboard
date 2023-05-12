import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface userStateType {
  user : {}
}

const initialState : userStateType = {
  user: {},
}

export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        userAuth: ( state, action ) => {
            state.user = action.payload
        }
    }
})

export const { userAuth } = userSlice.actions

export default userSlice.reducer