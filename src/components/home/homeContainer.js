import React from "react";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {diagnosisChange} from './homeActions.js'
import {Home} from './home';


class HomeContainer extends React.Component {

  constructor(props) {
   super(props);
   this.state = { displayDiff: false };
   this.toggleDisplay = this.toggleDisplay.bind(this);
 }


  componentDidMount() {

  }

  toggleDisplay = () => {
    return this.setState({displayDiff: !this.state.displayDiff});
  }

  render() {
    return <Home
      addDiagnosis={this.addDiagnosis}
      clinicalFeatures={this.props.clinicalFeatures}
      diagnosis={this.props.diagnosis}
      diagnosisChange={this.props.diagnosisChange}
      displayDiff={this.state.displayDiff}
      onDiagnosisChange={this.props.diagnosisChange}
      toggleDisplay={this.toggleDisplay}
      />
  }
};

const mapStateToProps = state => {
  return {
    clinicalFeatures: state.homeReducer.clinicalFeatures,
    diagnosis: state.homeReducer.diagnosis,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  diagnosisChange,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps)(HomeContainer)
