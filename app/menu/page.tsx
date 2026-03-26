import { redirect } from 'next/navigation';

export default function MenuPage() {
  redirect('/en/menu');
}
import Image from 'next/image';

const menuCategories = [
  {
    name: 'Starters',
    items: [
      { name: 'Samosa', description: 'Stuffed pastries with potatoes, green peas, and spices', price: '7.50 €' },
      { name: 'Chicken Pakoras', description: 'Breaded chicken fillet fried in chickpea flour', price: '8.90 €' },
      { name: 'Onion Bhaji', description: 'Onion fritters with chickpea flour and coconut', price: '7.50 €' },
      { name: 'Paneer Bolus', description: 'Fresh cottage cheese fried with chickpea flour and cornflakes', price: '7.50 €' },
      { name: 'Chicken Lollipop', description: 'Chicken wings shaped like “lollipops,” marinated and crispy fried', price: '8.90 €' },
      { name: 'Potato Nuggets', description: 'Crispy potato nuggets with cheese', price: '6.50 €' },
      { name: 'Bread Chicken Roll', description: 'Crispy bread filled with spicy chicken', price: '8.90 €' },
      { name: 'Doaba Starter Platter (for 2 persons)', description: 'Mixed starters (Doaba style) with salad', price: '14.90 €' },
    ]
  },
  {
    name: 'Chicken Dishes',
    items: [
      { name: 'Butter Chicken', description: 'Tandoori chicken in butter-tomato-cashew sauce with almonds', price: '16.50 €' },
      { name: 'Chili Chicken (medium spicy)', description: 'Chicken with bell peppers & onions in spicy Indo-Chinese sauce', price: '15.50 €' },
      { name: 'Mango Chicken', description: 'Chicken breast with mango cream sauce, garnished with almonds', price: '16.90 €' },
      { name: 'Chicken Kali Mirch', description: 'Spicy chicken with black pepper, turmeric, cashew & white gravy', price: '16.50 €' },
      { name: 'Chicken Lemon', description: 'Chicken with vegetables, garam masala, fenugreek, lemon cream sauce', price: '16.90 €' },
    ]
  },
  {
    name: 'Lamb Dishes',
    items: [
      { name: 'Lamb Curry', description: 'Lamb in traditional curry sauce', price: '16.90 €' },
      { name: 'Lamb Korma', description: 'Mild sauce with cream cheese, almonds, raisins & cashews', price: '17.90 €' },
      { name: 'Lamb Saag', description: 'Lamb with spinach, onions, tomatoes, ginger & garlic', price: '16.90 €' },
      { name: 'Lamb Vindaloo (spicy)', description: 'Lamb with potatoes, paprika, onions & coconut', price: '17.50 €' },
      { name: 'Lamb Rara (spicy)', description: 'Lamb with bone in special spice blend', price: '18.90 €' },
      { name: 'Mutton Rogan Josh', description: 'Lamb with cheese, paprika, onions & coconut curry', price: '18.50 €' },
      { name: 'Lamb Sabji', description: 'Lamb with mixed vegetables and Indian spices', price: '16.90 €' },
    ]
  },
  {
    name: 'Duck Dishes',
    items: [
      { name: 'Duck Curry', description: 'Duck in curry sauce', price: '17.90 €' },
      { name: 'Duck Butter Masala', description: 'Marinated duck with ginger, garlic & spices', price: '18.90 €' },
      { name: 'Duck Madras (spicy)', description: 'Duck breast with coconut and South Indian spices', price: '17.90 €' },
      { name: 'Duck Doaba Special (spicy)', description: 'Duck with vegetables in special spicy sauce', price: '18.90 €' },
    ]
  },
  {
    name: 'Fish & Scampi',
    items: [
      { name: 'Fish Curry', description: 'Redfish fillet in curry sauce', price: '16.90 €' },
      { name: 'Fish Vindaloo (spicy)', description: 'Fish with potatoes and coconut', price: '17.50 €' },
      { name: 'Fish Madras (spicy)', description: 'Fish with coconut milk and spices', price: '16.50 €' },
      { name: 'Amritsari Fish', description: 'Spicy marinated fish with onions & tomatoes', price: '18.90 €' },
      { name: 'Scampi Curry', description: 'King prawns in curry sauce', price: '16.90 €' },
      { name: 'Scampi Masala', description: 'Prawns with ginger, garlic & herbs', price: '17.50 €' },
      { name: 'Scampi Madras (medium spicy)', description: 'Prawns with coconut and spices', price: '16.50 €' },
    ]
  },
  {
    name: 'Vegetarian Dishes',
    items: [
      { name: 'Paneer Jalfrezi (medium spicy)', description: 'Cottage cheese with vegetables in curry sauce', price: '15.50 €' },
      { name: 'Paneer Makhani', description: 'Cottage cheese in creamy tomato sauce', price: '14.90 €' },
      { name: 'Shahi Paneer', description: 'Cottage cheese in tomato-cashew sauce', price: '14.90 €' },
      { name: 'Malai Kofta', description: 'Vegetable & cheese dumplings in cream sauce', price: '13.50 €' },
      { name: 'Aloo Jeera (vegan)', description: 'Fried potatoes with cumin', price: '9.90 €' },
      { name: 'Kheemi Paneer', description: 'Creamy curry with mushrooms and paneer', price: '13.90 €' },
    ]
  },
  {
    name: 'Biryanis',
    items: [
      { name: 'Vegetable Biryani', description: 'Rice with vegetables, nuts & spices', price: '13.90 €' },
      { name: 'Chicken Biryani', description: 'Rice with chicken, nuts & spices', price: '14.90 €' },
      { name: 'Mutton Biryani', description: 'Rice with lamb, onions & spices', price: '16.50 €' },
    ]
  },
  {
    name: 'Tandoori Specialties',
    items: [
      { name: 'Paneer Tikka', description: 'Grilled cottage cheese with vegetables', price: '16.90 €' },
      { name: 'Chicken Tikka', description: 'Grilled chicken with spices', price: '17.90 €' },
      { name: 'Mutton Tikka', description: 'Grilled lamb pieces', price: '18.90 €' },
      { name: 'Chicken Tandoori', description: 'Marinated chicken legs in clay oven', price: '18.50 €' },
      { name: 'Lamb Chops', description: 'Served with fries & salad', price: '20.90 €' },
    ]
  },
  {
    name: 'Side Dishes',
    items: [
      { name: 'Tawa Roti', description: '', price: '3.50 €' },
      { name: 'Naan', description: '', price: '3.90 €' },
      { name: 'Butter Naan', description: '', price: '4.50 €' },
      { name: 'Garlic Naan', description: '', price: '4.90 €' },
      { name: 'Amritsari Naan (stuffed)', description: '', price: '5.90 €' },
      { name: 'Bhatura', description: '', price: '3.50 €' },
      { name: 'Doaba Combo (for 2)', description: '', price: '11.90 €' },
      { name: 'Raita (yogurt salad)', description: '', price: '5.50 €' },
      { name: 'Mixed Pickle', description: '', price: '4.90 €' },
    ]
  },
  {
    name: 'Non-Alcoholic Cocktails',
    items: [
      { name: 'Coconut Kiss', description: '', price: '8.90 €' },
      { name: 'Mango Kiss', description: '', price: '8.90 €' },
      { name: 'Strawberry Kiss', description: '', price: '8.90 €' },
      { name: 'Mojito', description: '', price: '8.90 €' },
      { name: 'Ipanema', description: '', price: '8.90 €' },
      { name: 'Bora Bora Brew', description: '', price: '8.90 €' },
      { name: 'Juliane Kiss', description: '', price: '8.90 €' },
      { name: 'Strawberry Bull', description: '', price: '8.90 €' },
      { name: 'Cherry Bull', description: '', price: '8.90 €' },
    ]
  },
  {
    name: 'Coladas',
    items: [
      { name: 'Golden Colada', description: '', price: '9.90 €' },
      { name: 'Piña Colada', description: '', price: '9.90 €' },
      { name: 'Swimming Pool', description: '', price: '9.90 €' },
      { name: 'Mango Colada', description: '', price: '9.90 €' },
      { name: 'Fresa Colada', description: '', price: '9.90 €' },
      { name: 'Baileys Colada', description: '', price: '9.90 €' },
      { name: 'Doaba Colada', description: '', price: '10.90 €' },
    ]
  },
  {
    name: 'Wine',
    items: [
      { name: 'Riesling (White 0.2L)', description: '', price: '5.90 €' },
      { name: 'Pinot Gris (White 0.2L)', description: '', price: '5.90 €' },
      { name: 'Grüner Veltliner (White 0.2L)', description: '', price: '5.90 €' },
      { name: 'Primitivo (Red 0.2L)', description: '', price: '5.90 €' },
      { name: 'Merlot (Red 0.2L)', description: '', price: '5.90 €' },
      { name: 'Riego (Red 0.2L)', description: '', price: '5.90 €' },
      { name: 'Prosecco', description: '', price: '5.90 €' },
    ]
  },
  {
    name: 'Alcohol-Free Beer',
    items: [
      { name: 'Erdinger', description: '', price: '4.50 €' },
      { name: 'Bitburger', description: '', price: '3.90 €' },
      { name: 'Corona Cero', description: '', price: '4.50 €' },
    ]
  },
  {
    name: 'Hot Drinks',
    items: [
      { name: 'Masala Chai', description: '', price: '3.90 €' },
      { name: 'Tea', description: '', price: '3.90 €' },
      { name: 'Coffee', description: '', price: '3.20 €' },
      { name: 'Cappuccino', description: '', price: '3.90 €' },
      { name: 'Latte Macchiato', description: '', price: '4.50 €' },
      { name: 'Milk Coffee', description: '', price: '4.50 €' },
      { name: 'Espresso', description: '', price: '2.90 €' },
      { name: 'Double Espresso', description: '', price: '3.50 €' },
      { name: 'Espresso Macchiato', description: '', price: '3.50 €' },
      { name: 'Hot Chocolate', description: '', price: '3.90 €' },
      { name: 'Ginger Tea', description: '', price: '3.90 €' },
      { name: 'Mint Tea', description: '', price: '3.90 €' },
      { name: 'Irish Coffee', description: '', price: '5.50 €' },
    ]
  },
  {
    name: 'Soft Drinks',
    items: [
      { name: 'Water (0.25L)', description: '', price: '2.90 €' },
      { name: 'Water (0.75L)', description: '', price: '6.90 €' },
      { name: 'Cola / Cola Zero / Fanta / Sprite', description: '', price: '4.50 €' },
      { name: 'Ginger Ale / Bitter Lemon / Tonic Water', description: '', price: '3.90 €' },
      { name: 'Malt Drink', description: '', price: '3.90 €' },
    ]
  },
  {
    name: 'Cocktails',
    items: [
      { name: 'Rum Cocktails', description: 'Papagano, Bahama Mama, Planter’s Punch, Jamaica Fever', price: '8.90 €' },
      { name: 'Gin Cocktails', description: 'Gigolo, Gin-Sin, Singapore Sling, My Way', price: '8.90 €' },
      { name: 'Tequila Cocktails', description: 'Tequila Sunrise, Tequila Sunset, Zorro', price: '8.90 €' },
      { name: 'Vodka Cocktails', description: 'Sex on the Beach, Watermelon, Bloody Mary', price: '8.90 €' },
      { name: 'High Alcohol Cocktails', description: 'Hurricane, Vodka Tai, Long Island Iced Tea, Long Island Beach Tea, Gin Tai, Touch Down, Zombie, Mai Tai', price: '10.90 €' },
      { name: 'Cosmopolitan', description: '', price: '8.90 €' },
      { name: 'Metropolitan', description: '', price: '8.90 €' },
      { name: 'White Lady', description: '', price: '8.90 €' },
      { name: 'Gimlet', description: '', price: '8.90 €' },
      { name: 'Apple Martini', description: '', price: '8.90 €' },
      { name: 'Espresso Martini', description: '', price: '9.90 €' },
      { name: 'Sweet Cocktails', description: 'Grasshopper, Blue Moon, Bird of Paradise, Black Russian, White Russian', price: '8.90 €' },
    ]
  },
  {
    name: 'Spirits & Shots',
    items: [
      { name: 'Shots', description: 'Mini Beer, Mexikaner, Orgasmus, Brain, B52', price: '6.50 €' },
      { name: 'Liqueurs (2cl)', description: 'Kahlúa, Baileys, Licor 43, Amaretto, Peach Tree', price: '4.90 €' },
      { name: 'Grappa (2cl)', description: 'Grappa Julia, Grappa Chardonnay', price: '4.90 €' },
      { name: 'Vermouth (4cl)', description: 'Martini Dry, Martini Rosso, Martini Bianco', price: '5.90 €' },
      { name: 'Old Monk', description: '', price: '4.90 €' },
      { name: 'Havana Club (3y)', description: '', price: '6.90 €' },
      { name: 'Havana Club (7y)', description: '', price: '7.90 €' },
      { name: 'Sierra Tequila', description: '', price: '4.90 €' },
      { name: 'Ballantine’s', description: '', price: '4.90 €' },
      { name: 'Johnnie Walker', description: '', price: '4.90 €' },
      { name: 'Chivas Regal', description: '', price: '5.90 €' },
      { name: 'Glenfiddich', description: '', price: '5.90 €' },
      { name: 'Jameson', description: '', price: '4.90 €' },
      { name: 'Osborne / Asbach', description: '', price: '4.90 €' },
    ]
  }
];

export default function MenuPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-primary text-text-light">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-heading font-medium leading-tight text-accent mb-6"
          >
            Our Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-light/80 font-menu max-w-2xl mx-auto"
          >
            A curated selection of authentic Indian and Nepali dishes, prepared with the finest ingredients and traditional techniques.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto space-y-24">
          {menuCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-heading text-accent uppercase tracking-widest mb-12 text-center border-b border-white/10 pb-4">
                {category.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {category.items.map((item) => (
                  <div key={item.name} className="group">
                    <div className="flex justify-between items-baseline mb-2 border-b border-white/5 pb-2 group-hover:border-accent/30 transition-colors">
                      <h3 className="text-xl font-heading text-text-light group-hover:text-accent transition-colors">{item.name}</h3>
                      <span className="text-lg font-medium text-accent">{item.price}</span>
                    </div>
                    <p className="text-sm text-text-light/60 font-menu leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
