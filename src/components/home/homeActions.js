import data from '../../data'
import {formatText} from '../helpers/formatHelper'

//ACTION TYPES
export const DIAGNOSIS_CHANGE = 'diagnosis_change';
export const CHECKBOX_CLICK = 'checkbox_click';

export const diagnosisChange = (payload) => {
    const diagnosis = payload.target.value;
    const cleanText = formatText(diagnosis);
    let clinicalFeatures;
    let relatedDiagnoses;
    if (data[cleanText]) {
        clinicalFeatures = data[cleanText].clinical_features;
        relatedDiagnoses = data[cleanText].relatedDiagnoses;
    }

    return {
        type: DIAGNOSIS_CHANGE,
        payload: {diagnosis, clinicalFeatures, relatedDiagnoses}
    }
};

export const handleCheck = (event, payload) => {
    const boxValues = {
        name: payload.name,
        checked: payload.checked
    };
    return {
        type: CHECKBOX_CLICK,
        payload: boxValues
    }
};
