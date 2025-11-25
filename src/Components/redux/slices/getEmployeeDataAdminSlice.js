import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  AllEmployeeData: null,
};

export const getEmployeeDataAdminSlice = createSlice({
  name: 'getEmployeeDataAdmin',
  initialState,
  reducers: {
    setAllEmployeeData: (state, action) => {
    //   console.log("getEmployeeDataAdmin from redux slice", action.payload);
      // If employeeData is null, initialize it as an empty object
      if (state.AllEmployeeData === null) {
        state.AllEmployeeData = {};
      }
      // Merge the new data with the existing employeeData
      state.AllEmployeeData = action.payload
     
    },
    
  },
});

export const { setAllEmployeeData } = getEmployeeDataAdminSlice.actions;
export default getEmployeeDataAdminSlice.reducer;
