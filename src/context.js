import React from 'react';
import items from './data';

import BurgerImg from './images/burger.svg';
import PizzaImg from './images/pizza.svg';
import SaladImg from './images/salad.svg';
import AllImg from './images/all.svg';
export const DataContext = React.createContext();
const allCategories = ['all', ...new Set(items.map((item) => item.type))];
const icons = [AllImg, BurgerImg, PizzaImg, SaladImg];
export class DataProvider extends React.Component {
  state = {
    products: [],
    shoppingCart: [],
    icons,
    categories: allCategories,
    sortedProducts: [],
    typeBurger: [],
    typeSalad: [],
    typePizza: [],
    loading: true,
    cart: [],
    total: 0,
  };

  addCart = (id) => {
    const { products, cart } = this.state;
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      this.setState({ cart: [...cart, ...data] }, () => this.getTotal());
    }

    // put an alert here in else
  };
  reduction = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };
  increase = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };
  removeProduct = (id) => {
    const { cart } = this.state;
    cart.forEach((item, index) => {
      if (item._id === id) {
        cart.splice(index, 1);
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };
  getTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    this.setState({ total: res });
  };
  filterItems = (type) => {
    if (type === 'all') {
      this.setState({
        sortedProducts: items,
      });
      return;
    }
    const newItems = items.filter((item) => item.type === type);

    this.setState({
      sortedProducts: newItems,
    });

    this.getTotal();
    return;
  };
  getProduct = (slug) => {
    let tempProducts = [...this.state.products];
    const product = tempProducts.find((product) => product.slug === slug);

    return product;
  };

  formatData(paramItems) {
    let tempItems = paramItems.map((item) => {
      let product = { ...item };
      return product;
    });

    return tempItems;
  }

  componentDidUpdate() {
    localStorage.setItem('dataCart', JSON.stringify(this.state.cart));
    localStorage.setItem('dataTotal', JSON.stringify(this.state.total));
  }

  componentDidMount() {
    let products = this.formatData(items);

    const dataCart = JSON.parse(localStorage.getItem('dataCart'));
    if (dataCart !== null) {
      this.setState({ cart: dataCart });
    }
    const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
    if (dataTotal !== null) {
      this.setState({ total: dataTotal });
    }
    let typeBurger = products.filter((product) => product.type === 'burger');
    let typeSalad = products.filter((product) => product.type === 'salad');
    let typePizza = products.filter((product) => product.type === 'pizza');
    this.setState({
      products,
      sortedProducts: products,
      typeBurger,
      typeSalad,
      typePizza,
      loading: false,
    });
  }

  render() {
    const { total } = this.state;
    const {
      addCart,
      reduction,
      increase,
      removeProduct,
      getTotal,
      filterItems,
      menuItems,
    } = this;

    return (
      <DataContext.Provider
        value={{
          ...this.state,
          getProduct: this.getProduct,
          addCart,
          reduction,
          increase,
          removeProduct,
          total,
          getTotal,
          filterItems,
          menuItems,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
// const ProductConsumer = DataContext.Consumer;

// export { DataProvider, ProductConsumer, DataContext };
