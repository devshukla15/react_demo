import * as API from "../API/index"
import { SAVE } from "../Constants/actionTypes"

export const save = (placeData) => async (dispatch) => {
  try {
    const { data } = API.save(placeData)

    dispatch({ type: SAVE, data })
  } catch (error) {
    console.log(error)
  }
}
