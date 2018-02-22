import React from 'react'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {increment, incrementAsync, decrement, decrementAsync} from '../../modules/counter'
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
          <FieldGroup id="problem1" onChange={props.increment} type="text" label="Problem #1" placeholder="Enter Problem"/>
        </form>
      </Col>
      <Col xs={4} md={3}>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="small">
            Develop Differential
          </Button>
         </ButtonToolbar>
      </Col>
    </Row>
    <Row className="show-grid">
      <Col xs={9} md={6}>
        <form>
          <FieldGroup id="diagnosis1" type="text" label="Diagnosis #1" placeholder="Enter text"/>
        </form>
      </Col>
    </Row>
    <Row className="show-grid">
      <Col xs={9} md={6}>
        <form>
            <FieldGroup id="support" type="text" label="Supporting Clinical Features" placeholder="additional features"/>
        </form>
      </Col>
      <Col xs={9} md={6}>
        <form>
            <FieldGroup id="contra" type="text" label="Contradictory Clinical Features" placeholder="additional features"/>
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
    count: state.counter.count,
    isIncrementing: state.counter.isIncrementing,
    isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
