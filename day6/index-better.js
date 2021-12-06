function getInitialState(input) {
    const myRegex = /\w+/g;
    let rawState = input.match(myRegex).map(x => parseInt(x));

    let state = [];
    for (const stateIndex of rawState) {
      const stateCount = (state[stateIndex] != null) ? state[stateIndex] : 0;
      state[stateIndex] = stateCount + 1;
    }
    return state;
}

function processState(state) {
  const newState = [];
  state.forEach((stateCount, stateIndex) => {
    if (stateIndex == 0) {
      const existingCount = (newState[6] != null) ? newState[6] : 0;
      newState[6] = existingCount + stateCount;
      newState[8] = stateCount;
      return;
    }

    const existingCount = (newState[stateIndex - 1] != null) ? newState[stateIndex - 1] : 0;
    newState[stateIndex - 1] = existingCount + stateCount;
  });
  return newState;
}

function simulateDays(input, daysCount) {

  // init state
  let state = getInitialState(input);

  // loop days
  for (let i = 0; i < daysCount; i++) {
    state = processState(state);
  }

  // result
  return [...state.values()].reduce((acc, cur) => acc + cur);
}


module.exports = {
    simulateDays: simulateDays
};