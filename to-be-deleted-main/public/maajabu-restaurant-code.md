# Maajabu Restaurant - Complete Source Code

This file contains all the source code for the Maajabu Restaurant website.

---

## Configuration Files

### index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Maajabu Restaurant | Authentic Zambian Cuisine in Luanshya</title>
    <meta name="description" content="Experience the finest Zambian cuisine at Maajabu Restaurant in Luanshya. Fresh ingredients, traditional recipes, and unforgettable flavors. Order via WhatsApp today!" />
    <meta name="keywords" content="Maajabu Restaurant, Luanshya restaurant, Zambian food, nshima, African cuisine, restaurant Zambia" />
    <meta name="author" content="Maajabu Restaurant" />
    
    <!-- Open Graph / Social -->
    <meta property="og:type" content="restaurant" />
    <meta property="og:title" content="Maajabu Restaurant | Authentic Zambian Cuisine" />
    <meta property="og:description" content="Experience the finest Zambian cuisine at Maajabu Restaurant in Luanshya. Order via WhatsApp today!" />
    <meta property="og:locale" content="en_ZM" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Maajabu Restaurant | Authentic Zambian Cuisine" />
    <meta name="twitter:description" content="Experience the finest Zambian cuisine at Maajabu Restaurant in Luanshya." />
    
    <!-- Theme Color -->
    <meta name="theme-color" content="#C85A17" />
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    
    <!-- Preconnect to Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### tailwind.config.ts
```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        terracotta: "hsl(var(--terracotta))",
        charcoal: "hsl(var(--charcoal))",
        gold: "hsl(var(--gold))",
        cream: {
          DEFAULT: "hsl(var(--cream))",
          light: "hsl(var(--cream-light))",
        },
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Lato", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        elevated: "var(--shadow-elevated)",
        gold: "var(--shadow-gold)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.4s ease-out forwards",
        "scale-in": "scale-in 0.3s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

---

## Source Files

### src/main.tsx
```tsx
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
```

### src/App.tsx
```tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
```

### src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

@layer base {
  :root {
    --background: 40 33% 94%;
    --foreground: 0 0% 17%;

    --card: 40 33% 97%;
    --card-foreground: 0 0% 17%;

    --popover: 40 33% 97%;
    --popover-foreground: 0 0% 17%;

    --primary: 20 79% 44%;
    --primary-foreground: 40 33% 97%;

    --secondary: 0 0% 17%;
    --secondary-foreground: 40 33% 94%;

    --muted: 40 20% 88%;
    --muted-foreground: 0 0% 35%;

    --accent: 43 66% 52%;
    --accent-foreground: 0 0% 17%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 98%;

    --border: 40 20% 85%;
    --input: 40 20% 85%;
    --ring: 20 79% 44%;

    --radius: 0.5rem;

    /* Custom tokens */
    --terracotta: 20 79% 44%;
    --charcoal: 0 0% 17%;
    --gold: 43 66% 52%;
    --cream: 40 33% 94%;
    --cream-light: 40 33% 97%;

    /* Shadows */
    --shadow-card: 0 4px 20px -4px hsl(var(--charcoal) / 0.1);
    --shadow-elevated: 0 8px 30px -8px hsl(var(--charcoal) / 0.15);
    --shadow-gold: 0 4px 20px -4px hsl(var(--gold) / 0.4);

    /* Typography */
    --font-heading: 'Playfair Display', serif;
    --font-body: 'Lato', sans-serif;
    
    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --background: 0 0% 12%;
    --foreground: 40 33% 94%;
    --card: 0 0% 15%;
    --card-foreground: 40 33% 94%;
    --popover: 0 0% 15%;
    --popover-foreground: 40 33% 94%;
    --primary: 20 79% 50%;
    --primary-foreground: 40 33% 97%;
    --secondary: 40 20% 20%;
    --secondary-foreground: 40 33% 94%;
    --muted: 0 0% 20%;
    --muted-foreground: 40 20% 70%;
    --accent: 43 66% 52%;
    --accent-foreground: 0 0% 17%;
    --border: 0 0% 25%;
    --input: 0 0% 25%;
    --ring: 20 79% 50%;
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-background text-foreground;
    font-family: var(--font-body);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    @apply font-semibold tracking-tight;
  }
}

@layer components {
  .btn-primary {
    @apply bg-primary text-primary-foreground transition-all duration-300;
    @apply shadow-md hover:shadow-lg hover:-translate-y-0.5;
  }
  
  .btn-primary:hover {
    background-color: hsl(20 79% 38%);
  }

  .btn-secondary {
    @apply bg-secondary text-secondary-foreground transition-all duration-300;
  }
  
  .btn-secondary:hover {
    background-color: hsl(0 0% 25%);
  }

  .btn-accent {
    @apply bg-accent text-accent-foreground transition-all duration-300;
    box-shadow: var(--shadow-gold);
  }
  
  .btn-accent:hover {
    background-color: hsl(43 66% 45%);
  }

  .btn-outline-light {
    @apply border-2 transition-all duration-300;
    border-color: hsl(var(--cream-light));
    color: hsl(var(--cream-light));
  }
  
  .btn-outline-light:hover {
    background-color: hsl(var(--cream-light));
    color: hsl(var(--charcoal));
  }

  .card-elevated {
    @apply bg-card rounded-xl;
    box-shadow: var(--shadow-card);
    @apply transition-all duration-300;
  }
  
  .card-elevated:hover {
    box-shadow: var(--shadow-elevated);
    transform: translateY(-4px);
  }

  .section-padding {
    @apply px-4 py-12;
  }
  
  @media (min-width: 640px) {
    .section-padding {
      @apply px-6 py-16;
    }
  }
  
  @media (min-width: 1024px) {
    .section-padding {
      @apply px-8 py-20;
    }
  }

  .container-custom {
    @apply max-w-7xl mx-auto px-4;
  }
  
  @media (min-width: 640px) {
    .container-custom {
      @apply px-6;
    }
  }
  
  @media (min-width: 1024px) {
    .container-custom {
      @apply px-8;
    }
  }

  .hero-gradient {
    background: linear-gradient(135deg, hsl(var(--terracotta)) 0%, hsl(20 70% 35%) 100%);
  }

  .overlay-gradient {
    background: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%);
  }
}

@layer utilities {
  .animate-fade-up {
    animation: fadeUp 0.6s ease-out forwards;
  }

  .animate-fade-in {
    animation: fadeIn 0.4s ease-out forwards;
  }

  .animate-scale-in {
    animation: scaleIn 0.3s ease-out forwards;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
}
```

