const initState = {
  // loaded: false,
  list: [],
  tags: []
};

export default (state = initState, action = {}) => {
  if (action.type === 'INIT_TAG') {
    return { ...state, tags: action.data };
  } else if (action.type === 'LOAD_ARTICLELIST') {
    return { ...state, list: action.data };
  } else {
    return state
  }
};
