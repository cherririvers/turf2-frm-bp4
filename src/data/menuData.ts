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

const cafe = (name: string) => `/turf360-cafe-images/${name}`;
const pexels = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=400`;

export const menuCategories: MenuCategory[] = [
  {
    id: 'turf-special',
    name: 'Turf Special',
    icon: 'Star',
    items: [
      { id: 'ts-1', name: 'Peanut Banana Milk Shake', price: 150, category: 'turf-special', image: cafe('peanutbananamilkshakewebp'), isSpecial: true, isCold: true },
      { id: 'ts-2', name: 'Fruit Bowl', price: 150, category: 'turf-special', image: cafe('fruitball.jpeg'), isSpecial: true },
    ],
  },
  {
    id: 'beverages',
    name: 'Hot & Cold Beverages',
    icon: 'Coffee',
    items: [
      { id: 'bv-1', name: 'Tea', price: 25, category: 'beverages', image: cafe('tea.webp'), isHot: true },
      { id: 'bv-2', name: 'Hot Coffee', price: 60, category: 'beverages', image: cafe('hotcoffee.avif'), isHot: true },
      { id: 'bv-3', name: 'Hot Chocolate', price: 80, category: 'beverages', image: cafe('hotchocolate.jpg'), isHot: true },
      { id: 'bv-4', name: 'Cold Coffee', price: 80, category: 'beverages', image: pexels(2615323), isCold: true },
      { id: 'bv-5', name: 'Caramel Coffee', price: 100, category: 'beverages', image: pexels(214333), isCold: true },
      { id: 'bv-6', name: 'Hazelnut Coffee', price: 100, category: 'beverages', image: pexels(851555), isCold: true },
      { id: 'bv-7', name: 'Chocolate Shake', price: 90, category: 'beverages', image: pexels(11381485), isCold: true },
      { id: 'bv-8', name: 'Oreo Shake', price: 100, category: 'beverages', image: cafe('oreoshake.webp'), isCold: true },
      { id: 'bv-9', name: 'KitKat Shake', price: 100, category: 'beverages', image: cafe('Kit-Kat-Milkshake-webp'), isCold: true },
      { id: 'bv-10', name: 'Iced Tea', price: 80, category: 'beverages', image: cafe('iced_tea.webp'), isCold: true },
      { id: 'bv-11', name: 'Mojito', price: 90, category: 'beverages', image: cafe('mojito.jpeg'), isCold: true },
    ],
  },
  {
    id: 'pizza',
    name: 'Pizza',
    icon: 'Pizza',
    items: [
      { id: 'pz-1', name: 'Margherita', price: 120, category: 'pizza', image: cafe('margherita.jpeg') },
      { id: 'pz-2', name: 'Exotic Vegetable', price: 150, category: 'pizza', image: pexels(2260200) },
      { id: 'pz-3', name: 'Farmhouse', price: 160, category: 'pizza', image: cafe('farmhousepizza.webp') },
      { id: 'pz-4', name: 'Peppy Paneer', price: 180, category: 'pizza', image: cafe('peppypaneer.jpeg') },
    ],
  },
  {
    id: 'pasta',
    name: 'Pasta',
    icon: 'Utensils',
    items: [
      { id: 'ps-1', name: 'Penne Alfredo', price: 150, category: 'pasta', image: cafe('Penne-Alfredo.jpg') },
      { id: 'ps-2', name: 'Penne Arrabbiata', price: 150, category: 'pasta', image: cafe('Penne-with-arrabbiata-sauce-4.webp') },
      { id: 'ps-3', name: 'Penne Pink Sauce', price: 150, category: 'pasta', image: cafe('Pink-Sauce-Pasta.jpg') },
    ],
  },
  {
    id: 'chinese',
    name: 'Chinese',
    icon: 'Soup',
    items: [
      { id: 'ch-1', name: 'Veg Noodles', price: 120, category: 'chinese', image: cafe('Veg-Hakka-Noodles.webp') },
      { id: 'ch-2', name: 'Chilli Garlic Noodles', price: 130, category: 'chinese', image: cafe('chiligarlic_noodle.jpg') },
      { id: 'ch-3', name: 'Spring Rolls', price: 120, category: 'chinese', image: cafe('Spring-Roll-Feature.jpg') },
      { id: 'ch-4', name: 'Chilli Potato', price: 130, category: 'chinese', image: cafe('chili-potato.jpg') },
      { id: 'ch-5', name: 'Honey Chilli Potato', price: 150, category: 'chinese', image: cafe('honeychilipotato.jpg') },
      { id: 'ch-6', name: 'Chilli Paneer', price: 180, category: 'chinese', image: cafe('chilipaneer.webp') },
    ],
  },
  {
    id: 'chow-bowls',
    name: 'Chow Bowls',
    icon: 'Salad',
    items: [
      { id: 'cb-1', name: 'Hot and Sour', price: 90, category: 'chow-bowls', image: cafe('chinese-hot-and-sour-soup-1.jpg') },
      { id: 'cb-2', name: 'Manchow', price: 90, category: 'chow-bowls', image: cafe('chowbowl.jpg') },
      { id: 'cb-3', name: 'Tomato', price: 90, category: 'chow-bowls', image: cafe('tomato_chow_chow.webp') },
      { id: 'cb-4', name: 'Add-on Noodles', price: 30, category: 'chow-bowls', image: cafe('add_on_noodle.webp'), isAddOn: true },
    ],
  },
  {
    id: 'momos',
    name: 'Momos',
    icon: 'CircleDot',
    items: [
      { id: 'mm-1', name: 'Vegetable Momos', price: 80, category: 'momos', image: cafe('vegetablemomos.jpeg') },
      { id: 'mm-2', name: 'Paneer Momos', price: 100, category: 'momos', image: cafe('paneermomos.jpg') },
    ],
  },
  {
    id: 'sandwich',
    name: 'Sandwich',
    icon: 'Sandwich',
    items: [
      { id: 'sw-1', name: 'Veg Grilled', price: 120, category: 'sandwich', image: cafe('veggrilledsandwich.webp') },
      { id: 'sw-2', name: 'Cold Veg', price: 100, category: 'sandwich', image: cafe('coldvegsandwich.jpg') },
      { id: 'sw-3', name: 'Tandoori Paneer', price: 150, category: 'sandwich', image: cafe('Tandoori-Paneer-Sandwich.jpg') },
      { id: 'sw-4', name: 'Cheese n Corn', price: 130, category: 'sandwich', image: cafe('cheese_n_corn_sandwich.jpg') },
      { id: 'sw-5', name: 'Pizza Sandwich', price: 140, category: 'sandwich', image: cafe('pizzasandwich.jpg') },
    ],
  },
  {
    id: 'burger',
    name: 'Burger',
    icon: 'Beef',
    items: [
      { id: 'bg-1', name: 'Aloo Tikki Burger', price: 50, category: 'burger', image: cafe('aalootikkiburger.jpg') },
      { id: 'bg-2', name: 'Veggie Burger', price: 80, category: 'burger', image: cafe('burger-recipe-1.webp') },
      { id: 'bg-3', name: 'Tandoori Paneer Burger', price: 120, category: 'burger', image: cafe('tandooripaneerburger.jpeg') },
      { id: 'bg-4', name: 'Add-on Cheese Slice', price: 20, category: 'burger', image: pexels(821365), isAddOn: true },
    ],
  },
  {
    id: 'fries',
    name: 'Fries',
    icon: 'Carrot',
    items: [
      { id: 'fr-1', name: 'Classic Salted', price: 80, category: 'fries', image: pexels(1583884) },
      { id: 'fr-2', name: 'Peri Peri', price: 100, category: 'fries', image: pexels(2962450) },
      { id: 'fr-3', name: 'Cheese Peri Peri', price: 160, category: 'fries', image: pexels(14639252) },
      { id: 'fr-4', name: 'Veggie Overload', price: 180, category: 'fries', image: pexels(4109273) },
    ],
  },
  {
    id: 'wraps',
    name: 'Wraps',
    icon: 'Scroll',
    items: [
      { id: 'wr-1', name: 'Aloo Tikki Wrap', price: 80, category: 'wraps', image: pexels(461198) },
      { id: 'wr-2', name: 'Veggie Wrap', price: 100, category: 'wraps', image: pexels(4955266) },
      { id: 'wr-3', name: 'Paneer Wrap', price: 120, category: 'wraps', image: pexels(30790363) },
    ],
  },
  {
    id: 'garlic-breads',
    name: 'Garlic Breads',
    icon: 'Croissant',
    items: [
      { id: 'gb-1', name: 'Cheese Garlic Bread', price: 100, category: 'garlic-breads', image: pexels(1775043) },
      { id: 'gb-2', name: 'Vegetable Garlic Bread', price: 100, category: 'garlic-breads', image: pexels(6660052) },
      { id: 'gb-3', name: 'Stuffed Garlic Bread', price: 140, category: 'garlic-breads', image: pexels(10337726) },
    ],
  },
  {
    id: 'maggi',
    name: 'Maggi',
    icon: 'ChefHat',
    items: [
      { id: 'mg-1', name: 'Masala Maggi', price: 50, category: 'maggi', image: pexels(4518843) },
      { id: 'mg-2', name: 'Vegetable Loaded Maggi', price: 60, category: 'maggi', image: pexels(7492300) },
      { id: 'mg-3', name: 'Paneer Maggi', price: 70, category: 'maggi', image: pexels(12984979) },
    ],
  },
  {
    id: 'water',
    name: 'Water',
    icon: 'Droplets',
    items: [
      { id: 'wt-1', name: 'Water Bottle', price: 20, category: 'water', image: pexels(327090) },
      { id: 'wt-2', name: 'Alkaline Water', price: 150, category: 'water', image: pexels(11860562) },
    ],
  },
];

export const getAllItems = (): MenuItem[] => {
  return menuCategories.flatMap(category => category.items);
};