---

## Pages

### src/pages/Index.tsx
```tsx
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import FeaturedItems from "@/components/FeaturedItems";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main>
      <Hero />
      <CategorySection />
      <FeaturedItems />
      <CTASection />
    </main>
  );
};

export default Index;
```

### src/pages/Menu.tsx
```tsx
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
{% raw %}

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
{% endraw %}

          )}
        </div>
      </section>
    </main>
  );
};

export default Menu;
```

### src/pages/About.tsx
```tsx
import { Heart, Leaf, Users, Award } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion for Food",
    description:
      "Every dish is prepared with love and dedication, honoring traditional recipes passed down through generations.",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description:
      "We source the freshest local ingredients, supporting Zambian farmers and ensuring quality in every bite.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "More than a restaurant, we're a gathering place for families, friends, and the Luanshya community.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "From our kitchen to your table, we strive for excellence in taste, service, and hospitality.",
  },
];

const About = () => {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="hero-gradient py-12 md:py-20">
        <div className="container-custom text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-cream-light mb-4">
            Our Story
          </h1>
          <p className="text-cream/80 text-lg max-w-xl mx-auto">
            A culinary journey rooted in Zambian tradition and hospitality
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                Welcome to Maajabu Restaurant
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                "Maajabu" means "wonder" in Swahili, and that's exactly what we aim to deliver 
                with every meal. Founded in the heart of Luanshya, Zambia, our restaurant 
                was born from a deep love for authentic Zambian cuisine and a passion for 
                bringing people together over delicious food.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Our journey began with a simple dream: to create a place where the rich 
                culinary traditions of Zambia could be celebrated and shared with locals 
                and visitors alike. From the aromatic spices of our traditional dishes to 
                the sizzling perfection of our grills, every item on our menu tells a story 
                of heritage, quality, and care.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Today, Maajabu Restaurant stands as a beloved gathering place in Luanshya, 
                where families celebrate milestones, friends reconnect, and new memories 
                are made. We're honored to be part of this community and committed to 
                serving you with the warmth and hospitality that Zambia is known for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              What We Stand For
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-foreground">
              Our Values
            </h2>
          </div>
{% raw %}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="card-elevated p-6 text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-full mb-4">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
          {% endraw %}

        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Our Promise
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To serve exceptional Zambian and international cuisine that celebrates 
              our cultural heritage while embracing culinary innovation. We are committed 
              to providing a warm, welcoming atmosphere where every guest feels like family, 
              and every meal is an experience worth sharing.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
```

