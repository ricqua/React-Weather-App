const initialState = {
  inputText: "e.g. Cat",
  loading: false,
  data: "",
  error: "",
  customList: "",
};

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case "INPUT_TEXT":
      return { ...state, inputText: action.payload };
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      };
    case "FETCH_FAIL":
      return {
        ...state,
        error: "No data",
        loading: false,
      };
    case "LIST_ADD":
      return { ...state, customList: [action.payload] };
    case "REMOVE_ITEM":
      return { ...state, customList: "" };
    default:
      return state;
  }
}
export default globalReducer;
