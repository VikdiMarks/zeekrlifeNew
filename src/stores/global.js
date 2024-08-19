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
  other: [],
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
  addCartOther: (data) =>
    set((state) => {
      if (!data) return {};
      let resPrice = state.cart.price;
      const price = parseFloat(data.price);

      const other = state.other.filter((item) => {
        const isDupl = !!(
          state.other.length > 0 &&
          item.id.slice(0, item.id.length - 1) ===
            data.id.slice(0, data.id.length - 1)
        );

        if (isDupl) {
          resPrice -= isNaN(parseFloat(item.price))
            ? 0
            : parseFloat(item.price);
        }

        console.log(
          isDupl,
          state.other.find(
            (item) =>
              item.id.slice(0, item.id.length - 1) ===
              data.id.slice(0, data.id.length - 1),
          ),
          state.other,
          data,
        );

        return !isDupl;
      });

      return {
        cart: {
          ...state.cart,
          price: isNaN(price) ? resPrice : resPrice + price,
        },
        other: [...other, data],
      };
    }),

  setCartPrice: (price) =>
    set((state) => ({ cart: { ...state.cart, price: price } })),
}));