### src/pages/Contact.tsx
```tsx
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "260971716370";
const PHONE_NUMBER = "+260971716370";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I'd like to make an inquiry about Maajabu Restaurant."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="hero-gradient py-12 md:py-16">
        <div className="container-custom text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-cream-light mb-3">
            Contact Us
          </h1>
          <p className="text-cream/80 text-lg max-w-lg mx-auto">
            We'd love to hear from you. Reach out for reservations, inquiries, or just to say hello!
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  Have questions about our menu, want to make a reservation, or need directions? 
                  We're here to help!
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="card-elevated p-5 flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      +260 971 716 370
                    </p>
                  </div>
                </a>

                <button
                  onClick={handleWhatsAppClick}
                  className="card-elevated p-5 flex items-start gap-4 group text-left w-full"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Chat with us
                    </p>
                  </div>
                </button>

                <a
                  href="mailto:info@maajabu.co.zm"
                  className="card-elevated p-5 flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      info@maajabu.co.zm
                    </p>
                  </div>
                </a>

                <div className="card-elevated p-5 flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Central Business District<br />
                      Luanshya, Zambia
                    </p>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-heading font-semibold text-lg text-foreground">
                    Opening Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Monday - Thursday</span>
                    <span className="font-medium text-foreground">10:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Friday - Saturday</span>
                    <span className="font-medium text-foreground">10:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium text-foreground">11:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="btn-primary gap-2"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="h-5 w-5" />
                  Order via WhatsApp
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={`tel:${PHONE_NUMBER}`} className="gap-2">
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>

            {/* Map */}
            <div className="h-[400px] lg:h-full min-h-[400px] rounded-xl overflow-hidden shadow-elevated">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61917.82772075088!2d28.37!3d-13.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408ce8b0d4b4e5%3A0x6c7c1c0c7c7c7c7c!2sLuanshya%2C%20Zambia!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Maajabu Restaurant Location"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
```

---

## Components

### src/components/Layout.tsx
```tsx
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cart from "./Cart";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
      <Cart />
    </div>
  );
};

export default Layout;
```

### src/components/Navbar.tsx
```tsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { toggleCart, getItemCount } = useCart();
  const itemCount = getItemCount();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-light/95 backdrop-blur-md shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-heading font-bold text-primary">
              Maajabu
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-medium transition-colors duration-200 hover:text-primary",
                  isActive(link.path)
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleCart}
              className="relative"
              aria-label="Open cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium animate-scale-in">
                  {itemCount}
                </span>
              )}
            </Button>

            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-64 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg font-medium transition-colors duration-200",
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
```

### src/components/Hero.tsx
```tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "260971716370";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I'd like to place an order from Maajabu Restaurant."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 overlay-gradient" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/15 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <span className="inline-block text-accent font-medium text-sm md:text-base tracking-wider uppercase mb-4">
            Welcome to Luanshya's Finest
          </span>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream-light leading-tight mb-6">
            Experience the
            <span className="block text-accent">Taste of Zambia</span>
          </h1>

          <p className="text-cream/80 text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed">
            Discover authentic Zambian cuisine and international flavors at Maajabu Restaurant. 
            Fresh ingredients, traditional recipes, unforgettable experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="btn-accent text-base px-8 h-12 gap-2 group"
            >
              <Link to="/menu">
                View Menu
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="btn-outline-light text-base px-8 h-12 gap-2"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="h-4 w-4" />
              Order on WhatsApp
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-cream/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
```

