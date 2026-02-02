import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { categories, getMenuItemsByCategory } from "@/data/menuData";
import MenuCard from "@/components/MenuCard";
import { cn } from "@/lib/utils";

const Menu = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(
    searchParams.get("category") || categories[0].id
  );

  useEffect(() => {
    const category = searchParams.get("category");
    if (category && categories.find((c) => c.id === category)) {
      setActiveCategory(category);
    }
  }, [searchParams]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setSearchParams({ category: categoryId });
  };

  const menuItems = getMenuItemsByCategory(activeCategory);
  const currentCategory = categories.find((c) => c.id === activeCategory);

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="hero-gradient py-12 md:py-16">
        <div className="container-custom text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-cream-light mb-3">
            Our Menu
          </h1>
          <p className="text-cream/80 text-lg max-w-lg mx-auto">
            Explore our carefully crafted dishes made with fresh, quality ingredients
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-16 md:top-20 bg-background/95 backdrop-blur-md z-30 border-b border-border">
        <div className="container-custom py-4">
          <div className="flex overflow-x-auto gap-2 pb-2 -mb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-200",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                )}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Category Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl">{currentCategory?.icon}</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                {currentCategory?.name}
              </h2>
            </div>
            <p className="text-muted-foreground">{currentCategory?.description}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {menuItems.length} items
            </p>
          </div>

          {/* Items Grid - 2 column horizontal layout like Strange Taco Bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {menuItems.map((item, index) => (
              <div
                key={item.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <MenuCard item={item} variant="horizontal" />
              </div>
            ))}
          </div>

          {menuItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No items found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Menu;
