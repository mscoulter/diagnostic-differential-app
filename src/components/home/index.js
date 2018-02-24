import React from 'react'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {diagnosisChange} from './homeActions.js'
import Form, { Input, Fieldset } from 'react-bootstrap-form'
import {
  Button,
  ButtonToolbar,
  FormGroup,
  HelpBlock,
  FormControl,
  ControlLabel,
  Grid,
  Row,
  Col
} from 'react-bootstrap'
import './index'


const Home = props => (
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
            onChange={diagnosisChange}
            type="text"
            label="Diagnosis #1"
            placeholder="Enter text"/>
        </form>
      </Col>
    </Row>
    <Row className="show-grid">
      <Col xs={6} md={2}></Col>
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

const mapStateToProps = state => ({
    diagnosis: state.diagnosis,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  diagnosisChange,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Home)
