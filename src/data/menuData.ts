export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  isSpecial?: boolean;
  isHot?: boolean;
  isCold?: boolean;
  isAddOn?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  items: MenuItem[];
}

const placeholderImages = {
  pizza: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=400',
  pasta: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=400',
  noodles: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=400',
  soup: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=400',
  momos: 'https://images.pexels.com/photos/6646069/pexels-photo-6646069.jpeg?auto=compress&cs=tinysrgb&w=400',
  sandwich: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=400',
  burger: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400',
  fries: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=400',
  wrap: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400',
  garlicBread: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400',
  maggi: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400',
  coffee: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
  coldCoffee: 'https://images.pexels.com/photos/2615323/pexels-photo-2615323.jpeg?auto=compress&cs=tinysrgb&w=400',
  shake: 'https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg?auto=compress&cs=tinysrgb&w=400',
  tea: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400',
  mojito: 'https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg?auto=compress&cs=tinysrgb&w=400',
  water: 'https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=400',
  fruitBowl: 'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=400',
  springRoll: 'https://images.pexels.com/photos/5836778/pexels-photo-5836778.jpeg?auto=compress&cs=tinysrgb&w=400',
  chilliPotato: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
  paneer: 'https://images.pexels.com/photos/9609838/pexels-photo-9609838.jpeg?auto=compress&cs=tinysrgb&w=400',
};

