import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import homeReducer from './components/home/homeReducer'

export default combineReducers({
  router: routerReducer,
  homeReducer
})
