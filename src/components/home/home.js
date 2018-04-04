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
                    {problemList && problemList.map((problem, problemIndex) => {
                        return <Accordion exclusive={false} fluid styled>
                            <Accordion.Title active={isActive(problemIndex)}>
                                <Grid padded="horizontally">
                                    <Grid.Row>
                                        <Grid.Column width={15}>
                                                <Button circular
                                                        color="green"
                                                        inverted
                                                        problemIndex={problemIndex}
                                                        onClick={onClickMoveUp}
                                                        compact
                                                        size="mini"
                                                        icon="arrow up"/>
                                                <Button circular
                                                        color="orange"
                                                        inverted
                                                        problemIndex={problemIndex}
                                                        onClick={onClickMoveDown}
                                                        compact
                                                        size="mini"
                                                        icon="arrow down"/>

                                            <Input type="text"
                                                   placeholder={`Enter Problem #${problemIndex + 1}...`}/>
                                            <Button icon problemIndex={problemIndex}
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
                                                    problemIndex={problemIndex}
                                                    onClick={onClickRemoveProblem}>
                                            </Button>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Accordion.Title>
                            <Accordion.Content active={isActive(problemIndex)}>
                                {problem.diagnosisList && problem.diagnosisList.map((diagnosis, diagnosisIndex) => (

                                    <Card fluid>
                                        <Label attached='top'>
                                            <Grid>
                                                <Grid.Column textAlign="left" width={14}>
                                                    <Button circular
                                                            color="green"
                                                            inverted
                                                            problemIndex={problemIndex}
                                                            diagnosisIndex={diagnosisIndex}
                                                            onClick={onClickMoveUp}
                                                            compact
                                                            size="mini"
                                                            icon="arrow up"/>
                                                    <Button circular
                                                            color="orange"
                                                            inverted
                                                            problemIndex={problemIndex}
                                                            diagnosisIndex={diagnosisIndex}
                                                            onClick={onClickMoveDown}
                                                            compact
                                                            size="mini"
                                                            icon="arrow down"/>
                                                    {`Diagnosis #${diagnosisIndex + 1}`}
                                                </Grid.Column>
                                                <Grid.Column textAlign="right" width={2}>
                                                    <Button circular
                                                            icon="remove"
                                                            color="red"
                                                            inverted
                                                            compact
                                                            size="mini"
                                                            problemIndex={problemIndex}
                                                            diagnosisIndex={diagnosisIndex}
                                                            onClick={onClickRemoveDiagnosis}>
                                                    </Button>
                                                </Grid.Column>
                                            </Grid>
                                        </Label>
                                        <Card.Content>
                                            <Grid verticalAlign="middle" padded>
                                                <Grid.Row>
                                                    <Input type="text"
                                                           diagnosisIndex={diagnosisIndex}
                                                           problemIndex={problemIndex}
                                                           placeholder="Enter Diagnosis..."
                                                           value={diagnosis.diagnosis}
                                                           onChange={diagnosisChange}/>
                                                    <Button
                                                        onClick={() => toggleDisplay(problemIndex, diagnosisIndex)}
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
                                                        // .slice()
                                                            .slice(0, Math.ceil(diagnosis.clinicalFeatures.length / 2))
                                                            .map((feature, i) => {
                                                                return <List.Item>
                                                                    <Checkbox
                                                                        diagnosisIndex={diagnosisIndex}
                                                                        problemIndex={problemIndex}
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
                                                                        diagnosisIndex={diagnosisIndex}
                                                                        problemIndex={problemIndex}
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
                                                               diagnosisIndex={diagnosisIndex}
                                                               problemIndex={problemIndex}
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
                                        problemIndex={problemIndex}
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
