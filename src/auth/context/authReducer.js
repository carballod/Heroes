import { types } from "../types/types";

const initialState = {
  logged: false,
  name: "Daniela",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case types.login:
      return {
        ...state,
        logged: true,
        name: action.payload,
      };

    case types.logout:
      return {
        logged: false,
        name: null,
      };

    default:
      return state;
  }
};
