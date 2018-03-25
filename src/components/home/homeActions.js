import data from '../../data'
import {formatText} from '../helpers/formatHelper'

//ACTION TYPES
export const CHANGE_FREE_TEXT = 'change_free_text';
export const CHECKBOX_CLICK = 'checkbox_click';
export const DIAGNOSIS_CHANGE = 'diagnosis_change';

export const addDiagnosis = (payload) => {
    return payload
};


export const changeFreeText = (event, payload) => {
    return {
        type: CHANGE_FREE_TEXT,
        payload: payload.value
    }

};

export const diagnosisChange = (payload) => {
    const diagnosis = payload.target.value;
    const index = parseInt(payload.target.id);
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
            index,
            relatedDiagnoses,
        }
    }
};

export const handleCheck = (event, payload) => {

    const boxValues = {
        [payload.name]: payload.checked
    };
    return {
        type: CHECKBOX_CLICK,
        payload: boxValues
    }
};