### src/components/CategorySection.tsx
```tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface FeatureCard {
  id: string;
  title: string;
  buttonText: string;
  link: string;
  bgColor: string;
}

const featureCards: FeatureCard[] = [
  {
    id: "traditional",
    title: "Taste of Zambia",
    buttonText: "Traditional",
    link: "/menu?category=traditional",
    bgColor: "from-primary/90 to-primary",
  },
  {
    id: "grills",
    title: "Fire & Smoke",
    buttonText: "Grills & BBQ",
    link: "/menu?category=grills",
    bgColor: "from-secondary/90 to-secondary",
  },
  {
    id: "specials",
    title: "Chef's Creations",
    buttonText: "Specials",
    link: "/menu?category=specials",
    bgColor: "from-accent/90 to-accent",
  },
];

const quickLinks: { id: string; title: string; link: string }[] = [
  { id: "chicken", title: "Chicken Dishes", link: "/menu?category=chicken" },
  { id: "fish", title: "Fish & Seafood", link: "/menu?category=fish" },
];

const CategorySection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Main Feature Cards - 3 column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
          {featureCards.map((card, index) => (
            <Link
              key={card.id}
              to={card.link}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.bgColor}`} />
              
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-24 h-24 border-2 border-current rounded-full" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-current rounded-full" />
              </div>
              
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
              
              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                  {card.title}
                </h3>
                <Button 
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6"
                  size="sm"
                >
                  {card.buttonText}
                </Button>
              </div>
            </Link>
          ))}
        </div>

        {/* Secondary Cards - 2 column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {quickLinks.map((link, index) => (
            <Link
              key={link.id}
              to={link.link}
              className="group relative aspect-[2/1] rounded-xl overflow-hidden animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/90" />
              
              {/* Decorative elements */}
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-primary/20" />
              
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
              
              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-heading text-xl md:text-2xl font-bold text-secondary-foreground mb-3">
                  {link.title}
                </h3>
                <Button 
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6"
                  size="sm"
                >
                  Order Now
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
```

### src/components/FeaturedItems.tsx
```tsx
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
```

### src/components/MenuCard.tsx
```tsx
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
```

### src/components/Cart.tsx
```tsx
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/data/menuData";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "260971716370";

