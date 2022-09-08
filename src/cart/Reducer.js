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
    // remove items

    if (action.payload) {
      state = state.filter((element) => {
        return element.id !== action.payload.id;
      });
    }
  }
  // increment items
  else if (action.type === "INCREMENT") {
    state = state.map((item) => {
      return item.id === action.payload.id
        ? { ...action.payload, quantity: action.payload.quantity + 1 }
        : item;
    });
  }
  // decrement
  else if (action.type === "DECREMENT") {
    state = state.map((item) => {
      return item.id === action.payload.id
        ? {
            ...action.payload,
            quantity:
              action.payload.quantity === 1
                ? (action.payload.quantity = 1)
                : action.payload.quantity - 1,
          }
        : item;
    });
  }
  // clear all
  else if (action.type === "ClearAll") {
    state = [];
  }
  return state;
};
export default reducer;
