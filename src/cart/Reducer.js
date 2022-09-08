const reducer = (state, action) => {
  if (action.type === "Add_to_cart") {
    let filtredState = state.find((e) => {
      return e.id === action.payload.id;
    });
    if (filtredState) {
      state = state.map((item) => {
        return item.id === filtredState.id
          ? { ...filtredState, quantity: filtredState.quantity + 1 }
          : item;
      });
    } else {
      state = [...state, { ...action.payload, quantity: 1 }];
    }
  } else if (action.type === "remove_Item") {
           if (action.payload) {
                      state =state.filter((element)=>{
                                 return element.id !== action.payload.id
                      })
           }
  }

  return state;
};
export default reducer;
