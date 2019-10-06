import {
  addToFavourites,
  deleteFavourite,
  fetchFavourites
} from "src/firebase/firebaseServices";
import { fechQuoteOfDay } from "src/state/actions/qot";
export const addFavourite = (quote) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    dispatch({
      type: "ADD_FAVOURITE",
      payload: addToFavourites(quote, uid)
    }).then(() => {
      dispatch(fechQuoteOfDay());
    });
  };
};
export const fetchFavouritesAction = (uid) => ({
  type: "FETCH_FAVOURITES",
  payload: fetchFavourites(uid)
});
export const deleteFavouriteAction = (id) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    dispatch({
      type: "DELETE_FAVOURITE",
      payload: deleteFavourite(uid, id)
    });
  };
};
