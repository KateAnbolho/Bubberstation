import { Food } from '../PreferencesMenu/types';

export const TYPE_ICONS = {
  'Can Make': 'utensils',
  [Food.Bloody]: 'tint', // BUBBER EDIT ADDITION - Hemophage Food
  [Food.Alcohol]: 'wine-glass',
  [Food.Breakfast]: 'sun',
  [Food.Bugs]: 'bug',
  [Food.Cloth]: 'tshirt',
  [Food.Dairy]: 'cheese',
  [Food.Fried]: 'fire',
  [Food.Fruit]: 'apple-alt',
  [Food.Gore]: 'skull',
  [Food.Grain]: 'wheat-awn',
  [Food.Gross]: 'trash',
  [Food.Junkfood]: 'pizza-slice',
  [Food.Meat]: 'bacon',
  [Food.Nuts]: 'seedling',
  [Food.Oranges]: 'apple-alt',
  [Food.Pineapple]: 'apple-alt',
  [Food.Raw]: 'drumstick-bite',
  [Food.Seafood]: 'fish',
  [Food.Stone]: 'gem',
  [Food.Sugar]: 'candy-cane',
  [Food.Toxic]: 'biohazard',
  [Food.Vegetables]: 'carrot',
} as const;

export const CATEGORY_ICONS_CRAFTING = {
  'Can Make': 'hammer',
  'Weapons Melee': 'hand-fist',
  'Weapons Ranged': 'gun',
  'Weapon Ammo': 'box',
  Robotics: 'robot',
  Misc: 'shapes',
  Tribal: 'campground',
  Clothing: 'shirt',
  Drinks: 'wine-bottle',
  Chemistry: 'microscope',
  Atmospherics: 'fan',
  Structures: 'cube',
  Tiles: 'border-all',
  Windows: 'person-through-window',
  Doors: 'door-open',
  Furniture: 'chair',
  Equipment: 'calculator',
  Containers: 'briefcase',
  Tools: 'screwdriver-wrench',
  Entertainment: 'masks-theater',
  'Blood Cult': 'users',
} as const;

export const CATEGORY_ICONS_COOKING = {
  'Can Make': 'utensils',
  Breads: 'bread-slice',
  Burgers: 'burger',
  Cakes: 'cake-candles',
  'Egg-Based Food': 'egg',
  Frozen: 'ice-cream',
  'Hemophage Food': 'tint', // BUBBER EDIT ADDITION - Hemophage Food
  'Lizard Food': 'dragon',
  Meats: 'bacon',
  'Mexican Food': 'pepper-hot',
  'Misc. Food': 'shapes',
  'Mothic Food': 'shirt',
  Pastries: 'cookie',
  Pies: 'chart-pie',
  Pizzas: 'pizza-slice',
  Salads: 'leaf',
  Sandwiches: 'hotdog',
  Seafood: 'fish',
  Soups: 'mug-hot',
  Spaghettis: 'wheat-awn',
  'Teshari Food': 'feather-pointed', // BUBBER EDIT ADDITION - Teshari Food
} as const;
