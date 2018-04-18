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
        diagnosisList: []
    }],

};

export default (state = initialState, action) => {
    let newProblemList;
    let diagnosis;
    let diagnosisList;
    let diagnosis_index;
    let problem_index;
    switch (action.type) {
        case ADD_DIAGNOSIS:
            newProblemList = [...state.problemList];
            newProblemList[action.payload].diagnosisList.push({});

            return {
                problemList: newProblemList
            };
        case ADD_PROBLEM:
            newProblemList = [...state.problemList];
            newProblemList.push({diagnosisList: []});

            return {
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
            newProblemList[action.payload.problem_index]
                .diagnosisList[action.payload.diagnosis_index] = data;

            return {
                problemList: newProblemList
            };

        case CHECKBOX_CLICK:
            newProblemList = [...state.problemList];
            newProblemList[action.payload.problem_index]
                .diagnosisList[action.payload.diagnosis_index]
                .checkBoxes[action.payload.field] = action.payload.checked;

            return {
                problemList: newProblemList

            };

        case CHANGE_FREE_TEXT:
            newProblemList = [...state.problemList];
            diagnosis = newProblemList[action.payload.problem_index].diagnosisList[action.payload.diagnosis_index];
            diagnosis.freeText = action.payload.value;

            return {
                ...state,
                problemList: newProblemList

            };

        case MOVE_DIAGNOSIS_DOWN:
            newProblemList = [...state.problemList];
            diagnosis_index = action.payload.diagnosis_index;
            diagnosisList = newProblemList[action.payload.problem_index].diagnosisList;
            if(diagnosisList[diagnosis_index+1]){
                arrayMove(diagnosisList, diagnosis_index, diagnosis_index+1);
            }

            return {
                problemList: newProblemList

            };

        case MOVE_DIAGNOSIS_UP:
            newProblemList = [...state.problemList];
            diagnosis_index = action.payload.diagnosis_index;
            diagnosisList = newProblemList[action.payload.problem_index].diagnosisList;
            if(diagnosisList[diagnosis_index-1]){
                arrayMove(diagnosisList, diagnosis_index, diagnosis_index-1);
            }

            return {
                problemList: newProblemList

            };

        case MOVE_PROBLEM_DOWN:
            newProblemList = [...state.problemList];
            problem_index = action.payload.problem_index;
            if(newProblemList[problem_index+1]){
                arrayMove(newProblemList, problem_index, problem_index+1);
            }

            return {
                problemList: newProblemList

            };

        case MOVE_PROBLEM_UP:
            newProblemList = [...state.problemList];
            problem_index = action.payload.problem_index;
            if(newProblemList[problem_index-1]){
                arrayMove(newProblemList, problem_index, problem_index-1);
            }

            return {
                problemList: newProblemList

            };

        case PROBLEM_CHANGE:
            newProblemList = [...state.problemList];
            newProblemList[action.payload.problem_index][action.payload.problemName] = action.payload.value;

            return {
                problemList: newProblemList

            };

        case REMOVE_DIAGNOSIS:
            newProblemList = [...state.problemList];
            newProblemList[action.payload.problem_index].diagnosisList.splice(action.payload.diagnosis_index, 1);

            return {
                problemList: newProblemList
            };

        case REMOVE_PROBLEM:
            newProblemList = [...state.problemList];
            newProblemList.splice(action.payload.problem_index, 1);

            return {
                problemList: newProblemList
            };

        case TOGGLE_DISPLAY:
            newProblemList = [...state.problemList];
            diagnosis = newProblemList[action.payload.problem_index].diagnosisList[action.payload.diagnosis_index];
            diagnosis.firstOpen = false;
            diagnosis.showDetail = diagnosis.showDetail === undefined ? !diagnosis.clinicalFeatures : !diagnosis.showDetail;

            return {
                problemList: newProblemList

            };

        default:
            return state
    }
}
