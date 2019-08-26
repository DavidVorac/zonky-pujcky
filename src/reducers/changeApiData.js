const initialState = {
  isLoading: true,
  isError: false,
  doFetch: true,
  data: [],
  filter: null,
  sortBy: null
};

const changeApiData = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, ...action.payload };
    case "TIMER_EXPIRED":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default changeApiData;
