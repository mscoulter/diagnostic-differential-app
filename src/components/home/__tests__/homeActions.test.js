import {
    addDiagnosis,
    addProblem,
    changeFreeText,
    diagnosisChange,
    handleCheck,
    moveDown,
    moveUp,
    problemChange,
    removeDiagnosis,
    removeProblem,
    toggleDisplay,
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
    TOGGLE_DISPLAY
} from "../homeActions";
import data from "../../../data";
jest.mock("../../../data");

describe('homeActions', () => {
    let payload;
    let event;
    beforeEach(() => {
        payload = {
            problem_index: 0,
            diagnosis_index: 0,
            value: "value",
        }
    });

    it('addDiagnosis', () => {
        const action = addDiagnosis(event, payload);
        const expectedAction = {
            type: ADD_DIAGNOSIS,
            payload: payload.problem_index
        };
        expect(action).toEqual(expectedAction);
    });

    it('addProblem', () => {
        const action = addProblem(event, payload);
        const expectedAction = {
            type: ADD_PROBLEM,
            payload: payload
        };
        expect(action).toEqual(expectedAction);
    });

    it('changeFreeText', () => {
        const action = changeFreeText(event, payload);
        const expectedAction = {
            type: CHANGE_FREE_TEXT,
            payload: payload
        };
        expect(action).toEqual(expectedAction);
    });

    describe("diagnosisChange", () => {

        it('returns payload with undefined values when diagnosis not found', () => {
            payload = {
                value: "diseaseName",
                problem_index: "0",
                diagnosis_index: "0",
            };
            const actionPayload = {
                diagnosis: "diseaseName",
                problem_index: 0,
                diagnosis_index: 0,
                checkBoxes: undefined,
                clinicalFeatures: undefined,
                relatedDiagnoses: undefined
            };
            const action = diagnosisChange(event, payload);
            const expectedAction = {
                type: DIAGNOSIS_CHANGE,
                payload: actionPayload,
            };
            expect(action).toEqual(expectedAction);
        });

        it('returns clinical features and related diagnoses when disease exists in database', () => {
            payload = {
                value: "some-disease's name",
                problem_index: "0",
                diagnosis_index: "0",
            };

            const action = diagnosisChange(event, payload);

            expect(action.payload.clinicalFeatures).toEqual(data.some_diseases_name.clinical_features);
            expect(action.payload.relatedDiagnoses).toEqual(data.some_diseases_name.relatedDiagnoses);
        });

        it('returns checkboxes split into two equal columns for an even numbered list', () => {
            payload = {
                value: "some-disease's name",
                problem_index: "0",
                diagnosis_index: "0",
            };

            const expectedCheckboxes = {
                "0_column1": false,
                "0_column2": false,
                "1_column1": false,
                "1_column2": false,
            };

            const action = diagnosisChange(event, payload);

            expect(action.payload.checkBoxes).toEqual(expectedCheckboxes);
        });

        it('returns checkboxes split into two columns for an odd numbered list', () => {
            payload = {
                value: "other disease",
                problem_index: "0",
                diagnosis_index: "0",
            };

            const expectedCheckboxes = {
                "0_column1": false,
                "0_column2": false,
                "1_column1": false,
                "1_column2": false,
                "2_column1": false,
            };

            const action = diagnosisChange(event, payload);

            expect(action.payload.checkBoxes).toEqual(expectedCheckboxes);
        });

    });

    it('handleCheck', () => {
        payload.name = "fieldName";
        payload.checked = true;
        const action = handleCheck(event, payload);
        const boxValues = {
            diagnosis_index: payload.diagnosis_index,
            problem_index: payload.problem_index,
            field: payload.name,
            checked: payload.checked
        };
        const expectedAction = {
            type: CHECKBOX_CLICK,
            payload: boxValues
        };
        expect(action).toEqual(expectedAction);
    });

    it('moveDown diagnosis', () => {
        const action = moveDown(event, payload);

        const expectedAction = {
            type: MOVE_DIAGNOSIS_DOWN,
            payload: {
                problem_index: payload.problem_index,
                diagnosis_index: payload.diagnosis_index,
            }
        };
        expect(action).toEqual(expectedAction);
    });

    it('moveDown problem', () => {
        payload = {
            problem_index : 0
        };
        const action = moveDown(event, payload);

        const expectedAction = {
            type: MOVE_PROBLEM_DOWN,
            payload: {
                problem_index: payload.problem_index,
            }
        };
        expect(action).toEqual(expectedAction);
    });

    it('moveUp diagnosis', () => {
        const action = moveUp(event, payload);

        const expectedAction = {
            type: MOVE_DIAGNOSIS_UP,
            payload: {
                problem_index: payload.problem_index,
                diagnosis_index: payload.diagnosis_index,
            }
        };
        expect(action).toEqual(expectedAction);
    });

    it('moveUp problem', () => {
        payload = {
            problem_index : 0
        };
        const action = moveUp(event, payload);

        const expectedAction = {
            type: MOVE_PROBLEM_UP,
            payload: {
                problem_index: payload.problem_index,
            }
        };
        expect(action).toEqual(expectedAction);
    });

    it('problemChange', () => {
      payload.name = "name";
        const action = problemChange(event, payload);

        const expectedAction = {
            type: PROBLEM_CHANGE,
            payload: {
                problem_index: payload.problem_index,
                problemName: payload.name,
                value: payload.value
            }
        };
        expect(action).toEqual(expectedAction);
    });

    it('removeDiagnosis', () => {
        const action = removeDiagnosis(event, payload);

        const expectedAction = {
            type: REMOVE_DIAGNOSIS,
            payload: {
                problem_index: payload.problem_index,
                diagnosis_index: payload.diagnosis_index
            }
        };
        expect(action).toEqual(expectedAction);
    });

    it('removeProblem', () => {
        const action = removeProblem(event, payload);

        const expectedAction = {
            type: REMOVE_PROBLEM,
            payload: {
                problem_index: payload.problem_index,
            }
        };
        expect(action).toEqual(expectedAction);
    });

    it('toggleDisplay', () => {
        const problem_index = 1;
        const diagnosis_index = 0;
        const action = toggleDisplay(problem_index, diagnosis_index);

        const expectedAction = {
            type: TOGGLE_DISPLAY,
            payload: {
                problem_index,
                diagnosis_index
            }
        };
        expect(action).toEqual(expectedAction);
    });

});