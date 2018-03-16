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

            const newState = !state.checkBoxes ? [] : state.checkBoxes.filter(box=>{
                return box.name!==action.payload.name;
            });

            return {
                ...state,
                checkBoxes: [...newState, action.payload]
            };

        default:
            return state
    }
}
