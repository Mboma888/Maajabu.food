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
      <section className="relative hero-gradient-animated py-12 md:py-20 overflow-hidden">
        {/* Floating food items */}
        <div className="floating-food-item top-[10%] left-[10%] w-24 h-24">
          <img src="/src/images/chicken dish.jpeg" alt="" />
        </div>
        <div className="floating-food-item top-[15%] right-[12%] w-28 h-28">
          <img src="/src/images/fish.jpeg" alt="" />
        </div>
        <div className="floating-food-item bottom-[10%] left-[8%] w-32 h-32">
          <img src="/src/images/meal.jpeg" alt="" />
        </div>
        <div className="floating-food-item bottom-[15%] right-[15%] w-26 h-26">
          <img src="/src/images/meals.jpeg" alt="" />
        </div>
        
        <div className="container-custom text-center relative z-10">
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
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="relative group order-2 md:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="/src/images/About Us.jpeg" 
                  alt="Maajabu Restaurant" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl -z-10" />
            </div>
            
            {/* Text content */}
            <div className="prose prose-lg order-1 md:order-2">
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
