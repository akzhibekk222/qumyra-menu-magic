import { Dish } from "@/types/menu";
import steakImage from "@/assets/dishes/steak.jpg";
import soupImage from "@/assets/dishes/soup.jpg";

export const menuData: Dish[] = [
  // Snacks
  {
    id: "1",
    name: "Казахская сырная тарелка",
    description: "Традиционные казахстанские сыры с медом и орехами",
    price: 3500,
    image: steakImage,
    category: "snacks",
    isPopular: true,
  },
  {
    id: "2",
    name: "Канапе с копченым лососем",
    description: "Свежий лосось на хрустящем хлебе с кремовым сыром и укропом",
    price: 4200,
    image: steakImage,
    category: "snacks",
  },
  {
    id: "3",
    name: "Карпаччо из говядины",
    description: "Тонко нарезанная говядина с рукколой, пармезаном и трюфельным маслом",
    price: 4800,
    image: steakImage,
    category: "snacks",
  },

  // Soups
  {
    id: "4",
    name: "Шурпа",
    description: "Традиционный казахстанский суп с бараниной и овощами",
    price: 2800,
    image: soupImage,
    category: "soups",
    isPopular: true,
  },
  {
    id: "5",
    name: "Грибной биск",
    description: "Кремовый суп из лесных грибов с трюфельными сливками",
    price: 3200,
    image: soupImage,
    category: "soups",
  },
  {
    id: "6",
    name: "Рыбный суп",
    description: "Свежий каспийский рыбный суп с травами и овощами",
    price: 3600,
    image: soupImage,
    category: "soups",
  },

  // Meat
  {
    id: "7",
    name: "Стейк Вагю",
    description: "Премиальный стейк вагю, жаренный до совершенства с сезонными овощами",
    price: 12000,
    image: steakImage,
    category: "meat",
    isPopular: true,
  },
  {
    id: "8",
    name: "Каре ягненка",
    description: "Каре ягненка в травяной корочке с розмариновым соусом",
    price: 8500,
    image: steakImage,
    category: "meat",
  },
  {
    id: "9",
    name: "Бешбармак Премиум",
    description: "Традиционное казахстанское блюдо с премиальной кониной и лапшой",
    price: 6800,
    image: steakImage,
    category: "meat",
  },

  // Fish
  {
    id: "10",
    name: "Каспийский осетр",
    description: "Жареный каспийский осетр с лимонно-сливочным соусом",
    price: 9500,
    image: steakImage,
    category: "fish",
    isPopular: true,
  },
  {
    id: "11",
    name: "Филе лосося",
    description: "Жареный лосось с киноа и спаржей",
    price: 7200,
    image: steakImage,
    category: "fish",
  },

  // Chicken
  {
    id: "12",
    name: "Цыпленок табака",
    description: "Традиционный грузинский цыпленок под прессом с травами",
    price: 5800,
    image: steakImage,
    category: "chicken",
  },
  {
    id: "13",
    name: "Куриная грудка премиум",
    description: "Фаршированная куриная грудка с грибным кремовым соусом",
    price: 6200,
    image: steakImage,
    category: "chicken",
  },

  // Pasta
  {
    id: "14",
    name: "Паста с трюфелем",
    description: "Свежая паста с черным трюфелем и пармезаном",
    price: 5500,
    image: steakImage,
    category: "pasta",
  },
  {
    id: "15",
    name: "Лингвини с морепродуктами",
    description: "Лингвини с ассорти морепродуктов в белом винном соусе",
    price: 6800,
    image: steakImage,
    category: "pasta",
  },

  // Desserts
  {
    id: "16",
    name: "Мороженое с баурсаками",
    description: "Традиционная казахстанская выпечка с ванильным мороженым",
    price: 2500,
    image: steakImage,
    category: "desserts",
  },
  {
    id: "17",
    name: "Шоколадный фондан",
    description: "Теплый шоколадный кекс с жидкой серединкой и ягодным соусом",
    price: 3200,
    image: steakImage,
    category: "desserts",
    isPopular: true,
  },

  // Drinks
  {
    id: "18",
    name: "Фирменный коктейль Qumyra",
    description: "Авторский коктейль с премиальной водкой и местным медом",
    price: 2800,
    image: steakImage,
    category: "cocktails",
    isPopular: true,
  },
  {
    id: "19",
    name: "Свежевыжатый апельсиновый сок",
    description: "Натуральный апельсиновый сок",
    price: 1200,
    image: steakImage,
    category: "juices",
  },
  {
    id: "20",
    name: "Чай Эрл Грей",
    description: "Премиальный чай Эрл Грей с бергамотом",
    price: 800,
    image: steakImage,
    category: "tea",
  },
];