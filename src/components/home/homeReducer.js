import {
    ADD_DIAGNOSIS,
    CHANGE_FREE_TEXT,
    CHECKBOX_CLICK,
    DIAGNOSIS_CHANGE,
    TOGGLE_DISPLAY,
} from './homeActions'

const initialState = {
    diagnosisList: [{}],
};

export default (state = initialState, action) => {
    let newList;
    switch (action.type) {
        case ADD_DIAGNOSIS:
            newList = [...state.diagnosisList];
            newList.push({});

            return {
                ...state,
                diagnosisList: newList
            };
        case DIAGNOSIS_CHANGE:

            const data = {
                diagnosis: action.payload.diagnosis,
                clinicalFeatures: action.payload.clinicalFeatures,
                relatedDiagnoses: action.payload.relatedDiagnoses,
                checkBoxes: action.payload.checkBoxes,
                firstOpen: true,
            };

            newList = Object.assign([...state.diagnosisList], {[action.payload.index]: data});

            return {
                ...state,
                diagnosisList: newList
            };

        case CHECKBOX_CLICK:
            newList = [...state.diagnosisList];
            newList[action.payload.index].checkBoxes[action.payload.field] = action.payload.checked;

            return {
                ...state,
                diagnosisList: newList

            };
        case CHANGE_FREE_TEXT:
            newList = [...state.diagnosisList];
            newList[action.payload.index].freeText = action.payload.value;

            return {
                ...state,
                diagnosisList: newList

            };
        case TOGGLE_DISPLAY:
            newList = [...state.diagnosisList];
            newList[action.payload].firstOpen = false;
            newList[action.payload].showDetail =
                newList[action.payload].showDetail === undefined ? !newList[action.payload].clinicalFeatures : !newList[action.payload].showDetail;

            return {
                ...state,
                diagnosisList: newList

            };

        default:
            return state
    }
}
