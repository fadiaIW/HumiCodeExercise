import { GET_PEOPLE, SEARCH_PEOPLE, ERROR } from "./actions";

const initialState = {
    people: [],
    error: null
  };


  function peopleReducer(state = initialState, action) {
    switch (action.type) {
      case GET_PEOPLE:
       return {...state, people:action.payload}
      case SEARCH_PEOPLE:
        return {...state, people:action.payload }
      case ERROR:
        console.log("in error");
        return { ...state, error:action.error}
      default:
        return state;
    }
  }
  
  export default peopleReducer;
