import homeReducer from '../homeReducer';
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
} from '../homeActions'

describe('homeReducer', () => {
    let state;
    beforeEach(() => {
        state = {
            problemList: [{
                diagnosisList: [{}]
            }]
        }
    });

    it('ADD_DIAGNOSIS', () => {

        const action = {
            payload: 0,
            type: ADD_DIAGNOSIS
        };

        const expectedState = {
            problemList: [{
                diagnosisList: [{}, {}]
            }]
        };

        const output = homeReducer(state, action);
        expect(output).toEqual(expectedState)
    });

    it('ADD_PROBLEM', () => {

        const action = {
            type: ADD_PROBLEM
        };

        const expectedState = {
            problemList: [
                {diagnosisList: [{}]},
                {diagnosisList: []}]
        };

        const output = homeReducer(state, action);
        expect(output).toEqual(expectedState)
    });

    it('ADD_PROBLEM', () => {

        const action = {
            type: ADD_PROBLEM
        };

        const expectedState = {
            problemList: [
                {diagnosisList: [{}]},
                {diagnosisList: []}]
        };

        const output = homeReducer(state, action);
        expect(output).toEqual(expectedState)
    });

    it('DIAGNOSIS_CHANGE', () => {

        const action = {
            payload: {
                diagnosis: "cancer",
                clinicalFeatures: "lots",
                relatedDiagnoses: "other",
                checkBoxes: {},
                problem_index: 0,
                diagnosis_index: 0,
            },
            type: DIAGNOSIS_CHANGE
        };

        const expectedState = {
            problemList: [{
                diagnosisList: [
                    {
                        diagnosis: "cancer",
                        clinicalFeatures: "lots",
                        relatedDiagnoses: "other",
                        checkBoxes: {},
                        firstOpen: true
                    }
                ]
            }]
        };

        const output = homeReducer(state, action);
        expect(output).toEqual(expectedState)
    });
});
