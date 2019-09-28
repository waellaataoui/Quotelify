import database from "src/firebase/firebase";
export const addToFavourites = (quote, uid) => {
  return database
    .ref(`users/${uid}/favourites`)
    .push(quote)
    .then((ref) => ({
      ...quote,
      id: ref.key
    }));
};
export const fetchFavourites = (uid) => {
  let quotes = [];
  return database
    .ref(`users/${uid}/favourites`)
    .once("value")
    .then((snapshot) => {
      snapshot.forEach((child) => {
        if (child) {
          quotes.push({ ...child.val(), id: child.key });
        }
      });
      return quotes;
    });
};

export const deleteFavourite = (uid, id) => {
  return database
    .ref(`users/${uid}/favourites/${id}`)
    .remove()
    .then(() => id);
};
