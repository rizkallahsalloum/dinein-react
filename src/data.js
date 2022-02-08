import Img1 from './images/slider/1.png';
import Img2 from './images/slider/2.png';
import Img3 from './images/slider/3.png';
import BurgerImg from './images/burger.svg';
import PizzaImg from './images/pizza.svg';
import SaladImg from './images/salad.svg';
import menuImages from './images/images';

export default [
  {
    _id: '1',
    title: 'Cheese burger',
    slug: 'cheese-burger',
    type: 'burger',
    icon: BurgerImg,
    images: menuImages.burger1,
    thumb: [menuImages.burger1, menuImages.burger2, menuImages.burger3],
    alt: 'Cheese Burger',
    ingredients:
      'Toasted bun with grilled beef toped with swiss cheese and lettuce',

    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias quas eveniet delectus, voluptatibus corrupti illum laboriosam iusto vero quod.',
    price: 21,
    count: 1,
  },
  {
    _id: '5',
    title: 'Spring Salad',
    slug: 'spring-salad',
    type: 'salad',
    icon: SaladImg,
    images: menuImages.salad1,
    thumb: [menuImages.salad1, menuImages.salad3, menuImages.salad4],
    alt: 'Spring Salad',
    ingredients:
      'Fresh tomatoes, cucumbers, lettuce topped with extra virgin oil',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias quas eveniet delectus, voluptatibus corrupti illum laboriosam iusto vero quod.',
    price: 10,
    count: 1,
  },
  {
    _id: '10',
    title: 'Veggy Pizza',
    slug: 'veggie-pizza',
    type: 'pizza',
    icon: PizzaImg,
    images: menuImages.pizza1,
    thumb: [menuImages.pizza1, menuImages.pizza2, menuImages.pizza3],
    alt: 'Veggy Pizza',
    ingredients:
      'Mozzarella, Tomatoes, Basil, Sauce, Parmesan, broccoli and mushrooms',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias quas eveniet delectus, voluptatibus corrupti illum laboriosam iusto vero quod.',
    price: 17,
    count: 1,
  },

  {
    _id: '7',
    title: 'Apple Salad',
    slug: 'apple-salad',
    type: 'salad',
    icon: SaladImg,
    images: menuImages.salad3,
    thumb: [menuImages.salad3, menuImages.salad1, menuImages.salad2],
    alt: 'Apple Salad',
    ingredients:
      'Juicy apples, lettuce, walnut and raisins, topped with extra virgin oil',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias quas eveniet delectus, voluptatibus corrupti illum laboriosam iusto vero quod.',
    price: 17,
    count: 1,
  },
  {
    _id: '13',
    title: 'Italian Pizza',
    slug: 'italian-pizza',
    type: 'pizza',
    icon: PizzaImg,
    images: menuImages.pizza4,
    thumb: [menuImages.pizza4, menuImages.pizza2, menuImages.pizza3],
    alt: 'Italian Pizza',
    ingredients: 'Pepperoni, Olives, Mozzarella, Sauce, Parmesan',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias quas eveniet delectus, voluptatibus corrupti illum laboriosam iusto vero quod.',
    price: 17,
    count: 1,
  },
  {
    _id: '12',
    title: 'BBQ Pizza',
    slug: 'bbq-pizza',
    type: 'pizza',
    icon: PizzaImg,
    images: menuImages.pizza3,
    thumb: [menuImages.pizza3, menuImages.pizza2, menuImages.pizza4],
    alt: 'BBQ Pizza',
    ingredients: 'BBQ chicken, Mozzarella,Sauce, Parmesan',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias quas eveniet delectus, voluptatibus corrupti illum laboriosam iusto vero quod.',
    price: 17,
    count: 1,
  },
  {
    _id: '2',
    title: 'Chicken Spam Burger',
    slug: 'chicken-spam-burger',
    type: 'burger',
    icon: BurgerImg,
    images: menuImages.burger2,
    thumb: [menuImages.burger2, menuImages.burger4, menuImages.burger1],
    alt: 'Chicken Spam Burger',
    ingredients:
      'Toasted bun with grilled chicken toped with spam and tomatoes and lettuce',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias quas eveniet delectus, voluptatibus corrupti illum laboriosam iusto vero quod.',
    price: 19,
    count: 1,
  },

  {
    _id: '6',
    title: 'Green Salad',
    slug: 'green-salad',
    type: 'salad',
    icon: SaladImg,
    images: menuImages.salad2,
    thumb: [menuImages.salad2, menuImages.salad4, menuImages.salad1],
    alt: 'Green Salad',
    ingredients: 'Fresh lettuce, carrots, topped with extra virgin oil',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias quas eveniet delectus, voluptatibus corrupti illum laboriosam iusto vero quod.',
    price: 17,
    count: 1,
  },

  {
    _id: '3',
    title: 'Double Burger',
    slug: 'double-burger',
    type: 'burger',
    icon: BurgerImg,
    images: menuImages.burger3,
    thumb: [menuImages.burger3, menuImages.burger1, menuImages.burger2],
    alt: 'Double Burger',
    ingredients:
      'Toasted bun with double grilled beef toped with swiss cheese tomatoes and lettuce',
    description:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias quas eveniet delectus, voluptatibus corrupti illum laboriosam iusto vero quod.',
    price: 50,
    count: 1,
  },

  {
    _id: '8',
    title: 'Salmon Salad',
    slug: 'salmon-salad',
    type: 'salad',
    icon: SaladImg,
    images: menuImages.salad4,
    thumb: [menuImages.salad4, menuImages.salad2, menuImages.salad1],
    alt: 'Salmon Salad',
    ingredients: 'Minced salmon, potatoes and lettuce toped with mayo sauce',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias quas eveniet delectus, voluptatibus corrupti illum laboriosam iusto vero quod.',
    price: 17,
    count: 1,
  },
  {
    _id: '11',
    title: 'Pepperoni Pizza',
    slug: 'pepperoni-pizza',
    type: 'pizza',
    icon: PizzaImg,
    images: menuImages.pizza2,
    thumb: [menuImages.pizza2, menuImages.pizza3, menuImages.pizza2],
    alt: 'Pepperoni Pizza',
    ingredients: 'Pepperoni, Mozzarella, Tomatoes, Basil, Sauce, Parmesan',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias quas eveniet delectus, voluptatibus corrupti illum laboriosam iusto vero quod.',
    price: 17,
    count: 1,
  },
  {
    _id: '9',
    title: 'Caesar Salad',
    slug: 'caesar-salad',
    type: 'salad',
    icon: SaladImg,
    images: menuImages.salad5,
    thumb: [menuImages.salad5, menuImages.salad2, menuImages.salad1],
    alt: 'Caesar Salad',
    ingredients:
      'Romaine lettuce and croutons, parmesan cheese,dressed with lemon juice and olive oil,',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias quas eveniet delectus, voluptatibus corrupti illum laboriosam iusto vero quod.',
    price: 17,
    count: 1,
  },

  {
    _id: '4',
    title: 'Chicken Burger',
    slug: 'chicken-burger',
    type: 'burger',
    icon: BurgerImg,
    images: menuImages.burger4,
    thumb: [menuImages.burger4, menuImages.burger2, menuImages.burger3],
    alt: 'Chicken Burger',
    ingredients:
      'Toasted bun with grilled beef toped with swiss cheese and lettuce',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestias quas eveniet delectus, voluptatibus corrupti illum laboriosam iusto vero quod.',
    price: 15,
    count: 1,
  },
];
