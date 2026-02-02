import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPopularItems } from "@/data/menuData";
import MenuCard from "./MenuCard";

const FeaturedItems = () => {
  const popularItems = getPopularItems().slice(0, 6);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Customer Favorites
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-foreground">
              Popular Dishes
            </h2>
          </div>
          <Button asChild variant="ghost" className="group">
            <Link to="/menu" className="gap-2">
              View Full Menu
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Strange Taco Bar style 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {popularItems.map((item, index) => (
            <div
              key={item.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <MenuCard item={item} variant="horizontal" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
