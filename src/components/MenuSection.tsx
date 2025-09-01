import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Star } from "lucide-react";
import { menuData } from "@/data/menuData";
import { Dish, MenuCategory } from "@/types/menu";

const MenuSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | "all">("all");

  const categories = [
    { id: "all", label: "Все" },
    { id: "snacks", label: "Закуски" },
    { id: "soups", label: "Супы" },
    { id: "meat", label: "Мясо" },
    { id: "fish", label: "Рыба" },
    { id: "chicken", label: "Курица" },
    { id: "pasta", label: "Паста" },
    { id: "desserts", label: "Десерты" },
    { id: "cocktails", label: "Коктейли" },
    { id: "juices", label: "Соки" },
    { id: "tea", label: "Чай и кофе" },
  ] as const;

  const filteredDishes = menuData.filter((dish) => {
    const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dish.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || dish.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="menu" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-elegant text-4xl md:text-5xl font-bold text-accent mb-4">
            Наше меню
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Откройте для себя наш тщательно подобранный ассортимент блюд, каждое из которых приготовлено 
            из лучших ингредиентов с особым вниманием к деталям.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Поиск блюд..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-background/80 backdrop-blur-sm"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "premium" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id as MenuCategory | "all")}
                className="transition-smooth"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDishes.map((dish) => (
            <Card key={dish.id} className="group hover:shadow-elegant transition-smooth bg-card/80 backdrop-blur-sm border-border/50">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                {dish.isPopular && (
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                    <Star className="h-3 w-3 mr-1" />
                    Популярное
                  </Badge>
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg text-accent">{dish.name}</h3>
                  <span className="text-lg font-bold text-primary">{dish.price} ₸</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{dish.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDishes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Блюда по вашему запросу не найдены.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;