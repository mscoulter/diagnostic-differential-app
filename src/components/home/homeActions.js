import data from '../../data'
import {formatText} from '../helpers/formatHelper'

//ACTION TYPES
export const ADD_DIAGNOSIS = 'add_diagnosis';
export const ADD_PROBLEM = 'add_problem';
export const CHANGE_FREE_TEXT = 'change_free_text';
export const CHECKBOX_CLICK = 'checkbox_click';
export const DIAGNOSIS_CHANGE = 'diagnosis_change';
export const MOVE_DIAGNOSIS_UP = 'move_diagnosis_up';
export const MOVE_DIAGNOSIS_DOWN = 'move_diagnosis_down';
export const MOVE_PROBLEM_UP = 'move_problem_up';
export const MOVE_PROBLEM_DOWN = 'move_problem_down';
export const REMOVE_DIAGNOSIS = 'remove_diagnosis';
export const REMOVE_PROBLEM = 'remove_problem';
export const TOGGLE_DISPLAY = 'toggle_display';

export const addDiagnosis = (event, payload) => {
    return {
        type: ADD_DIAGNOSIS,
        payload: payload.problemIndex
    }
};


export const addProblem = (event, payload) => {
    return {
        type: ADD_PROBLEM,
        payload: payload
    }
};


export const changeFreeText = (event, payload) => {
    return {
        type: CHANGE_FREE_TEXT,
        payload: {
            diagnosisIndex: payload.diagnosisIndex,
            problemIndex: payload.problemIndex,
            value: payload.value
        }
    }

};

export const diagnosisChange = (event, payload) => {
    const diagnosis = payload.value;
    const diagnosisIndex = parseInt(payload.diagnosisIndex);
    const problemIndex = parseInt(payload.problemIndex);
    const cleanText = formatText(diagnosis);
    let clinicalFeatures;
    let relatedDiagnoses;
    let leftSymptoms;
    let rightSymptoms;
    let checkBoxes;
    if (data[cleanText]) {
        clinicalFeatures = data[cleanText].clinical_features;
        relatedDiagnoses = data[cleanText].relatedDiagnoses;
        leftSymptoms = clinicalFeatures.slice().splice(0, Math.ceil(clinicalFeatures.length / 2));
        rightSymptoms = clinicalFeatures.slice().splice(Math.floor(clinicalFeatures.length / 2) - (clinicalFeatures.length % 2 === 0 ? 3 : 2), clinicalFeatures.length);
        checkBoxes = {};
        leftSymptoms.forEach((symptom, index) => {
            checkBoxes[`${index}_column1`] = false;
        });
        rightSymptoms.forEach((symptom, index) => {
            checkBoxes[`${index}_column2`] = false;
        });
    }

    return {
        type: DIAGNOSIS_CHANGE,
        payload: {
            diagnosis,
            checkBoxes,
            clinicalFeatures,
            diagnosisIndex,
            problemIndex,
            relatedDiagnoses,
        }
    }
};

export const handleCheck = (event, payload) => {

    const boxValues = {
        diagnosisIndex: payload.diagnosisIndex,
        problemIndex: payload.problemIndex,
        field: payload.name,
        checked: payload.checked
    };
    return {
        type: CHECKBOX_CLICK,
        payload: boxValues
    }
};

export const moveDown = (event, payload) => {
    if(payload.diagnosisIndex) {
        return {
            type: MOVE_DIAGNOSIS_DOWN,
            payload: {
                problemIndex: payload.problemIndex,
                diagnosisIndex: payload.diagnosisIndex,
            }
        }
    }
    return {
        type: MOVE_PROBLEM_DOWN,
        payload: {
            problemIndex: payload.problemIndex,
        }
    }
};

export const moveUp = (event, payload) => {
    if(payload.diagnosisIndex) {
        return {
            type: MOVE_DIAGNOSIS_UP,
            payload: {
                problemIndex: payload.problemIndex,
                diagnosisIndex: payload.diagnosisIndex,
            }
        }
    }
    return {
        type: MOVE_PROBLEM_UP,
        payload: {
            problemIndex: payload.problemIndex,
        }
    }
};

export const removeDiagnosis = (event, payload) => {

    return {
        type: REMOVE_DIAGNOSIS,
        payload: {
            problemIndex: payload.problemIndex,
            diagnosisIndex: payload.diagnosisIndex,
        }
    }
};

export const removeProblem = (event, payload) => {

    return {
        type: REMOVE_PROBLEM,
        payload: {
            problemIndex: payload.problemIndex,
        }
    }
};

export const toggleDisplay = (problemIndex, diagnosisIndex) => {

    return {
        type: TOGGLE_DISPLAY,
        payload: {
            problemIndex,
            diagnosisIndex
        }
    }
};

