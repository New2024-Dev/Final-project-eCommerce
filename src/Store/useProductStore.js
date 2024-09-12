import { create } from 'zustand';
import axios from 'axios';

const useProductStore = create((set) => ({
  products: [],
  currentPage: 1,
  productsPerPage: 8,
  selectedProductId: null,
  cartItems: [],
  isCartOpen: false,

  fetchProducts: async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    set({ products: response.data });
  },

  setPage: (pageNumber) => set({ currentPage: pageNumber }),

  setSelectedProduct: (id) => set({ selectedProductId: id }),

  getCurrentProducts: (state) => {
    const indexOfLastProduct = state.currentPage * state.productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - state.productsPerPage;
    return state.products.slice(indexOfFirstProduct, indexOfFirstProduct + state.productsPerPage);
  },

  setProducts: (products) => set({ products }),

  addToCart: (product) => set((state) => {
    const existingProduct = state.cartItems.find(item => item.id === product.id);
    const updatedCartItems = existingProduct 
      ? state.cartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      : [...state.cartItems, { ...product, quantity: 1 }];

    return {
      cartItems: updatedCartItems,
      isCartOpen: true,  // فتح CartSidebar تلقائيًا عند إضافة منتج للعربة
    };
  }),

  // addToCart: (product) => set((state) => {
  //   const existingProduct = state.cartItems.find(item => item.id === product.id);
  //   if (existingProduct) {
  //     return {
  //       cartItems: state.cartItems.map(item =>
  //         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
  //       ),
  //     };
  //   } else {
  //     return {
  //       cartItems: [...state.cartItems, { ...product, quantity: 1 }],
  //     };
  //   }
  // }),

  removeFromCart: (id) => set((state) => ({
    cartItems: state.cartItems.filter((item) => item.id !== id),
  })),

  increaseQuantity: (id) => set((state) => ({
    cartItems: state.cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ),
  })),

  decreaseQuantity: (id) => set((state) => ({
    cartItems: state.cartItems.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ),
  })),

  closeCart: () => set({ isCartOpen: false }),

}));

export default useProductStore;