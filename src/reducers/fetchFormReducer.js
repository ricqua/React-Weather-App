const initialState = {
  fetchFormText: "e.g. cat",
  loading: false,
  data: "",
  error: "error",
  customList: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "INPUT_TEXT":
      return {
        ...state,
        fetchFormText: action.payload,
      };
    case "FETCH_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      };
    case "FETCH_FAIL":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    // case "LIST_ADD":
    //   if (state.customList.indexOf(action.payload) === -1) {
    //     return {
    //       ...state,
    //       customList: [...state.customList, action.payload],
    //     };
    //   }
    //   return { ...state };

    // case "REMOVE_ITEM":
    //   const removeElement = function (array, itemToRemove) {
    //     let newArray = [...array];
    //     newArray.splice(itemToRemove, 1);
    //     return newArray;
    //   };
    //   let newArray = removeElement(state.data, action.payload - 1);
    //   return {
    //     ...state,
    //     data: newArray,
    //   };

    default:
      return state;
  }
}
