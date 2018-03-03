import React from "react";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {diagnosisChange} from './homeActions.js'
import {Home} from './home';


class HomeContainer extends React.Component {
  // this.state = { comments: [] };

  componentDidMount() {

  }
  render() {
    return <Home
      clinical_features={this.props.clinical_features}
      diagnosisChange={this.props.diagnosisChange}/>
  }
};

const mapStateToProps = state => {
  return {
    clinical_features: state.homeReducer.clinical_features,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  diagnosisChange,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps)(HomeContainer)
