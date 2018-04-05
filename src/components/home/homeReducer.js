import {arrayMove} from './reducerHelper'
import {
    ADD_DIAGNOSIS,
    ADD_PROBLEM,
    CHANGE_FREE_TEXT,
    CHECKBOX_CLICK,
    DIAGNOSIS_CHANGE,
    MOVE_DIAGNOSIS_DOWN,
    MOVE_DIAGNOSIS_UP,
    MOVE_PROBLEM_DOWN,
    MOVE_PROBLEM_UP,
    PROBLEM_CHANGE,
    REMOVE_DIAGNOSIS,
    REMOVE_PROBLEM,
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
    let diagnosisList;
    let diagnosisIndex;
    let problemIndex;
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
            newProblemList.push({diagnosisList: []});

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

        case MOVE_DIAGNOSIS_DOWN:
            newProblemList = [...state.problemList];
            diagnosisIndex = action.payload.diagnosisIndex;
            diagnosisList = newProblemList[action.payload.problemIndex].diagnosisList;
            if(diagnosisList[diagnosisIndex+1]){
                arrayMove(diagnosisList, diagnosisIndex, diagnosisIndex+1);
            }

            return {
                ...state,
                problemList: newProblemList

            };

        case MOVE_DIAGNOSIS_UP:
            newProblemList = [...state.problemList];
            diagnosisIndex = action.payload.diagnosisIndex;
            diagnosisList = newProblemList[action.payload.problemIndex].diagnosisList;
            if(diagnosisList[diagnosisIndex-1]){
                arrayMove(diagnosisList, diagnosisIndex, diagnosisIndex-1);
            }

            return {
                ...state,
                problemList: newProblemList

            };

        case MOVE_PROBLEM_DOWN:
            newProblemList = [...state.problemList];
            problemIndex = action.payload.problemIndex;
            if(newProblemList[problemIndex+1]){
                arrayMove(newProblemList, problemIndex, problemIndex+1);
            }

            return {
                ...state,
                problemList: newProblemList

            };

        case MOVE_PROBLEM_UP:
            newProblemList = [...state.problemList];
            problemIndex = action.payload.problemIndex;
            if(newProblemList[problemIndex-1]){
                arrayMove(newProblemList, problemIndex, problemIndex-1);
            }

            return {
                ...state,
                problemList: newProblemList

            };

        case PROBLEM_CHANGE:
            newProblemList = [...state.problemList];
            newProblemList[action.payload.problemIndex][action.payload.problemName] = action.payload.value;

            return {
                ...state,
                problemList: newProblemList

            };

        case REMOVE_DIAGNOSIS:
            newProblemList = [...state.problemList];
            newProblemList[action.payload.problemIndex].diagnosisList.splice(action.payload.diagnosisIndex, 1);

            return {
                ...state,
                problemList: newProblemList
            };

        case REMOVE_PROBLEM:
            newProblemList = [...state.problemList];
            newProblemList.splice(action.payload.problemIndex, 1);

            return {
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
