import React from "react";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addDiagnosis,
    addProblem,
    changeFreeText,
    diagnosisChange,
    handleCheck,
    moveDown,
    moveUp,
    removeDiagnosis,
    removeProblem,
    toggleDisplay,} from './homeActions.js'
import {Home} from './home';


class HomeContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {activeList: [], firstOpen: true, showDetail: false};
        this.handleClick = this.handleClick.bind(this);
        this.handleDiagnosisToggle = this.handleDiagnosisToggle.bind(this);
    }

    handleClick = (event, payload) => {
        if (this.state.activeList.includes(payload.problemIndex)) {
            const index = this.state.activeList.indexOf(payload.problemIndex);

            return this.setState({activeList: this.state.activeList.filter((x, i) => i !== index)})
        }
        return this.setState({activeList: [...this.state.activeList, payload.problemIndex]})

    };

    handleDiagnosisToggle = () => {
        return this.setState({showClinicalFeatures: !this.state.showClinicalFeatures})
    };

    render() {
        return <Home
            activeList={this.state.activeList}
            addDiagnosis={this.addDiagnosis}
            diagnosisChange={this.props.diagnosisChange}
            firstOpen={this.state.firstOpen}
            handleCheck={this.props.handleCheck}
            handleProblemDropdownClick={this.handleClick}
            handleDiagnosisToggle={this.handleDiagnosisToggle}
            onChangeFreeText={this.props.changeFreeText}
            onClickAddDiagnosis={this.props.addDiagnosis}
            onClickAddProblem={this.props.addProblem}
            onClickMoveDown={this.props.moveDown}
            onClickMoveUp={this.props.moveUp}
            onClickRemoveDiagnosis={this.props.removeDiagnosis}
            onClickRemoveProblem={this.props.removeProblem}
            problemList={this.props.problemList}
            showDetail={this.state.showDetail}
            toggleDisplay={this.props.toggleDisplay}
        />
    }
}

const mapStateToProps = state => {
    return {
        problemList: state.homeReducer.problemList
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    addDiagnosis,
    addProblem,
    changeFreeText,
    diagnosisChange,
    handleCheck,
    moveDown,
    moveUp,
    removeDiagnosis,
    removeProblem,
    toggleDisplay,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps)(HomeContainer)
