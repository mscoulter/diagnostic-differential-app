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
        expect(output).toEqual(expectedState);
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
        expect(output).toEqual(expectedState);
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
        expect(output).toEqual(expectedState);
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
        expect(output).toEqual(expectedState);
    });

    it('CHECKBOX_CLICK', () => {
        state.problemList[0].diagnosisList[0].checkBoxes = [];

        const action = {
            payload: {
                field: 0,
                checked: true,
                problem_index: 0,
                diagnosis_index: 0,
            },
            type: CHECKBOX_CLICK
        };

        const expectedState = {
            problemList: [{
                diagnosisList: [
                    {
                        checkBoxes: [true],
                    }
                ]
            }]
        };

        const output = homeReducer(state, action);
        expect(output).toEqual(expectedState);
    });

    it('CHANGE_FREE_TEXT', () => {
        const action = {
            payload: {
                field: 0,
                value: "text here",
                problem_index: 0,
                diagnosis_index: 0,
            },
            type: CHANGE_FREE_TEXT
        };

        const expectedState = {
            problemList: [{
                diagnosisList: [
                    {
                        freeText: "text here",
                    }
                ]
            }]
        };

        const output = homeReducer(state, action);
        expect(output).toEqual(expectedState);
    });

    it('MOVE_DIAGNOSIS_DOWN', () => {
        state.problemList[0].diagnosisList = [
            {one: "one"},
            {two: "two"}
        ];

        const action = {
            payload: {
                diagnosis_index: 0,
                problem_index: 0,
            },
            type: MOVE_DIAGNOSIS_DOWN
        };

        const expectedState = {
            problemList: [{
                diagnosisList: [
                    {two: "two"},
                    {one: "one"}
                ]
            }]
        };

        const output = homeReducer(state, action);
        expect(output).toEqual(expectedState);
    });

    it('MOVE_DIAGNOSIS_UP', () => {
        state.problemList[0].diagnosisList = [
            {one: "one"},
            {two: "two"}
        ];

        const action = {
            payload: {
                diagnosis_index: 1,
                problem_index: 0,
            },
            type: MOVE_DIAGNOSIS_UP
        };

        const expectedState = {
            problemList: [{
                diagnosisList: [
                    {two: "two"},
                    {one: "one"}
                ]
            }]
        };

        const output = homeReducer(state, action);
        expect(output).toEqual(expectedState);
    });

    it('MOVE_PROBLEM_DOWN', () => {
        state.problemList = [
            {one: "one"},
            {two: "two"}
        ];

        const action = {
            payload: {
                problem_index: 0,
            },
            type: MOVE_PROBLEM_DOWN
        };

        const expectedState = {
            problemList: [
                {two: "two"},
                {one: "one"}
            ]
        };

        const output = homeReducer(state, action);
        expect(output).toEqual(expectedState);
    });

    it('MOVE_PROBLEM_UP', () => {
        state.problemList = [
            {one: "one"},
            {two: "two"}
        ];

        const action = {
            payload: {
                problem_index: 1,
            },
            type: MOVE_PROBLEM_UP
        };

        const expectedState = {
            problemList: [
                {two: "two"},
                {one: "one"}
            ]
        };

        const output = homeReducer(state, action);
        expect(output).toEqual(expectedState);
    });

    it('PROBLEM_CHANGE', () => {
        const action = {
            payload: {
                problem_index: 0,
                problemName: "name",
                value: "value",
            },
            type: PROBLEM_CHANGE
        };

        const expectedState = {
            problemList: [
                {
                    diagnosisList: [{}],
                    name: "value"
                }
            ]
        };

        const output = homeReducer(state, action);
        expect(output).toEqual(expectedState);
    });

    it('REMOVE_DIAGNOSIS', () => {
        state.problemList[0].diagnosisList = [
            {one: "one"},
            {two: "two"}
        ];

        const action = {
            payload: {
                problem_index: 0,
                diagnosis_index: 0,
            },
            type: REMOVE_DIAGNOSIS
        };

        const expectedState = {
            problemList: [
                {
                    diagnosisList: [
                        {two: "two"}],
                }
            ]
        };

        const output = homeReducer(state, action);
        expect(output).toEqual(expectedState);
    });

    it('REMOVE_PROBLEM', () => {
        state.problemList = [
            {one: "one"},
            {two: "two"},
        ];

        const action = {
            payload: {
                problem_index: 0,
            },
            type: REMOVE_PROBLEM
        };

        const expectedState = {
            problemList: [
                {two: "two"}
            ]
        };

        const output = homeReducer(state, action);
        expect(output).toEqual(expectedState);
    });

    it('TOGGLE_DISPLAY first time, no clinical features', () => {
        const action = {
            payload: {
                problem_index: 0,
                diagnosis_index: 0,
            },
            type: TOGGLE_DISPLAY
        };

        const expectedState = {
            problemList: [
                {
                    diagnosisList: [{
                        firstOpen: false,
                        showDetail: true,
                    }]
                }
            ]
        };

        const output = homeReducer(state, action);
        expect(output).toEqual(expectedState);
    });

    it('TOGGLE_DISPLAY not first time', () => {
        state.problemList = [
            {
                diagnosisList: [{
                    firstOpen: false,
                    showDetail: true,
                }]
            }
        ];
        const action = {
            payload: {
                problem_index: 0,
                diagnosis_index: 0,
            },
            type: TOGGLE_DISPLAY
        };

        const expectedState = {
            problemList: [
                {
                    diagnosisList: [{
                        firstOpen: false,
                        showDetail: false,
                    }]
                }
            ]
        };

        const output = homeReducer(state, action);
        expect(output).toEqual(expectedState);
    });

    it('default', () => {
        const action = {
            payload: "whatever",
            type: "RANDOM TYPE"
        };

        const output = homeReducer(state, action);
        expect(output).toEqual(state);
    });
});
