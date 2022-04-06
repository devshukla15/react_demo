import { SAVE } from "../Constants/actionTypes"

const placeReducer = (places = [], action) => {
  switch (action.type) {
    case SAVE:
      return [...places, action.payload]

    default:
      return places
  }
}

export default placeReducer
