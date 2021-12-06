import { UPDATE, CLEAR, FILTER } from "./Action";
export const reducerFunction = (state, action) => {
  switch (action.type) {
    case UPDATE:
      const { name, value } = action.payload;
      return { ...state, filter: { ...state.filter, [name]: value } };

    case FILTER:
      let newProducts = [...state.products];
      if (state.filter.price) {
        if (state.filter.price.toLowerCase() === "high-to-low") {
          newProducts.sort((a, b) => b.price - a.price);
        }
        if (state.filter.price.toLowerCase() === "low-to-high") {
          newProducts.sort((a, b) => a.price - b.price);
        }
      }
      if (state.filter.ideal) {
        newProducts = newProducts.filter(
          (product) => product.ideal === state.filter.ideal.toLowerCase()
        );
      }
      if (state.filter.size) {
        newProducts = newProducts.filter((product) => {
          if (product.size.indexOf(state.filter.size) !== -1) {
            return product;
          }
          return false
        });
      }
      if (state.filter.brand) {
        newProducts = newProducts.filter(
          (product) =>
            product.brand.split(' ').join("").toUpperCase() ===
            state.filter.brand.split(' ').join("").toUpperCase()
        );
      }
      return { ...state, showItems: newProducts };

    case CLEAR:
      return {
        ...state,
        filter: {
          price: "",
          ideal: "",
          size: "",
          brand: "",
        },
      };

    default:
      return state;
  }
};
