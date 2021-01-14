import axiosTodos from './axiosTodos'
import axiosUsers from './axiosUsers'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  axiosTodos: axiosTodos,
  axiosUsers: axiosUsers
})

export default allReducers