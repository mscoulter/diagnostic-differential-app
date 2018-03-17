import {
    DIAGNOSIS_CHANGE,
    CHECKBOX_CLICK
} from './homeActions'

const initialState = {};

export default (state = initialState, action) => {

    switch (action.type) {
        case DIAGNOSIS_CHANGE:
            return {
                ...state,
                diagnosis: action.payload.diagnosis,
                clinicalFeatures: action.payload.clinicalFeatures,
                relatedDiagnoses: action.payload.relatedDiagnoses,
                checkBoxes: action.payload.checkBoxes,
            };
        case CHECKBOX_CLICK:

            return {
                ...state,
                checkBoxes: {...state.checkBoxes, ...action.payload}

            };

        default:
            return state
    }
}
