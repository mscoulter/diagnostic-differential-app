import data from '../../data'
import {DIAGNOSIS_CHANGE} from './homeActions'

const initialState = {}

export default (state = initialState, action) => {
  console.log("helllllooooo")
  switch (action.type) {
    case DIAGNOSIS_CHANGE:
      console.log(action.payload);
      return {
        ...state,
        diagnosis: action.payload
      }

    default:
      return state
  }
}
