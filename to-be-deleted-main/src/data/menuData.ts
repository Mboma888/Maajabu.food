export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  popular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  { id: "starters", name: "Starters", description: "Begin your culinary journey", icon: "🥗" },
  { id: "grills", name: "Grills & BBQ", description: "Flame-kissed perfection", icon: "🍖" },
  { id: "traditional", name: "Traditional Zambian", description: "Authentic local flavors", icon: "🍲" },
  { id: "chicken", name: "Chicken Dishes", description: "Succulent poultry delights", icon: "🍗" },
  { id: "fish", name: "Fish & Seafood", description: "Fresh from the waters", icon: "🐟" },
  { id: "beef", name: "Beef Specialties", description: "Premium cuts & preparations", icon: "🥩" },
  { id: "sides", name: "Sides & Accompaniments", description: "Perfect complements", icon: "🍚" },
  { id: "beverages", name: "Beverages", description: "Refreshing drinks", icon: "🥤" },
  { id: "desserts", name: "Desserts", description: "Sweet endings", icon: "🍰" },
  { id: "specials", name: "Chef's Specials", description: "Signature creations", icon: "⭐" },
];

export const menuItems: MenuItem[] = [
  // Starters
  { id: "s1", name: "Vegetable Samosas", description: "Crispy pastry filled with spiced vegetables", price: 45, category: "starters" },
  { id: "s2", name: "Chicken Wings", description: "Golden fried wings with tangy dipping sauce", price: 65, category: "starters", popular: true },
  { id: "s3", name: "Garden Salad", description: "Fresh mixed greens with house dressing", price: 35, category: "starters" },
  { id: "s4", name: "Soup of the Day", description: "Chef's daily creation served with bread", price: 40, category: "starters" },
  { id: "s5", name: "Spring Rolls", description: "Crispy rolls with vegetable filling", price: 50, category: "starters" },

  // Grills & BBQ
  { id: "g1", name: "Mixed Grill Platter", description: "Assortment of grilled meats with sides", price: 180, category: "grills", popular: true },
  { id: "g2", name: "BBQ Pork Ribs", description: "Tender ribs glazed with smoky BBQ sauce", price: 150, category: "grills", popular: true },
  { id: "g3", name: "Grilled T-Bone Steak", description: "Premium cut cooked to your preference", price: 165, category: "grills" },
  { id: "g4", name: "Lamb Chops", description: "Succulent chops with herb butter", price: 175, category: "grills" },
  { id: "g5", name: "BBQ Chicken Half", description: "Half chicken with signature BBQ glaze", price: 95, category: "grills" },
  { id: "g6", name: "Grilled Sausages", description: "Assorted sausages with mustard", price: 75, category: "grills" },

  // Traditional Zambian
  { id: "t1", name: "Nshima with Village Chicken", description: "Traditional maize meal with free-range chicken", price: 85, category: "traditional", popular: true },
  { id: "t2", name: "Nshima with Beef Stew", description: "Hearty beef stew with nshima", price: 90, category: "traditional" },
  { id: "t3", name: "Nshima with Kapenta", description: "Small dried fish with vegetables", price: 70, category: "traditional" },
  { id: "t4", name: "Ifisashi", description: "Peanut-based vegetable dish", price: 55, category: "traditional" },
  { id: "t5", name: "Chikanda", description: "Traditional African polony", price: 45, category: "traditional" },
  { id: "t6", name: "Nshima with Goat Meat", description: "Slow-cooked goat with traditional spices", price: 110, category: "traditional" },

  // Chicken Dishes
  { id: "c1", name: "Peri-Peri Chicken", description: "Spicy grilled chicken with peri-peri sauce", price: 95, category: "chicken", popular: true },
  { id: "c2", name: "Chicken Curry", description: "Aromatic curry with basmati rice", price: 85, category: "chicken" },
  { id: "c3", name: "Fried Chicken Basket", description: "Crispy fried chicken pieces", price: 80, category: "chicken" },
  { id: "c4", name: "Chicken Stir Fry", description: "Wok-tossed with vegetables", price: 90, category: "chicken" },
  { id: "c5", name: "Lemon Herb Chicken", description: "Roasted with lemon and fresh herbs", price: 95, category: "chicken" },
  { id: "c6", name: "Chicken Schnitzel", description: "Breaded and pan-fried, served with fries", price: 100, category: "chicken" },

  // Fish & Seafood
  { id: "f1", name: "Grilled Bream", description: "Whole fish with lemon butter sauce", price: 120, category: "fish", popular: true },
  { id: "f2", name: "Fried Tilapia", description: "Crispy tilapia with tartar sauce", price: 100, category: "fish" },
  { id: "f3", name: "Fish & Chips", description: "Beer-battered fish with crispy chips", price: 95, category: "fish" },
  { id: "f4", name: "Prawns in Garlic Butter", description: "Sautéed prawns with garlic and herbs", price: 160, category: "fish" },
  { id: "f5", name: "Fish Curry", description: "Aromatic fish curry with rice", price: 110, category: "fish" },
  { id: "f6", name: "Grilled Salmon", description: "Norwegian salmon with seasonal vegetables", price: 180, category: "fish" },

  // Beef Specialties
  { id: "b1", name: "Beef Stroganoff", description: "Creamy beef strips with rice", price: 110, category: "beef" },
  { id: "b2", name: "Beef Stir Fry", description: "Wok-tossed beef with vegetables", price: 100, category: "beef" },
  { id: "b3", name: "Pepper Steak", description: "Sirloin with peppercorn sauce", price: 140, category: "beef", popular: true },
  { id: "b4", name: "Beef Burger Deluxe", description: "Gourmet burger with all the fixings", price: 85, category: "beef" },
  { id: "b5", name: "Oxtail Stew", description: "Slow-braised oxtail in rich gravy", price: 130, category: "beef" },
  { id: "b6", name: "Beef Kebabs", description: "Grilled skewers with vegetables", price: 95, category: "beef" },

  // Sides & Accompaniments
  { id: "si1", name: "French Fries", description: "Golden crispy chips", price: 30, category: "sides" },
  { id: "si2", name: "Rice", description: "Steamed basmati rice", price: 25, category: "sides" },
  { id: "si3", name: "Nshima", description: "Traditional maize meal", price: 20, category: "sides" },
  { id: "si4", name: "Coleslaw", description: "Creamy cabbage salad", price: 25, category: "sides" },
  { id: "si5", name: "Grilled Vegetables", description: "Seasonal vegetable medley", price: 35, category: "sides" },
  { id: "si6", name: "Mashed Potatoes", description: "Creamy buttered potatoes", price: 30, category: "sides" },

  // Beverages
  { id: "bv1", name: "Fresh Juice", description: "Orange, mango, or pineapple", price: 25, category: "beverages" },
  { id: "bv2", name: "Soft Drinks", description: "Coca-Cola, Fanta, Sprite", price: 15, category: "beverages" },
  { id: "bv3", name: "Mineral Water", description: "Still or sparkling", price: 15, category: "beverages" },
  { id: "bv4", name: "Milkshake", description: "Chocolate, vanilla, or strawberry", price: 35, category: "beverages" },
  { id: "bv5", name: "Hot Coffee", description: "Freshly brewed", price: 20, category: "beverages" },
  { id: "bv6", name: "Tea", description: "Black, green, or herbal", price: 15, category: "beverages" },

  // Desserts
  { id: "d1", name: "Chocolate Brownie", description: "Warm brownie with ice cream", price: 45, category: "desserts", popular: true },
  { id: "d2", name: "Fruit Salad", description: "Fresh seasonal fruits", price: 35, category: "desserts" },
  { id: "d3", name: "Ice Cream", description: "Three scoops of your choice", price: 40, category: "desserts" },
  { id: "d4", name: "Cheesecake", description: "New York style cheesecake", price: 50, category: "desserts" },
  { id: "d5", name: "Malva Pudding", description: "Traditional African dessert", price: 45, category: "desserts" },

  // Chef's Specials
  { id: "sp1", name: "Maajabu Feast Platter", description: "Our signature sharing platter for 2-3 people", price: 280, category: "specials", popular: true },
  { id: "sp2", name: "Sunday Roast Special", description: "Roasted meat with all the trimmings", price: 120, category: "specials" },
  { id: "sp3", name: "Seafood Platter", description: "Assortment of grilled and fried seafood", price: 220, category: "specials" },
  { id: "sp4", name: "Vegetarian Feast", description: "Selection of vegetarian dishes", price: 95, category: "specials" },
  { id: "sp5", name: "Family Package", description: "Feeds 4-5 people with variety of dishes", price: 450, category: "specials" },
];

export const getMenuItemsByCategory = (categoryId: string): MenuItem[] => {
  return menuItems.filter(item => item.category === categoryId);
};

export const getPopularItems = (): MenuItem[] => {
  return menuItems.filter(item => item.popular);
};

export const formatPrice = (price: number): string => {
  return `K${price.toFixed(2)}`;
};
