import { Plus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MenuItem, formatPrice } from "@/data/menuData";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface MenuCardProps {
  item: MenuItem;
  variant?: "default" | "horizontal";
}

const MenuCard = ({ item, variant = "horizontal" }: MenuCardProps) => {
  const { addItem, state } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const cartItem = state.items.find((i) => i.menuItem.id === item.id);
  const quantityInCart = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    addItem(item);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  if (variant === "horizontal") {
    return (
      <div className="group bg-muted/50 rounded-xl overflow-hidden flex h-full hover:shadow-lg transition-all duration-300">
        {/* Content - Left side */}
        <div className="flex-1 p-4 flex flex-col justify-between min-h-[140px]">
          <div>
            {/* Popular Badge */}
            {item.popular && (
              <span className="inline-flex items-center gap-1 bg-accent/20 text-accent text-xs font-semibold px-2 py-0.5 rounded-full mb-2">
                ⭐ Popular
              </span>
            )}
            
            <h3 className="font-heading font-bold text-base md:text-lg text-foreground group-hover:text-primary transition-colors leading-tight">
              {item.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2 leading-snug">
              {item.description}
            </p>
          </div>

          {/* Price & Add Button */}
          <div className="flex items-center justify-between mt-3">
            <span className="text-lg font-bold text-primary">
              {formatPrice(item.price)}
            </span>
            
            <div className="flex items-center gap-2">
              {quantityInCart > 0 && (
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                  {quantityInCart}×
                </span>
              )}
              <Button
                size="sm"
                onClick={handleAddToCart}
                className={cn(
                  "h-8 w-8 p-0 rounded-full transition-all duration-300",
                  justAdded
                    ? "bg-green-600 hover:bg-green-700"
                    : "btn-primary"
                )}
              >
                {justAdded ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Image Placeholder - Right side */}
        <div className="w-28 md:w-36 flex-shrink-0 bg-gradient-to-br from-primary/20 to-primary/40 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl opacity-50">{getCategoryEmoji(item.category)}</span>
          </div>
          {/* Decorative corner */}
          <div className="absolute top-0 left-0 w-4 h-full bg-primary/30 -skew-x-12 -translate-x-2" />
        </div>
      </div>
    );
  }

  // Default vertical variant
  return (
    <div className="card-elevated group p-4 flex flex-col h-full">
      {item.popular && (
        <div className="mb-3">
          <span className="inline-flex items-center gap-1 bg-accent/10 text-accent text-xs font-medium px-2 py-1 rounded-full">
            ⭐ Popular
          </span>
        </div>
      )}

      <div className="flex-1">
        <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
          {item.name}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          {item.description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
        <span className="text-xl font-bold text-primary">
          {formatPrice(item.price)}
        </span>

        <div className="flex items-center gap-2">
          {quantityInCart > 0 && (
            <span className="text-sm text-muted-foreground">
              {quantityInCart} in cart
            </span>
          )}
          <Button
            size="sm"
            onClick={handleAddToCart}
            className={cn(
              "transition-all duration-300",
              justAdded
                ? "bg-green-600 hover:bg-green-700"
                : "btn-primary"
            )}
          >
            {justAdded ? (
              <Check className="h-4 w-4" />
            ) : (
              <>
                <Plus className="h-4 w-4 mr-1" />
                Add
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

// Helper function to get emoji based on category
const getCategoryEmoji = (category: string): string => {
  const emojiMap: Record<string, string> = {
    starters: "🥗",
    grills: "🍖",
    traditional: "🍲",
    chicken: "🍗",
    fish: "🐟",
    beef: "🥩",
    sides: "🍚",
    beverages: "🥤",
    desserts: "🍰",
    specials: "⭐",
  };
  return emojiMap[category] || "🍽️";
};

export default MenuCard;
