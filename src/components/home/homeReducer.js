import data from '../../data'
import {DIAGNOSIS_CHANGE} from './homeActions'

const initialState = {}

export default (state = initialState, action) => {

  switch (action.type) {
    case DIAGNOSIS_CHANGE:
      return {
        ...state,
        clinical_features: action.payload
      }

    default:
      return state
  }
}
