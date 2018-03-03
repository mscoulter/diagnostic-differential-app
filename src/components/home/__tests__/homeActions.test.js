import {diagnosisChange, DIAGNOSIS_CHANGE} from '../homeActions';

describe('diagnosisChange', ()=>{
  it('should call formatText with the target value', ()=>{

    const payload = {
      target: {
        value: "foodborne disease"
      }
    }

    const expectedSymptoms = [
        'nausea',
        'vomiting',
        'fever',
        'abdominal pain',
        'diarrhea'
    ]

    const output = diagnosisChange(payload)
    expect(output).toEqual({
        type: DIAGNOSIS_CHANGE,
        payload: expectedSymptoms
      })
  })
})
