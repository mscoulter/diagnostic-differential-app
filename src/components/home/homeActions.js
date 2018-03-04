import data from '../../data'
import {formatText} from '../helpers/formatHelper'

//ACTION TYPES
export const DIAGNOSIS_CHANGE= 'diagnosis_change'

export const diagnosisChange = (payload) => {
  const cleanText = formatText(payload.target.value);
  let symptoms;
  if(data[cleanText]){
    symptoms = data[cleanText].symptoms
  }

  return  {
      type: DIAGNOSIS_CHANGE,
      payload: symptoms
    }


}
