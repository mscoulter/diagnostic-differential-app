import React from "react";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {diagnosisChange, handleCheck, changeFreeText} from './homeActions.js'
import {Home} from './home';


class HomeContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {activeList: [], firstOpen: true, showDetail: false};
        this.toggleDisplay = this.toggleDisplay.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleDiagnosisToggle = this.handleDiagnosisToggle.bind(this);
    }


    componentWillMount() {


    }

    handleClick = (event, payload) => {
        if (this.state.activeList.includes(payload.index)) {
            const index = this.state.activeList.indexOf(payload.index);

            return this.setState({activeList: this.state.activeList.filter((x, i) => i !== index)})
        }
        return this.setState({activeList: [...this.state.activeList, payload.index]})

    };

    toggleDisplay = () => {
        if (this.state.firstOpen === true && this.props.clinicalFeatures && this.props.clinicalFeatures.length > 0) {
            return this.setState(
                {
                    firstOpen: false,
                    showDetail: this.state.showDetail
                });
        } else {
            return this.setState(
                {
                    firstOpen: false,
                    showDetail: !this.state.showDetail
                });
        }
    };
    handleDiagnosisToggle = () => {
        return this.setState({showClinicalFeatures: !this.state.showClinicalFeatures})
    };

    render() {
        return <Home
            activeList={this.state.activeList}
            addDiagnosis={this.addDiagnosis}
            checkBoxes={this.props.checkBoxes}
            clinicalFeatures={this.props.clinicalFeatures}
            diagnosis={this.props.diagnosis}
            diagnosisChange={this.props.diagnosisChange}
            firstOpen={this.state.firstOpen}
            freeText={this.props.freeText}
            handleCheck={this.props.handleCheck}
            handleClick={this.handleClick}
            handleDiagnosisToggle={this.handleDiagnosisToggle}
            onChangeFreeText={this.props.changeFreeText}
            relatedDiagnoses={this.props.relatedDiagnoses}
            showDetail={this.state.showDetail}
            toggleDisplay={this.toggleDisplay}
        />
    }
}

const mapStateToProps = state => {
    return {
        diagnosis: state.homeReducer.diagnosis,
        clinicalFeatures: state.homeReducer.clinicalFeatures,
        relatedDiagnoses: state.homeReducer.relatedDiagnoses,
        checkBoxes: state.homeReducer.checkBoxes,
        freeText: state.homeReducer.freeText
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    changeFreeText,
    diagnosisChange,
    handleCheck,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps)(HomeContainer)
