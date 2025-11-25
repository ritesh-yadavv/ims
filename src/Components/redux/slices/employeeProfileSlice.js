import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employeeProfile:null,
  };


  export const employeeProfileSlice = createSlice({
    name: 'employeeprofile',
    initialState,
    reducers: {
      setEmployeeProfile: (state, action) => {
        // console.log("action",action.payload)
        state.employeeProfile=action.payload;
      },
    },
  });
  
  export const { setEmployeeProfile } = employeeProfileSlice.actions;
  export default employeeProfileSlice.reducer;
  