const Cart = () => {
  const {
    state,
    removeItem,
    updateQuantity,
    clearCart,
    setCartOpen,
    getTotal,
    generateWhatsAppMessage,
  } = useCart();

  const handleCheckout = () => {
    const message = generateWhatsAppMessage();
    if (message) {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-charcoal/50 z-50 transition-opacity duration-300",
          state.isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setCartOpen(false)}
      />

      {/* Cart Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-96 bg-cream-light z-50 shadow-2xl transition-transform duration-300 ease-out flex flex-col",
          state.isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            <h2 className="font-heading text-xl font-semibold">Your Order</h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mb-4" />
              <p className="text-lg font-medium text-muted-foreground">
                Your cart is empty
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Add some delicious items from our menu
              </p>
              <Button
                className="mt-6 btn-primary"
                onClick={() => setCartOpen(false)}
              >
                Browse Menu
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div
                  key={item.menuItem.id}
                  className="bg-card rounded-lg p-4 shadow-sm animate-fade-in"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">
                        {item.menuItem.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {formatPrice(item.menuItem.price)} each
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground hover:text-destructive"
                      onClick={() => removeItem(item.menuItem.id)}
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          updateQuantity(item.menuItem.id, item.quantity - 1)
                        }
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          updateQuantity(item.menuItem.id, item.quantity + 1)
                        }
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <span className="font-semibold text-primary">
                      {formatPrice(item.menuItem.price * item.quantity)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t border-border p-4 space-y-4 bg-card">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">{formatPrice(getTotal())}</span>
            </div>
            <div className="flex items-center justify-between text-lg">
              <span className="font-semibold">Total</span>
              <span className="font-bold text-primary">
                {formatPrice(getTotal())}
              </span>
            </div>

            <Button
              className="w-full btn-primary gap-2 h-12 text-base"
              onClick={handleCheckout}
            >
              <MessageCircle className="h-5 w-5" />
              Order via WhatsApp
            </Button>

            <Button
              variant="outline"
              className="w-full"
              onClick={clearCart}
            >
              Clear Cart
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
```

### src/components/CTASection.tsx
```tsx
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "260971716370";
const PHONE_NUMBER = "+260971716370";

const CTASection = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I'd like to place an order from Maajabu Restaurant."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-charcoal/30" />

      {/* Decorative elements */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-20 w-40 h-40 bg-accent/15 rounded-full blur-3xl" />

      <div className="relative z-10 container-custom text-center">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-cream-light mb-4">
          Ready to Order?
        </h2>
        <p className="text-cream/80 text-lg max-w-lg mx-auto mb-8">
          Place your order now via WhatsApp or give us a call. 
          We're ready to serve you!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="btn-accent text-base px-8 h-12 gap-2"
            onClick={handleWhatsAppClick}
          >
            <MessageCircle className="h-5 w-5" />
            Order on WhatsApp
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="btn-outline-light text-base px-8 h-12 gap-2"
            asChild
          >
            <a href={`tel:${PHONE_NUMBER}`}>
              <Phone className="h-5 w-5" />
              Call Us Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
```

### src/components/Footer.tsx
```tsx
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold text-cream">
              Maajabu
            </h3>
            <p className="text-cream/70 text-sm leading-relaxed">
              Experience the finest flavors of Zambia at Maajabu Restaurant. 
              Where tradition meets culinary excellence in the heart of Luanshya.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-cream text-lg">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-cream/70 hover:text-accent transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                to="/menu"
                className="text-cream/70 hover:text-accent transition-colors text-sm"
              >
                Our Menu
              </Link>
              <Link
                to="/about"
                className="text-cream/70 hover:text-accent transition-colors text-sm"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-cream/70 hover:text-accent transition-colors text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-cream text-lg">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+260971716370"
                className="flex items-center gap-3 text-cream/70 hover:text-accent transition-colors text-sm"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                +260 971 716 370
              </a>
              <a
                href="mailto:info@maajabu.co.zm"
                className="flex items-center gap-3 text-cream/70 hover:text-accent transition-colors text-sm"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                info@maajabu.co.zm
              </a>
              <div className="flex items-start gap-3 text-cream/70 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Central Business District,<br />Luanshya, Zambia</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-cream text-lg">
              Opening Hours
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3 text-cream/70">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>Mon - Thu: 10:00 - 22:00</span>
              </div>
              <div className="flex items-center gap-3 text-cream/70">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>Fri - Sat: 10:00 - 23:00</span>
              </div>
              <div className="flex items-center gap-3 text-cream/70">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>Sunday: 11:00 - 21:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 mt-10 pt-6 text-center">
          <p className="text-cream/50 text-sm">
            © {currentYear} Maajabu Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

---

## Context & Data

### src/contexts/CartContext.tsx
```tsx
import React, { createContext, useContext, useReducer, useEffect } from "react";
import { MenuItem } from "@/data/menuData";

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: MenuItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "TOGGLE_CART" }
  | { type: "SET_CART_OPEN"; payload: boolean }
  | { type: "LOAD_CART"; payload: CartItem[] };

interface CartContextType {
  state: CartState;
  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setCartOpen: (isOpen: boolean) => void;
  getTotal: () => number;
  getItemCount: () => number;
  generateWhatsAppMessage: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "maajabu_cart";

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingIndex = state.items.findIndex(
        (item) => item.menuItem.id === action.payload.id
      );
      if (existingIndex >= 0) {
        const newItems = [...state.items];
        newItems[existingIndex].quantity += 1;
        return { ...state, items: newItems };
      }
      return {
        ...state,
        items: [...state.items, { menuItem: action.payload, quantity: 1 }],
      };
    }
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.menuItem.id !== action.payload),
      };
    case "UPDATE_QUANTITY": {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (item) => item.menuItem.id !== action.payload.id
          ),
        };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.menuItem.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    }
    case "CLEAR_CART":
      return { ...state, items: [] };
    case "TOGGLE_CART":
      return { ...state, isOpen: !state.isOpen };
    case "SET_CART_OPEN":
      return { ...state, isOpen: action.payload };
    case "LOAD_CART":
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: "LOAD_CART", payload: parsedCart });
      } catch (e) {
        console.error("Failed to parse cart from localStorage", e);
      }
    }
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (item: MenuItem) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const toggleCart = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  const setCartOpen = (isOpen: boolean) => {
    dispatch({ type: "SET_CART_OPEN", payload: isOpen });
  };

  const getTotal = () => {
    return state.items.reduce(
      (total, item) => total + item.menuItem.price * item.quantity,
      0
    );
  };

  const getItemCount = () => {
    return state.items.reduce((count, item) => count + item.quantity, 0);
  };

  const generateWhatsAppMessage = () => {
    if (state.items.length === 0) return "";

    let message = "🍽️ *Order from Maajabu Restaurant*\n\n";
    message += "📋 *Order Details:*\n";
    message += "─────────────────\n";

    state.items.forEach((item) => {
      message += `• ${item.menuItem.name} x${item.quantity} - K${(
        item.menuItem.price * item.quantity
      ).toFixed(2)}\n`;
    });

    message += "─────────────────\n";
    message += `💰 *Total: K${getTotal().toFixed(2)}*\n\n`;
    message += "📍 Please confirm delivery address and time.\n";
    message += "Thank you for choosing Maajabu Restaurant! 🙏";

    return encodeURIComponent(message);
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        toggleCart,
        setCartOpen,
        getTotal,
        getItemCount,
        generateWhatsAppMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
```

### src/data/menuData.ts
```typescript
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
```

---

## Utility Files

### src/lib/utils.ts
```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## Dependencies (package.json)

```json
{
  "dependencies": {
    "@hookform/resolvers": "^3.10.0",
    "@radix-ui/react-accordion": "^1.2.11",
    "@radix-ui/react-alert-dialog": "^1.1.14",
    "@radix-ui/react-aspect-ratio": "^1.1.7",
    "@radix-ui/react-avatar": "^1.1.10",
    "@radix-ui/react-checkbox": "^1.3.2",
    "@radix-ui/react-collapsible": "^1.1.11",
    "@radix-ui/react-context-menu": "^2.2.15",
    "@radix-ui/react-dialog": "^1.1.14",
    "@radix-ui/react-dropdown-menu": "^2.1.15",
    "@radix-ui/react-hover-card": "^1.1.14",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-menubar": "^1.1.15",
    "@radix-ui/react-navigation-menu": "^1.2.13",
    "@radix-ui/react-popover": "^1.1.14",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-radio-group": "^1.3.7",
    "@radix-ui/react-scroll-area": "^1.2.9",
    "@radix-ui/react-select": "^2.2.5",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slider": "^1.3.5",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.2.5",
    "@radix-ui/react-tabs": "^1.1.12",
    "@radix-ui/react-toast": "^1.2.14",
    "@radix-ui/react-toggle": "^1.1.9",
    "@radix-ui/react-toggle-group": "^1.1.10",
    "@radix-ui/react-tooltip": "^1.2.7",
    "@tanstack/react-query": "^5.83.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.6.0",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.462.0",
    "next-themes": "^0.3.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.61.1",
    "react-resizable-panels": "^2.1.9",
    "react-router-dom": "^6.30.1",
    "recharts": "^2.15.4",
    "sonner": "^1.7.4",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^0.9.9",
    "zod": "^3.25.76"
  }
}
```

---

**Generated on:** 2026-01-30

**WhatsApp Number:** 260971716370

**Restaurant:** Maajabu Restaurant, Luanshya, Zambia
