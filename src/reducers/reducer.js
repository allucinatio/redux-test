import update from 'immutability-helper';
import {INCREMENT, DECREMENT} from "../actions/actions.js";

const intialState = {
    hours: 2,
    price: 100,
    itemTotal: 0
}


const reducer = function (state = intialState, action) {
  switch (action.type) {
      case INCREMENT:
        console.log("Just triggered INCREMENT action in reducers")
        console.log(state.hours + action.payload);
        state = {
          ...state,
          hours: state.hours + action.payload
        }
        break;
      case DECREMENT:
        console.log("Just triggered DECREMENT action in reducers");
        state = {
          ...state,
          hours: state.hours - action.payload
        }
        break;
    }
      return state;
}

export default reducer;
