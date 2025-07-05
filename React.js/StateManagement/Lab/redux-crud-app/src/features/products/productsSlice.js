import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: "1",
      name: "iPhone 15",
      category: "Electronics",
      price: 999,
      inStock: true,
    },
    {
      id: "2",
      name: "MacBook Pro",
      category: "Electronics",
      price: 1999,
      inStock: true,
    },
    {
      id: "3",
      name: "AirPods Pro",
      category: "Accessories",
      price: 249,
      inStock: false,
    },
  ],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: {
      reducer(state, action) {
        state.products.push(action.payload);
      },
      prepare(name, category, price, inStock) {
        return {
          payload: {
            id: nanoid(),
            name,
            category,
            price: Number(price),
            inStock: Boolean(inStock),
          },
        };
      },
    },
    updateProduct: (state, action) => {
      const { id, name, category, price, inStock } = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === id
      );
      if (existingProduct) {
        existingProduct.name = name;
        existingProduct.category = category;
        existingProduct.price = Number(price);
        existingProduct.inStock = Boolean(inStock);
      }
    },
    deleteProduct: (state, action) => {
      const id = action.payload;
      state.products = state.products.filter((product) => product.id !== id);
    },
  },
});

export const { addProduct, updateProduct, deleteProduct } =
  productsSlice.actions;

export const selectAllProducts = (state) => state.products.products;
export const selectProductById = (state, productId) =>
  state.products.products.find((product) => product.id === productId);

export default productsSlice.reducer;
