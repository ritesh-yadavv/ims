import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    employeeData: null,
  };

  export const createEmployeeHrSlice = createSlice({
    name: 'createEmployeeHr',
    initialState,
    reducers: {
      setEmployeeDataHr: (state, action) => {
        // console.log("setEmployeeData from redux slice", action.payload);
        // If employeeData is null, initialize it as an empty object
        if (state.employeeData === null) {
          state.employeeData = {};
        }
        // Merge the new data with the existing employeeData
        state.employeeData = {
          ...state.employeeData,
          ...action.payload,
        };
       
      },
      
    },
  });
  
  export const { setEmployeeDataHr } = createEmployeeHrSlice.actions;
  export default createEmployeeHrSlice.reducer;
