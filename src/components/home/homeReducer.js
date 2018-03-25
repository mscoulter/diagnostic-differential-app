import {
    DIAGNOSIS_CHANGE,
    CHECKBOX_CLICK,
    CHANGE_FREE_TEXT,
} from './homeActions'

const initialState = {
    diagnosisList: [{}]
};

export default (state = initialState, action) => {

    switch (action.type) {
        case DIAGNOSIS_CHANGE:
            return {
                ...state,
                ...state.diagnosisList[action.payload.index]= {
                    diagnosis: action.payload.diagnosis,
                    clinicalFeatures: action.payload.clinicalFeatures,
                    relatedDiagnoses: action.payload.relatedDiagnoses,
                    checkBoxes: action.payload.checkBoxes,
                }
            };
        case CHECKBOX_CLICK:  
            return {
                ...state,
                checkBoxes: {...state.checkBoxes, ...action.payload}

            };
        case CHANGE_FREE_TEXT:
            return {
                ...state,
                freeText: action.payload,
            };

        default:
            return state
    }
}
