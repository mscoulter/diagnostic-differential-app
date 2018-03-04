import {DIAGNOSIS_CHANGE} from './homeActions'

const initialState = {}

export default (state = initialState, action) => {

  switch (action.type) {
    case DIAGNOSIS_CHANGE:
      return {
        ...state,
        clinicalFeatures: action.payload.clinicalFeatures,
        diagnosis: action.payload.diagnosis
      }

    default:
      return state
  }
}
