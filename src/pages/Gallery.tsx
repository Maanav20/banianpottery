import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import potteryBowl from "@/assets/pottery-bowl.jpg";
import potteryVase from "@/assets/pottery-vase.jpg";
import potteryMugs from "@/assets/pottery-mugs.jpg";
import { Button } from "@/components/ui/button";

const galleryItems = [
  {
    id: 1,
    image: potteryBowl,
    title: "Sage Bowl",
    category: "Bowls",
    description: "Hand-built coil bowl with organic edges and sage green glaze interior.",
    technique: "Coil Building",
  },
  {
    id: 2,
    image: potteryVase,
    title: "Asymmetric Vase",
    category: "Vases",
    description: "Sculptural vase celebrating imperfection with terracotta and dusty rose tones.",
    technique: "Coil Building",
  },
  {
    id: 3,
    image: potteryMugs,
    title: "Artisan Mug Collection",
    category: "Mugs",
    description: "Unique mugs with textured surfaces, each with its own character.",
    technique: "Coil Building",
  },
  {
    id: 4,
    image: potteryBowl,
    title: "Terracotta Serving Bowl",
    category: "Bowls",
    description: "Large serving bowl with natural clay finish and organic form.",
    technique: "Hand Building",
  },
  {
    id: 5,
    image: potteryVase,
    title: "Sculptural Form",
    category: "Art Pieces",
    description: "Abstract pottery piece exploring shape and color.",
    technique: "Coil Building",
  },
  {
    id: 6,
    image: potteryMugs,
    title: "Morning Cup Set",
    category: "Mugs",
    description: "Matching yet unique set of morning coffee cups.",
    technique: "Coil Building",
  },
];

const categories = ["All", "Bowls", "Vases", "Mugs", "Art Pieces"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 animate-fade-in">
            The Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Every piece tells a story. Explore hand-built pottery where chaos meets elegance.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className="transition-smooth"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className="break-inside-avoid group cursor-pointer animate-fade-in hover-lift"
                style={{ animationDelay: `${idx * 0.05}s` }}
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/90 via-dark-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-warm-cream">
                      <p className="text-xs font-semibold text-golden mb-1">{item.category}</p>
                      <h3 className="text-xl font-serif font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-warm-cream/80">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-charcoal/90 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="glass-strong rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-auto custom-scrollbar animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-auto rounded-2xl"
              />
              <div className="text-warm-cream">
                <p className="text-sm font-semibold text-golden mb-2">{selectedItem.category}</p>
                <h2 className="text-3xl font-serif font-bold mb-4">{selectedItem.title}</h2>
                <p className="text-warm-cream/90 mb-4 leading-relaxed">{selectedItem.description}</p>
                <div className="inline-block px-4 py-2 rounded-full bg-golden/20 text-sm font-medium mb-6 text-golden">
                  {selectedItem.technique}
                </div>
                <Button
                  onClick={() => setSelectedItem(null)}
                  variant="outline"
                  className="border-warm-cream/30 text-warm-cream hover:bg-warm-cream/10"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
