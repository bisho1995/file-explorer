const initialState = {
  path: "null"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_L1_PATH":
      return { ...state, path: action.payload.path };
    case "ADD_TO_PATH":
      return { ...state, path: state.path + "/" + action.payload.path };
    default:
      break;
  }
  return state;
};

export default reducer;