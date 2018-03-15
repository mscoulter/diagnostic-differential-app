import {DIAGNOSIS_CHANGE} from './homeActions'

const initialState = {};

export default (state = initialState, action) => {

  switch (action.type) {
    case DIAGNOSIS_CHANGE:
      return {
        ...state,
          diagnosis: action.payload.diagnosis,
          clinicalFeatures: action.payload.clinicalFeatures,
          relatedDiagnoses: action.payload.relatedDiagnoses,
      };

    default:
      return state
  }
}
