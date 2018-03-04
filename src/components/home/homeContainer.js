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
    console.log("HEREREERER")
    const toggled = !this.state.displayDiff;
    return this.setState({displayDiff: toggled});
  }

  render() {
    return <Home
      displayDiff={this.state.displayDiff}
      onDiagnosisChange={this.props.diagnosisChange}
      toggleDisplay={this.toggleDisplay}
      clinicalFeatures={this.props.clinicalFeatures}
      diagnosisChange={this.props.diagnosisChange}/>
  }
};

const mapStateToProps = state => {
  return {
    clinicalFeatures: state.homeReducer.clinical_features,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  diagnosisChange,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps)(HomeContainer)
