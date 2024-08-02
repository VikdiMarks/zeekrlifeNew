import { create } from "zustand";
import imgYou from "../assets/img/you.png";

export const useCars = create((set, get) => ({
  model: {
    header: "",
    price: 0,
  },
  cart: {
    model: {
      header: "",
      price: 0,
    },
    version: {
      name: 'версия "YOU"',
      desc: "Флагман производительности",
      currentPrice: "349,000р",
      oldPrice: "386,000р",
      id: 1,
      img: imgYou,
    },
    price: 0,
  },
  setModel: (model) =>
    set((state) => ({
      cart: {
        ...state.cart,
        model: model,
        price:
          state.cart.model.price +
          parseFloat(state.cart.version.currentPrice) * 1000,
      },
      model: model,
    })),
  addCartVersion: (version) =>
    set((state) => ({
      cart: {
        ...state.cart,
        version: version,
        price:
          state.cart.model.price +
          parseFloat(state.cart.version.currentPrice) * 1000,
      },
    })),
  setCartPrice: (price) =>
    set((state) => ({ cart: { ...state.cart, price: price } })),
}));
