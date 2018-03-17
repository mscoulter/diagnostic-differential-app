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
                         addDiagnosis,
                         checkBoxes,
                         clinicalFeatures,
                         diagnosis,
                         diagnosisChange,
                         displayDiff,
                         firstOpen,
                         handleCheck,
                         handleClick,
                         handleDiagnosisToggle,
                         relatedDiagnoses,
                         showDetail,
                         toggleDisplay
                     }) => {

    const isActive = (index) => {
        return activeList.filter(item => item === (index)).length > 0;
    };

    const clinicalFeaturesCopy = clinicalFeatures && clinicalFeatures.slice();

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
                            <Card fluid>
                                <Label attached='top'>Diagnosis #1</Label>
                                <Card.Content>
                                    <Grid columns={2} verticalAlign="middle" padded>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Input type="text"
                                                       placeholder="Enter Diagnosis..."
                                                       value={diagnosis}
                                                       onChange={diagnosisChange}/>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <Button onClick={toggleDisplay} primary
                                                        size='tiny'>{(clinicalFeatures && firstOpen) || showDetail ? 'Hide ' : 'Show '}
                                                    Detail</Button>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Card.Content>
                                {((clinicalFeatures && firstOpen) || showDetail) &&
                                <Card.Content>
                                    <Header as='h4' textAlign='center'>
                                        Clinical Features
                                    </Header>
                                    <Grid columns={2}>
                                        <Grid.Column>
                                            <List celled>
                                                {clinicalFeatures && clinicalFeaturesCopy
                                                    .splice(0, Math.ceil(clinicalFeaturesCopy.length / 2))
                                                    .map((feature, i) => {
                                                        return <List.Item>
                                                            <Checkbox
                                                                name={`${i}_column1`}
                                                                checked={checkBoxes[`${i}_column1`]}
                                                                onClick={handleCheck}
                                                                label={feature}
                                                            />
                                                        </List.Item>
                                                    })}
                                            </List>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <List celled>
                                                {clinicalFeatures && clinicalFeaturesCopy
                                                    .splice(Math.floor(clinicalFeaturesCopy.length / 2) - (clinicalFeaturesCopy.length % 2 === 0 ? 3 : 2), clinicalFeatures.length)
                                                    .map((feature, i) => {
                                                        return <List.Item>
                                                            <Checkbox
                                                                name={`${i}_column2`}
                                                                checked={checkBoxes[`${i}_column2`]}
                                                                onClick={handleCheck}
                                                                label={feature}/>
                                                        </List.Item>
                                                    })}
                                            </List>
                                        </Grid.Column>
                                    </Grid>
                                    <Form>
                                        <Form.TextArea placeholder='Other clinical features...'/>
                                    </Form>
                                    <Divider/>
                                    <Header as='h4' textAlign='center'>
                                        Related Diagnoses
                                    </Header>
                                    {relatedDiagnoses &&
                                    <Segment>
                                        {relatedDiagnoses.join(', ')}
                                    </Segment>
                                    }
                                </Card.Content>
                                }
                            </Card>
                        </Accordion.Content>
                    </Accordion>
                </Grid.Column>
            </Grid.Row>
        </Grid>

    )
}
