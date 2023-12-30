export const addToWishlist = (data) => (dispatch, getState) => {
  dispatch({ type: "addToWishlist", payload: data });

  const wishlistItems = getState().wishlist.wishlist;
  localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  return data;
};

export const removeFromWishlist = (data) => (dispatch, getState) => {
  dispatch({ type: "removeFromWishlist", payload: data._id });

  const wishlistItems = getState().wishlist.wishlist;
  localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  return data;
};
