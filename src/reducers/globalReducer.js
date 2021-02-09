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
      let newCustomList = [...state.customList, action.payload];
      return { ...state, customList: newCustomList };
    case "REMOVE_ITEM":
      let filteredCustomList = state.customList.filter(
        (object) => object.word !== action.payload.word
      );

      return { ...state, customList: filteredCustomList };
    default:
      return state;
  }
}
export default globalReducer;
