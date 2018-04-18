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
export const PROBLEM_CHANGE = 'problem_change';
export const REMOVE_DIAGNOSIS = 'remove_diagnosis';
export const REMOVE_PROBLEM = 'remove_problem';
export const TOGGLE_DISPLAY = 'toggle_display';

export const addDiagnosis = (event, payload) => {
    return {
        type: ADD_DIAGNOSIS,
        payload: payload.problem_index
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
            diagnosis_index: payload.diagnosis_index,
            problem_index: payload.problem_index,
            value: payload.value
        }
    }

};

export const diagnosisChange = (event, payload) => {
    const diagnosis = payload.value;
    const diagnosis_index = parseInt(payload.diagnosis_index, 10);
    const problem_index = parseInt(payload.problem_index, 10);
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
            diagnosis_index,
            problem_index,
            relatedDiagnoses,
        }
    }
};

export const handleCheck = (event, payload) => {

    const boxValues = {
        diagnosis_index: payload.diagnosis_index,
        problem_index: payload.problem_index,
        field: payload.name,
        checked: payload.checked
    };
    return {
        type: CHECKBOX_CLICK,
        payload: boxValues
    }
};

export const moveDown = (event, payload) => {
    if(payload.diagnosis_index) {
        return {
            type: MOVE_DIAGNOSIS_DOWN,
            payload: {
                problem_index: payload.problem_index,
                diagnosis_index: payload.diagnosis_index,
            }
        }
    }
    return {
        type: MOVE_PROBLEM_DOWN,
        payload: {
            problem_index: payload.problem_index,
        }
    }
};

export const moveUp = (event, payload) => {
    if(payload.diagnosis_index) {
        return {
            type: MOVE_DIAGNOSIS_UP,
            payload: {
                problem_index: payload.problem_index,
                diagnosis_index: payload.diagnosis_index,
            }
        }
    }
    return {
        type: MOVE_PROBLEM_UP,
        payload: {
            problem_index: payload.problem_index,
        }
    }
};

export const problemChange = (event, payload) => {
    return {
        type: PROBLEM_CHANGE,
        payload: {
            problem_index: payload.problem_index,
            problemName: payload.name,
            value: payload.value,
        }
    }
};

export const removeDiagnosis = (event, payload) => {

    return {
        type: REMOVE_DIAGNOSIS,
        payload: {
            problem_index: payload.problem_index,
            diagnosis_index: payload.diagnosis_index,
        }
    }
};

export const removeProblem = (event, payload) => {

    return {
        type: REMOVE_PROBLEM,
        payload: {
            problem_index: payload.problem_index,
        }
    }
};

export const toggleDisplay = (problem_index, diagnosis_index) => {

    return {
        type: TOGGLE_DISPLAY,
        payload: {
            problem_index,
            diagnosis_index
        }
    }
};

