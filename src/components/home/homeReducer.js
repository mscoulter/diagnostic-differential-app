import {
    ADD_DIAGNOSIS,
    ADD_PROBLEM,
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
    let newProblemList;
    let diagnosis;
    switch (action.type) {
        case ADD_DIAGNOSIS:
            newProblemList = [...state.problemList];
            newProblemList[action.payload].diagnosisList.push({});

            return {
                ...state,
                problemList: newProblemList
            };
        case ADD_PROBLEM:
            newProblemList = [...state.problemList];
            newProblemList.push({});

            return {
                ...state,
                problemList: newProblemList
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
            newProblemList[action.payload.problemIndex]
                .diagnosisList[action.payload.diagnosisIndex] = data;

            return {
                ...state,
                problemList: newProblemList
            };

        case CHECKBOX_CLICK:
            newProblemList = [...state.problemList];
            newProblemList[action.payload.problemIndex]
                .diagnosisList[action.payload.diagnosisIndex]
                .checkBoxes[action.payload.field] = action.payload.checked;

            return {
                ...state,
                diagnosisList: newProblemList

            };
        case CHANGE_FREE_TEXT:
            newProblemList = [...state.problemList];
            diagnosis = newProblemList[action.payload.problemIndex].diagnosisList[action.payload.diagnosisIndex];
            diagnosis.freeText = action.payload.value;

            return {
                ...state,
                problemList: newProblemList

            };
        case REMOVE_DIAGNOSIS:
            newProblemList = [...state.problemList];
            newProblemList[action.payload.problemIndex].diagnosisList.splice(action.payload.diagnosisIndex, 1);

            return{
                ...state,
                problemList: newProblemList
            };

        case TOGGLE_DISPLAY:
            newProblemList = [...state.problemList];
            diagnosis = newProblemList[action.payload.problemIndex].diagnosisList[action.payload.diagnosisIndex];
            diagnosis.firstOpen = false;
            diagnosis.showDetail = diagnosis.showDetail === undefined ? !diagnosis.clinicalFeatures : !diagnosis.showDetail;

            return {
                ...state,
                problemList: newProblemList

            };

        default:
            return state
    }
}