export const menuCategories: MenuCategory[] = [
  {
    id: 'turf-special',
    name: 'Turf Special',
    icon: 'Star',
    items: [
      { id: 'ts-1', name: 'Peanut Banana Milk Shake', price: 150, category: 'turf-special', image: placeholderImages.shake, isSpecial: true, isCold: true },
      { id: 'ts-2', name: 'Fruit Bowl', price: 150, category: 'turf-special', image: placeholderImages.fruitBowl, isSpecial: true },
    ],
  },
  {
    id: 'beverages',
    name: 'Hot & Cold Beverages',
    icon: 'Coffee',
    items: [
      { id: 'bv-1', name: 'Tea', price: 25, category: 'beverages', image: placeholderImages.tea, isHot: true },
      { id: 'bv-2', name: 'Hot Coffee', price: 60, category: 'beverages', image: placeholderImages.coffee, isHot: true },
      { id: 'bv-3', name: 'Hot Chocolate', price: 80, category: 'beverages', image: placeholderImages.coffee, isHot: true },
      { id: 'bv-4', name: 'Cold Coffee', price: 80, category: 'beverages', image: placeholderImages.coldCoffee, isCold: true },
      { id: 'bv-5', name: 'Caramel Coffee', price: 100, category: 'beverages', image: placeholderImages.coldCoffee, isCold: true },
      { id: 'bv-6', name: 'Hazelnut Coffee', price: 100, category: 'beverages', image: placeholderImages.coldCoffee, isCold: true },
      { id: 'bv-7', name: 'Chocolate Shake', price: 90, category: 'beverages', image: placeholderImages.shake, isCold: true },
      { id: 'bv-8', name: 'Oreo Shake', price: 100, category: 'beverages', image: placeholderImages.shake, isCold: true },
      { id: 'bv-9', name: 'KitKat Shake', price: 100, category: 'beverages', image: placeholderImages.shake, isCold: true },
      { id: 'bv-10', name: 'Iced Tea', price: 80, category: 'beverages', image: placeholderImages.tea, isCold: true },
      { id: 'bv-11', name: 'Mojito', price: 90, category: 'beverages', image: placeholderImages.mojito, isCold: true },
    ],
  },
  {
    id: 'pizza',
    name: 'Pizza',
    icon: 'Pizza',
    items: [
      { id: 'pz-1', name: 'Margherita', price: 120, category: 'pizza', image: placeholderImages.pizza },
      { id: 'pz-2', name: 'Exotic Vegetable', price: 150, category: 'pizza', image: placeholderImages.pizza },
      { id: 'pz-3', name: 'Farmhouse', price: 160, category: 'pizza', image: placeholderImages.pizza },
      { id: 'pz-4', name: 'Peppy Paneer', price: 180, category: 'pizza', image: placeholderImages.pizza },
    ],
  },
  {
    id: 'pasta',
    name: 'Pasta',
    icon: 'Utensils',
    items: [
      { id: 'ps-1', name: 'Penne Alfredo', price: 150, category: 'pasta', image: placeholderImages.pasta },
      { id: 'ps-2', name: 'Penne Arrabbiata', price: 150, category: 'pasta', image: placeholderImages.pasta },
      { id: 'ps-3', name: 'Penne Pink Sauce', price: 150, category: 'pasta', image: placeholderImages.pasta },
    ],
  },
  {
    id: 'chinese',
    name: 'Chinese',
    icon: 'Soup',
    items: [
      { id: 'ch-1', name: 'Veg Noodles', price: 120, category: 'chinese', image: placeholderImages.noodles },
      { id: 'ch-2', name: 'Chilli Garlic Noodles', price: 130, category: 'chinese', image: placeholderImages.noodles },
      { id: 'ch-3', name: 'Spring Rolls', price: 120, category: 'chinese', image: placeholderImages.springRoll },
      { id: 'ch-4', name: 'Chilli Potato', price: 130, category: 'chinese', image: placeholderImages.chilliPotato },
      { id: 'ch-5', name: 'Honey Chilli Potato', price: 150, category: 'chinese', image: placeholderImages.chilliPotato },
      { id: 'ch-6', name: 'Chilli Paneer', price: 180, category: 'chinese', image: placeholderImages.paneer },
    ],
  },
  {
    id: 'chow-bowls',
    name: 'Chow Bowls',
    icon: 'Salad',
    items: [
      { id: 'cb-1', name: 'Hot and Sour', price: 90, category: 'chow-bowls', image: placeholderImages.soup },
      { id: 'cb-2', name: 'Manchow', price: 90, category: 'chow-bowls', image: placeholderImages.soup },
      { id: 'cb-3', name: 'Tomato', price: 90, category: 'chow-bowls', image: placeholderImages.soup },
      { id: 'cb-4', name: 'Add-on Noodles', price: 30, category: 'chow-bowls', image: placeholderImages.noodles, isAddOn: true },
    ],
  },
  {
    id: 'momos',
    name: 'Momos',
    icon: 'CircleDot',
    items: [
      { id: 'mm-1', name: 'Vegetable Momos', price: 80, category: 'momos', image: placeholderImages.momos },
      { id: 'mm-2', name: 'Paneer Momos', price: 100, category: 'momos', image: placeholderImages.momos },
    ],
  },
  {
    id: 'sandwich',
    name: 'Sandwich',
    icon: 'Sandwich',
    items: [
      { id: 'sw-1', name: 'Veg Grilled', price: 120, category: 'sandwich', image: placeholderImages.sandwich },
      { id: 'sw-2', name: 'Cold Veg', price: 100, category: 'sandwich', image: placeholderImages.sandwich },
      { id: 'sw-3', name: 'Tandoori Paneer', price: 150, category: 'sandwich', image: placeholderImages.sandwich },
      { id: 'sw-4', name: 'Cheese n Corn', price: 130, category: 'sandwich', image: placeholderImages.sandwich },
      { id: 'sw-5', name: 'Pizza Sandwich', price: 140, category: 'sandwich', image: placeholderImages.sandwich },
    ],
  },
  {
    id: 'burger',
    name: 'Burger',
    icon: 'Beef',
    items: [
      { id: 'bg-1', name: 'Aloo Tikki Burger', price: 50, category: 'burger', image: placeholderImages.burger },
      { id: 'bg-2', name: 'Veggie Burger', price: 80, category: 'burger', image: placeholderImages.burger },
      { id: 'bg-3', name: 'Tandoori Paneer Burger', price: 120, category: 'burger', image: placeholderImages.burger },
      { id: 'bg-4', name: 'Add-on Cheese Slice', price: 20, category: 'burger', image: placeholderImages.burger, isAddOn: true },
    ],
  },
  {
    id: 'fries',
    name: 'Fries',
    icon: 'Carrot',
    items: [
      { id: 'fr-1', name: 'Classic Salted', price: 80, category: 'fries', image: placeholderImages.fries },
      { id: 'fr-2', name: 'Peri Peri', price: 100, category: 'fries', image: placeholderImages.fries },
      { id: 'fr-3', name: 'Cheese Peri Peri', price: 160, category: 'fries', image: placeholderImages.fries },
      { id: 'fr-4', name: 'Veggie Overload', price: 180, category: 'fries', image: placeholderImages.fries },
    ],
  },
  {
    id: 'wraps',
    name: 'Wraps',
    icon: 'Scroll',
    items: [
      { id: 'wr-1', name: 'Aloo Tikki Wrap', price: 80, category: 'wraps', image: placeholderImages.wrap },
      { id: 'wr-2', name: 'Veggie Wrap', price: 100, category: 'wraps', image: placeholderImages.wrap },
      { id: 'wr-3', name: 'Paneer Wrap', price: 120, category: 'wraps', image: placeholderImages.wrap },
    ],
  },
  {
    id: 'garlic-breads',
    name: 'Garlic Breads',
    icon: 'Croissant',
    items: [
      { id: 'gb-1', name: 'Cheese Garlic Bread', price: 100, category: 'garlic-breads', image: placeholderImages.garlicBread },
      { id: 'gb-2', name: 'Vegetable Garlic Bread', price: 100, category: 'garlic-breads', image: placeholderImages.garlicBread },
      { id: 'gb-3', name: 'Stuffed Garlic Bread', price: 140, category: 'garlic-breads', image: placeholderImages.garlicBread },
    ],
  },
  {
    id: 'maggi',
    name: 'Maggi',
    icon: 'ChefHat',
    items: [
      { id: 'mg-1', name: 'Masala Maggi', price: 50, category: 'maggi', image: placeholderImages.maggi },
      { id: 'mg-2', name: 'Vegetable Loaded Maggi', price: 60, category: 'maggi', image: placeholderImages.maggi },
      { id: 'mg-3', name: 'Paneer Maggi', price: 70, category: 'maggi', image: placeholderImages.maggi },
    ],
  },
  {
    id: 'water',
    name: 'Water',
    icon: 'Droplets',
    items: [
      { id: 'wt-1', name: 'Water Bottle', price: 20, category: 'water', image: placeholderImages.water },
      { id: 'wt-2', name: 'Alkaline Water', price: 150, category: 'water', image: placeholderImages.water },
    ],
  },
];

export const getAllItems = (): MenuItem[] => {
  return menuCategories.flatMap(category => category.items);
};
