import React from 'react'
import {
    Accordion,
    Card,
    Checkbox,
    Divider,
    Form,
    Grid,
    Header,
    Label,
    List,
    Segment,
    Icon,
    Input,
    Button
} from 'semantic-ui-react'
export const Home = ({
                         activeList,
                         diagnosisChange,
                         handleCheck,
                         handleProblemDropdownClick,
                         onChangeFreeText,
                         onClickAddDiagnosis,
                         onClickAddProblem,
                         onClickMoveDown,
                         onClickMoveUp,
                         onClickRemoveProblem,
                         onClickRemoveDiagnosis,
                         onProblemChange,
                         problemList,
                         toggleDisplay
                     }) => {

    const isActive = (index) => {
        return activeList.filter(item => item === (index)).length > 0;
    };

    return (
        <Grid centered>
            <Grid.Row>
                <Grid.Column width={14}>
                    {problemList && problemList.map((problem, problem_index) => {
                        return <Accordion exclusive={false} key={problem_index} fluid styled>
                            <Accordion.Title active={isActive(problem_index)}>
                                <Grid padded="horizontally">
                                    <Grid.Row>
                                        <Grid.Column width={15}>
                                                <Button circular
                                                        color="green"
                                                        inverted
                                                        // ref={false}
                                                        problem_index={problem_index}
                                                        onClick={onClickMoveUp}
                                                        compact
                                                        size="mini"
                                                        icon="arrow up"/>
                                                <Button circular
                                                        color="orange"
                                                        inverted
                                                        problem_index={problem_index}
                                                        onClick={onClickMoveDown}
                                                        compact
                                                        size="mini"
                                                        icon="arrow down"/>

                                            <Input type="text"
                                                   name="problemName"
                                                   value={problem.problemName}
                                                   onChange={onProblemChange}
                                                   problem_index={problem_index}
                                                   placeholder={`Enter Problem #${problem_index + 1}...`}/>
                                            <Button icon problem_index={problem_index}
                                                    onClick={handleProblemDropdownClick}>
                                                <Icon name='dropdown'/>
                                            </Button>
                                        </Grid.Column>
                                        <Grid.Column width={1} verticalAlign="middle">
                                            <Button circular icon="remove"
                                                    color="red"
                                                    inverted
                                                    compact
                                                    size="mini"
                                                    problem_index={problem_index}
                                                    onClick={onClickRemoveProblem}>
                                            </Button>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Accordion.Title>
                            <Accordion.Content active={isActive(problem_index)}>
                                {problem.diagnosisList && problem.diagnosisList.map((diagnosis, diagnosis_index) => (

                                    <Card key={diagnosis_index} fluid>
                                        <Label attached='top'>
                                            <Grid>
                                                <Grid.Column textAlign="left" width={14}>
                                                    <Button circular
                                                            color="green"
                                                            inverted
                                                            problem_index={problem_index}
                                                            diagnosis_index={diagnosis_index}
                                                            onClick={onClickMoveUp}
                                                            compact
                                                            size="mini"
                                                            icon="arrow up"/>
                                                    <Button circular
                                                            color="orange"
                                                            inverted
                                                            problem_index={problem_index}
                                                            diagnosis_index={diagnosis_index}
                                                            onClick={onClickMoveDown}
                                                            compact
                                                            size="mini"
                                                            icon="arrow down"/>
                                                    {`Diagnosis #${diagnosis_index + 1}`}
                                                </Grid.Column>
                                                <Grid.Column textAlign="right" width={2}>
                                                    <Button circular
                                                            icon="remove"
                                                            color="red"
                                                            inverted
                                                            compact
                                                            size="mini"
                                                            problem_index={problem_index}
                                                            diagnosis_index={diagnosis_index}
                                                            onClick={onClickRemoveDiagnosis}>
                                                    </Button>
                                                </Grid.Column>
                                            </Grid>
                                        </Label>
                                        <Card.Content>
                                            <Grid verticalAlign="middle" padded>
                                                <Grid.Row>
                                                    <Input type="text"
                                                           diagnosis_index={diagnosis_index}
                                                           problem_index={problem_index}
                                                           placeholder="Enter Diagnosis..."
                                                           value={diagnosis.diagnosis}
                                                           onChange={diagnosisChange}/>
                                                    <Button
                                                        onClick={() => toggleDisplay(problem_index, diagnosis_index)}
                                                        primary
                                                        size='tiny'>{(diagnosis.clinicalFeatures && diagnosis.firstOpen) || diagnosis.showDetail ? 'Hide ' : 'Show '}
                                                        Detail</Button>
                                                </Grid.Row>
                                            </Grid>
                                        </Card.Content>
                                        {((diagnosis.clinicalFeatures && diagnosis.firstOpen) || diagnosis.showDetail) &&
                                        <Card.Content>
                                            <Header as='h4' textAlign='center'>
                                                Clinical Features
                                            </Header>
                                            <Grid columns={2}>
                                                <Grid.Column>
                                                    <List celled>
                                                        {diagnosis.clinicalFeatures && diagnosis.clinicalFeatures
                                                            .slice(0, Math.ceil(diagnosis.clinicalFeatures.length / 2))
                                                            .map((feature, i) => {
                                                                return <List.Item>
                                                                    <Checkbox
                                                                        diagnosis_index={diagnosis_index}
                                                                        problem_index={problem_index}
                                                                        name={`${i}_column1`}
                                                                        checked={diagnosis.checkBoxes[`${i}_column1`]}
                                                                        onClick={handleCheck}
                                                                        label={feature}
                                                                    />
                                                                </List.Item>
                                                            })}
                                                    </List>
                                                </Grid.Column>
                                                <Grid.Column>
                                                    <List celled>
                                                        {diagnosis.clinicalFeatures && diagnosis.clinicalFeatures
                                                        // .slice()
                                                            .slice(Math.ceil(diagnosis.clinicalFeatures.length / 2), diagnosis.clinicalFeatures.length)
                                                            .map((feature, i) => {
                                                                return <List.Item>
                                                                    <Checkbox
                                                                        diagnosis_index={diagnosis_index}
                                                                        problem_index={problem_index}
                                                                        name={`${i}_column2`}
                                                                        checked={diagnosis.checkBoxes[`${i}_column2`]}
                                                                        onClick={handleCheck}
                                                                        label={feature}/>
                                                                </List.Item>
                                                            })}
                                                    </List>
                                                </Grid.Column>
                                            </Grid>
                                            <Form>
                                                <Form.TextArea onChange={onChangeFreeText}
                                                               diagnosis_index={diagnosis_index}
                                                               problem_index={problem_index}
                                                               placeholder='Other clinical features...'
                                                               value={diagnosis.freeText}/>
                                            </Form>
                                            <Divider/>
                                            <Header as='h4' textAlign='center'>
                                                Related Diagnoses
                                            </Header>
                                            {diagnosis.relatedDiagnoses &&
                                            <Segment>
                                                {diagnosis.relatedDiagnoses.join(', ')}
                                            </Segment>
                                            }
                                        </Card.Content>
                                        }
                                    </Card>
                                ))}
                                <Button name="addProblem"
                                        compact sizy="tiny"
                                        problem_index={problem_index}
                                        onClick={onClickAddDiagnosis}>
                                    Add Diagnosis
                                </Button>
                            </Accordion.Content>
                        </Accordion>
                    })}
                    < Button name="addProblem" compact sizy="tiny" onClick={onClickAddProblem}>
                        Add Problem
                    </Button>
                </Grid.Column>
            </Grid.Row>
            <Grid.Column width={3}>

            </Grid.Column>
        </Grid>

    )
}
