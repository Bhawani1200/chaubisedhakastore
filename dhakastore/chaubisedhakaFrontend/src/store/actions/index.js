import { data } from "react-router-dom";
import api from "../../api/api";

export const fetchProducts = (queryString) => async (dispatch) => {
  try {
    dispatch({ type: "IS_FETCHING" });
    const { data } = await api.get(`/public/products?${queryString}`);
    dispatch({
      type: "FETCH_PRODUCTS",
      payload: data.content,
      pageNumber: data.pageNumber,
      pgeSize: data.pageSize,
      totalElements: data.totalElements,
      totalPages: data.totalPages,
      lastPage: data.lastPage,
    });
    dispatch({ type: "IS_SUCCESS" });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "IS_ERROR",
      payload: error?.response?.data?.message || "Failed to fetch products ",
    });
  }
};

export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch({ type: "CATEGORY_LOADER" });
    const { data } = await api.get(`/public/categories`);
    dispatch({
      type: "FETCH_CATEGORIES",
      payload: data.content,
      pageNumber: data.pageNumber,
      pgeSize: data.pageSize,
      totalElements: data.totalElements,
      totalPages: data.totalPages,
      lastPage: data.lastPage,
    });
    dispatch({ type: "CATEGORY_SUCCESS" });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "IS_ERROR",
      payload: error?.response?.data?.message || "Failed to fetch categories ",
    });
  }
};

export const addToCart =
  (data, qty = 1, toast) =>
  (dispatch, getState) => {
    const { products } = getState().products;
    const getProduct = products.find(
      (item) => item.productId === data.productId
    );

    const isQuantityExist = getProduct.quantity >= qty;

    if (isQuantityExist) {
      dispatch({ type: "ADD_CART", payload: { ...data, quantity: qty } });
      toast.success(`${data?.productName} added to cart successfully`);
      localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
    } else {
      toast.error("Out of stock");
    }
  };

export const increaseCartQuantity =
  (data, toast, currentQuantity, setCurrentQuantity) =>
  (dispatch, getState) => {
    
    const { products } = getState().products;

    const getProduct = products.find(
      (item) => item.productId === data.productId
    );

    if (!getProduct) {
      toast.error("Product not found");
    }

    const isQuantityExist = getProduct.quantity >= currentQuantity + 1;

    if (isQuantityExist) {
      const newQuantity = currentQuantity + 1;
      setCurrentQuantity(newQuantity);

      dispatch({
        type: "ADD_CART",
        payload: { ...data, quantity: newQuantity + 1 },
      });
      localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
    } else {
      toast.error("Quantity Reached to Limit");
    }
  };
// export const increaseCartQuantity =
//   (data, toast, currentQuantity, setCurrentQuantity) =>
//   (dispatch, getState) => {
//     const state = getState();

//     const cartItems =
//       state?.carts?.cartItems ||
//       state?.carts?.cart ||
//       state?.cartItems ||
//       state?.cart ||
//       [];

//     console.log("Cart items found:", cartItems);
//     console.log("Data received:", data);

//     const getProduct = cartItems.find(
//       (item) => item.productId === data.productId
//     );

//     if (!getProduct) {
//       toast.error("Product not found in cart");
//       return;
//     }

//     const newQuantity = currentQuantity + 1;

//     if (newQuantity > 10) {
//       toast.error("Quantity reached limit");
//       return;
//     }

//     setCurrentQuantity(newQuantity);

//     dispatch({
//       type: "ADD_CART",
//       payload: { ...data, quantity: newQuantity },
//     });

//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   };

export const decreaseCartQuantity =
  (data, newQuantity) => (dispatch, getState) => {
    dispatch({
      type: "ADD_CART",
      payload: { ...data, quantity: newQuantity },
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
  };
