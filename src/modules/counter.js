import data from '../data'
export const INCREMENT = 'counter/INCREMENT'
export const DIAGNOSIS_CHANGE= 'diagnosis_change'

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
}

export default (state = initialState, action) => {
  switch (action.type) {

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    case DIAGNOSIS_CHANGE:
      return {
        ...state,
        diagnosis: action.payload
      }

    default:
      return state
  }
}

export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT
    })
  }
}

export const diagnosisChange = (payload) => {
  const input = payload.target.value
  const formattedInput = input.replace(/\s+/g,"_").replace(/'/g,'');
  console.log(formattedInput)

  return dispatch => {
    dispatch({
      type: DIAGNOSIS_CHANGE,

    })
  }

  const clinicalFeatures = 1
  return {
    type: DIAGNOSIS_CHANGE,
    payload
  }
}
