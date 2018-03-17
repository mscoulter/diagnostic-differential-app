import {
    DIAGNOSIS_CHANGE,
    CHECKBOX_CLICK,
    CHANGE_FREE_TEXT,
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
        case CHANGE_FREE_TEXT:
            let x =action.payload
            return {
                ...state,
                freeText: action.payload,
            };

        default:
            return state
    }
}
