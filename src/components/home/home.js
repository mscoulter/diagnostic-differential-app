import React from 'react'
import {
  Button,
  ButtonToolbar,
  FormGroup,
  HelpBlock,
  FormControl,
  ControlLabel,
  Grid,
  Row,
  Col,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap'

export const Home = props => {
return (
  <Grid>
    <Row className="show-grid">
      <Col xs={4} md={3}>
        <form>
          <FieldGroup
            id="problem1"
            type="text"
            label="Problem #1"
            placeholder="Enter Problem"/>
        </form>
      </Col>
      <Col xs={4} md={3}>
        <ButtonToolbar>
          <Button
            bsStyle="primary"
            bsSize="small">
            Develop Differential
          </Button>
         </ButtonToolbar>
      </Col>
    </Row>
    <Row className="show-grid">
      <Col xs={3} md={1}></Col>
      <Col xs={9} md={6}>
        <form>
          <FieldGroup
            id="diagnosis1"
            value={props.Diagnosis}
            onChange={props.diagnosisChange}
            type="text"
            label="Diagnosis #1"
            placeholder="Enter text"/>
        </form>
      </Col>
    </Row>
    <Row className="show-grid">
      {props.clinical_features &&
      <Col xs={6} md={2}>
        <ListGroup>
          {props.clinical_features.map((feature)=>{
            return <ListGroupItem>{feature}</ListGroupItem>
          })}
        </ListGroup>
      </Col>
      }
      <Col xs={9} md={6}>
        <form>
            <FieldGroup id="support"
              type="text"
              label="Supporting Clinical Features"
              placeholder="additional features"/>
        </form>
      </Col>
    </Row>
  </Grid>
)
}

function FieldGroup({
  id,
  label,
  help,
  ...props
}) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props}/> {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
