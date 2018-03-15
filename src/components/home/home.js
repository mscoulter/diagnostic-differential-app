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
                         clinicalFeatures,
                         diagnosis,
                         diagnosisChange,
                         displayDiff,
                         firstOpen,
                         handleClick,
                         handleDiagnosisToggle,
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
                            <Card fluid>
                                <Label attached='top'>Diagnosis #1</Label>
                                <Card.Content>
                                    <Input type="text"
                                           placeholder="Enter Diagnosis..."
                                           value={diagnosis}
                                           onChange={diagnosisChange}/>
                                    <Button onClick={toggleDisplay}>Show Detail</Button>
                                </Card.Content>
                                {(clinicalFeatures && firstOpen) || showDetail &&
                                <Card.Content>
                                    <Header as='h4' textAlign='center'>
                                        Clinical Features
                                    </Header>
                                    <Grid columns={2}>
                                        <Grid.Column>
                                            <List celled>
                                                {clinicalFeatures && clinicalFeatures
                                                    .splice(0, Math.ceil(clinicalFeatures.length / 2))
                                                    .map((feature, i) => {
                                                        return <List.Item>
                                                            <Checkbox label={feature}/>
                                                        </List.Item>
                                                    })}
                                            </List>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <List celled>
                                                {clinicalFeatures && clinicalFeatures
                                                    .splice(Math.floor(clinicalFeatures.length / 2) - (clinicalFeatures.length % 2 === 0 ? 3 : 2), clinicalFeatures.length)
                                                    .map((feature, i) => {
                                                        return <List.Item>
                                                            <Checkbox label={feature}/>
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
