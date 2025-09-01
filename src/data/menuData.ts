import { Dish } from "@/types/menu";
import steakImage from "@/assets/dishes/steak.jpg";
import soupImage from "@/assets/dishes/soup.jpg";

export const menuData: Dish[] = [
  // Snacks
  {
    id: "1",
    name: "Qazakh Cheese Platter",
    description: "Traditional Kazakhstani cheeses served with honey and nuts",
    price: 3500,
    image: steakImage,
    category: "snacks",
    isPopular: true,
  },
  {
    id: "2",
    name: "Smoked Salmon Canapés",
    description: "Fresh salmon on crispy bread with cream cheese and dill",
    price: 4200,
    image: steakImage,
    category: "snacks",
  },
  {
    id: "3",
    name: "Beef Carpaccio",
    description: "Thinly sliced beef with arugula, parmesan and truffle oil",
    price: 4800,
    image: steakImage,
    category: "snacks",
  },

  // Soups
  {
    id: "4",
    name: "Shorpa",
    description: "Traditional Kazakhstani soup with lamb and vegetables",
    price: 2800,
    image: soupImage,
    category: "soups",
    isPopular: true,
  },
  {
    id: "5",
    name: "Mushroom Bisque",
    description: "Creamy wild mushroom soup with truffle cream",
    price: 3200,
    image: soupImage,
    category: "soups",
  },
  {
    id: "6",
    name: "Fish Soup",
    description: "Fresh Caspian fish soup with herbs and vegetables",
    price: 3600,
    image: soupImage,
    category: "soups",
  },

  // Meat
  {
    id: "7",
    name: "Wagyu Beef Steak",
    description: "Premium wagyu steak grilled to perfection with seasonal vegetables",
    price: 12000,
    image: steakImage,
    category: "meat",
    isPopular: true,
  },
  {
    id: "8",
    name: "Lamb Rack",
    description: "Herb-crusted lamb rack with rosemary jus",
    price: 8500,
    image: steakImage,
    category: "meat",
  },
  {
    id: "9",
    name: "Beshbarmak Premium",
    description: "Traditional Kazakhstani dish with premium horse meat and pasta",
    price: 6800,
    image: steakImage,
    category: "meat",
  },

  // Fish
  {
    id: "10",
    name: "Caspian Sturgeon",
    description: "Grilled Caspian sturgeon with lemon butter sauce",
    price: 9500,
    image: steakImage,
    category: "fish",
    isPopular: true,
  },
  {
    id: "11",
    name: "Salmon Fillet",
    description: "Pan-seared salmon with quinoa and asparagus",
    price: 7200,
    image: steakImage,
    category: "fish",
  },

  // Chicken
  {
    id: "12",
    name: "Chicken Tabaka",
    description: "Traditional Georgian-style flattened chicken with herbs",
    price: 5800,
    image: steakImage,
    category: "chicken",
  },
  {
    id: "13",
    name: "Chicken Supreme",
    description: "Stuffed chicken breast with mushroom cream sauce",
    price: 6200,
    image: steakImage,
    category: "chicken",
  },

  // Pasta
  {
    id: "14",
    name: "Truffle Pasta",
    description: "Fresh pasta with black truffle and parmesan",
    price: 5500,
    image: steakImage,
    category: "pasta",
  },
  {
    id: "15",
    name: "Seafood Linguine",
    description: "Linguine with mixed seafood in white wine sauce",
    price: 6800,
    image: steakImage,
    category: "pasta",
  },

  // Desserts
  {
    id: "16",
    name: "Baursak Ice Cream",
    description: "Traditional Kazakhstani pastry with vanilla ice cream",
    price: 2500,
    image: steakImage,
    category: "desserts",
  },
  {
    id: "17",
    name: "Chocolate Fondant",
    description: "Warm chocolate cake with molten center and berry coulis",
    price: 3200,
    image: steakImage,
    category: "desserts",
    isPopular: true,
  },

  // Drinks
  {
    id: "18",
    name: "Qumyra Signature Cocktail",
    description: "House special with premium vodka and local honey",
    price: 2800,
    image: steakImage,
    category: "cocktails",
    isPopular: true,
  },
  {
    id: "19",
    name: "Fresh Orange Juice",
    description: "Freshly squeezed orange juice",
    price: 1200,
    image: steakImage,
    category: "juices",
  },
  {
    id: "20",
    name: "Earl Grey Tea",
    description: "Premium Earl Grey tea with bergamot",
    price: 800,
    image: steakImage,
    category: "tea",
  },
];