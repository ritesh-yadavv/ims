import { configureStore } from '@reduxjs/toolkit'
import profileSlice from '../slices/profileSlice'
import createEmployeeAdminSlice from "../slices/createEmployeeAdminSlice"
import getEmployeeDataAdminSlice from "../slices/getEmployeeDataAdminSlice"
import createEmployeeHrSlice from '../slices/createEmployeeHr'
import employeeProfileSlice from "../slices/employeeProfileSlice"

export const store = configureStore({
  reducer: {
    profile: profileSlice,
    employeeProfile:employeeProfileSlice,
    createEmployeeAdmin: createEmployeeAdminSlice,
    getEmployeeData: getEmployeeDataAdminSlice,
    createEmployeeHr: createEmployeeHrSlice
  },
})