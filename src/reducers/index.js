
const reducer = (state = {}, action) => {

    switch (action.type) {
      case 'DISPATCH_NUMBERS':{
        return { ...state, numbers: action.payload};}
      default:
        return state;
    }
  };
  
  export default reducer;
  