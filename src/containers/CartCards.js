import React, {Component} from 'react';
import {connect} from 'react-redux';
import { incrementHours } from "../actions/actions";
import { decrementHours } from "../actions/actions";
import { bindActionCreators } from 'redux';

class ChangeHours extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    console.log(this.props)
  }

  incrementHours = e => {
    console.log("incrementHours triggered by onChange");
    this.props.incrementHours();

  };

  decrementHours = e => {
    console.log("decrementHours triggered by onChange");
    this.props.decrementHours();

  };

  render() {
    return (
      <div>
        <div>
          <button value="-" onClick={this.decrementHours}>-</button>
            Hours: {this.props.hours}
          <button value="+" onClick={this.incrementHours}>+</button>
        </div>
        <div>
          Total: {this.props.itemTotal}
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  console.log(state);

  return {
    hours: state.hours
  }
}

const mapDispatchToProps = function(dispatch) {

  return {
    incrementHours: function(hours) {
      return dispatch(incrementHours(hours));
    },
    decrementHours: function(hours) {
      return dispatch(decrementHours(hours));
    }
  }
}

  export default connect(mapStateToProps, mapDispatchToProps)(ChangeHours);
