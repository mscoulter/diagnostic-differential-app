import {
    ADD_DIAGNOSIS,
    CHANGE_FREE_TEXT,
    CHECKBOX_CLICK,
    DIAGNOSIS_CHANGE,
    REMOVE_DIAGNOSIS,
    TOGGLE_DISPLAY,
} from './homeActions'

const initialState = {
    problemList: [{
        diagnosisList: [{}]
    }],

};

export default (state = initialState, action) => {
    let newDiagnosisList;
    let newProblemList;
    switch (action.type) {
        case ADD_DIAGNOSIS:
            newProblemList = [...state.diagnosisList];
            newProblemList.push({});

            return {
                ...state,
                diagnosisList: newProblemList
            };
        case DIAGNOSIS_CHANGE:
            const data = {
                diagnosis: action.payload.diagnosis,
                clinicalFeatures: action.payload.clinicalFeatures,
                relatedDiagnoses: action.payload.relatedDiagnoses,
                checkBoxes: action.payload.checkBoxes,
                firstOpen: true,
            };

            newProblemList = [...state.problemList];
            newProblemList[action.payload.problemIndex].diagnosisList[action.payload.diagnosisIndex] = data;

            return {
                ...state,
                problemList: newProblemList
            };

        case CHECKBOX_CLICK:
            newProblemList = [...state.diagnosisList];
            newProblemList[action.payload.index].checkBoxes[action.payload.field] = action.payload.checked;

            return {
                ...state,
                diagnosisList: newProblemList

            };
        case CHANGE_FREE_TEXT:
            newProblemList = [...state.diagnosisList];
            newProblemList[action.payload.index].freeText = action.payload.value;

            return {
                ...state,
                diagnosisList: newProblemList

            };
        case REMOVE_DIAGNOSIS:
            newProblemList = [...state.diagnosisList];
            newProblemList.splice(action.payload, 1);

            return{
                ...state,
                diagnosisList: newProblemList
            };

        case TOGGLE_DISPLAY:
            newProblemList = [...state.diagnosisList];
            newProblemList[action.payload].firstOpen = false;
            newProblemList[action.payload].showDetail =
                newProblemList[action.payload].showDetail === undefined ? !newProblemList[action.payload].clinicalFeatures : !newProblemList[action.payload].showDetail;

            return {
                ...state,
                diagnosisList: newProblemList

            };

        default:
            return state
    }
}
