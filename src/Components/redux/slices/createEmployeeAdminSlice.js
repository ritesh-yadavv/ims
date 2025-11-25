import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employeeData: null,
};

export const createEmployeeAdminSlice = createSlice({
  name: 'createEmployeeAdmin',
  initialState,
  reducers: {
    setEmployeeData: (state, action) => {
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

export const { setEmployeeData } = createEmployeeAdminSlice.actions;
export default createEmployeeAdminSlice.reducer;
