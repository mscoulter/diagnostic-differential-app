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
                         checkBoxes,
                         clinicalFeatures,
                         diagnosis,
                         diagnosisList,
                         diagnosisChange,
                         firstOpen,
                         freeText,
                         handleCheck,
                         handleClick,
                         onChangeFreeText,
                         onClickAddDiagnosis,
                         relatedDiagnoses,
                         showDetail,
                         toggleDisplay
                     }) => {

    const isActive = (index) => {
        return activeList.filter(item => item === (index)).length > 0;
    };

    return (
        <Grid centered>
            <Grid.Row>
                <Grid.Column width={14}>
                    <Accordion exclusive={false} fluid styled>
                        <Accordion.Title active={isActive(0)}>
                            <Button icon index={0} onClick={handleClick}>
                                <Icon name='dropdown'/>
                            </Button>
                            <Input type="text" placeholder='Enter Problem #1...'/>
                        </Accordion.Title>
                        <Accordion.Content active={isActive(0)}>
                            {diagnosisList && diagnosisList.map((diagnosis, outer_i) => {
                                return <Card fluid>
                                    <Label attached='top'>Diagnosis #1</Label>
                                    <Card.Content>
                                        <Grid columns={2} verticalAlign="middle" padded>
                                            <Grid.Row>
                                                <Grid.Column>
                                                    <Input type="text"
                                                           id={outer_i}
                                                           placeholder="Enter Diagnosis..."
                                                           value={diagnosis.diagnosis}
                                                           onChange={diagnosisChange}/>
                                                </Grid.Column>
                                                <Grid.Column>
                                                    <Button onClick={()=>toggleDisplay(outer_i)}
                                                            primary
                                                            size='tiny'>{(diagnosis.clinicalFeatures && diagnosis.firstOpen) || diagnosis.showDetail ? 'Hide ' : 'Show '}
                                                        Detail</Button>
                                                </Grid.Column>
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
                                                                    index={outer_i}
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
                                                                    index={outer_i}
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
                                                           index={outer_i}
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
                            })}
                        </Accordion.Content>
                    </Accordion>
                </Grid.Column>
            </Grid.Row>
            <Grid.Column width={3}>
                <Button name="addDiagnosis" onClick={onClickAddDiagnosis}>
                    Add Diagnosis
                </Button>
            </Grid.Column>
        </Grid>

    )
}
