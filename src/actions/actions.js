export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const CALC_TOTAL = "CALC_TOTAL";

export function incrementHours() {
 console.log("action: INCREMENT");
  return {
    type: INCREMENT,
    payload: 1
  };
};

export function decrementHours() {
 console.log("action: DECREMENT");
  return {
    type: DECREMENT,
    payload: 1
  };
};
