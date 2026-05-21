import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import potteryVase from "@/assets/pottery-vase.jpg";
import potteryBowl from "@/assets/pottery-bowl.jpg";
import customProcess from "@/assets/custom-process.png";
import { CheckCircle, Ruler, Weight, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { Badge } from "@/components/ui/badge";

const customProcessSteps = [
  {
    step: "1",
    title: "Share Your Vision",
    desc: "Tell me about what you're imagining: colors, shapes, purpose, inspiration.",
  },
  {
    step: "2",
    title: "Collaborative Design",
    desc: "We'll discuss ideas together and refine the concept until it feels just right.",
  },
  {
    step: "3",
    title: "Handcrafted Creation",
    desc: "I'll hand-build your piece using coil techniques, ensuring it's truly one-of-a-kind.",
  },
  {
    step: "4",
    title: "Glazing & Firing",
    desc: "Your piece is glazed with care and fired to bring out its final beauty.",
  },
  {
    step: "5",
    title: "Delivery",
    desc: "Your custom pottery is ready to bring warmth and character to its new home.",
  },
];

const customCategories = [
  {
    title: "Personalized Gifts",
    desc: "Create meaningful pottery gifts for weddings, anniversaries, or special occasions.",
  },
  {
    title: "Interior Design Collaborations",
    desc: "Work with interior designers to create pottery pieces that complete a space.",
  },
  {
    title: "Custom Dinnerware",
    desc: "Unique plates, bowls, and serving pieces crafted to your specifications.",
  },
  {
    title: "Sculptural Art Pieces",
    desc: "Artistic pottery creations that serve as statement pieces for homes or galleries.",
  },
];

const Custom = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-36 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-warm-cream via-background to-muted/40" />
        <div className="absolute top-20 -left-32 w-96 h-96 bg-golden/15 organic-shape blur-3xl -z-10" />
        <div className="absolute bottom-0 -right-32 w-[28rem] h-[28rem] bg-slate-blue/10 organic-shape-2 blur-3xl -z-10" />
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4 text-golden" />
            <span className="text-sm font-medium tracking-wide text-foreground/80">Studio Catalogue & Commissions</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight animate-fade-in-up">
            Hand‑built pottery,
            <br />
            <span className="text-golden italic">made to live with you.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            Browse pieces currently in the studio, or commission something entirely your own.
            Every piece is shaped by hand, glazed with care, and fired one at a time.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="bg-golden hover:bg-golden/90 text-dark-charcoal font-semibold">
              <a href="#catalogue">Browse Catalogue <ArrowRight className="h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Start a Commission</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Catalogue */}
      <section id="catalogue" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-golden uppercase tracking-[0.2em] text-xs font-semibold mb-3">The Catalogue</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                Pieces from the studio
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl">
                A living archive of {products.length} hand‑built pieces. Dimensions are approximate, as every piece is unique.
              </p>
            </div>
            <Button asChild variant="outline" className="self-start md:self-auto">
              <Link to="/contact">Enquire about a piece</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <article
                key={product.id}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border/60 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${Math.min(idx * 0.03, 0.4)}s` }}
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {product.status === "sold-out" && (
                      <Badge variant="secondary" className="bg-dark-charcoal text-warm-cream border-0">Sold out</Badge>
                    )}
                    {product.status === "defect" && (
                      <Badge variant="secondary" className="bg-slate-blue/90 text-warm-cream border-0">Studio second</Badge>
                    )}
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-mono tracking-wider px-2 py-1 rounded-full bg-background/80 backdrop-blur text-muted-foreground">
                      №{String(product.id).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-foreground leading-tight mb-3 min-h-[3rem]">
                    {product.name}
                  </h3>

                  <dl className="space-y-1.5 text-sm">
                    <div className="flex items-start gap-2 text-muted-foreground">
                      <Ruler className="h-3.5 w-3.5 mt-0.5 text-golden flex-shrink-0" />
                      <dd className="flex flex-wrap gap-x-3 gap-y-0.5">
                        {product.height && <span><span className="text-foreground/60">H</span> {product.height}</span>}
                        {product.width && <span><span className="text-foreground/60">W</span> {product.width}</span>}
                        {product.length && <span><span className="text-foreground/60">L</span> {product.length}</span>}
                      </dd>
                    </div>
                    {product.weight && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Weight className="h-3.5 w-3.5 text-golden flex-shrink-0" />
                        <dd>{product.weight}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-golden uppercase tracking-[0.2em] text-xs font-semibold mb-3">How it works</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              The Commission Process
            </h2>
          </div>

          <div className="mb-12 animate-fade-in">
            <img
              src={customProcess}
              alt="Custom pottery commission process illustration"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>

          <div className="space-y-6">
            {customProcessSteps.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-6 p-6 rounded-2xl glass hover-lift animate-fade-in"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-golden flex items-center justify-center text-dark-charcoal font-bold text-xl">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-center">
            Custom Work Examples
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="animate-scale-in">
              <img
                src={potteryVase}
                alt="Custom vase"
                className="w-full h-auto rounded-3xl shadow-2xl organic-shape mb-6"
              />
              <h3 className="text-2xl font-serif font-bold mb-3 text-foreground">Sculptural Vases</h3>
              <p className="text-muted-foreground">
                Each custom vase is shaped to complement your space and style: asymmetric, organic, and full of character.
              </p>
            </div>

            <div className="animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <img
                src={potteryBowl}
                alt="Custom bowl"
                className="w-full h-auto rounded-3xl shadow-2xl organic-shape-2 mb-6"
              />
              <h3 className="text-2xl font-serif font-bold mb-3 text-foreground">Functional Bowls</h3>
              <p className="text-muted-foreground">
                From serving bowls to decorative pieces, custom bowls are designed with both beauty and purpose in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-center">
            What Can I Create for You?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {customCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl glass hover-lift animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-golden flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-serif font-bold mb-2 text-foreground">{cat.title}</h3>
                    <p className="text-muted-foreground text-sm">{cat.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
            Interior Designer Collaborations
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            I'm passionate about working with interior designers to create immersive, pottery-filled spaces.
            Whether it's custom pieces for a residential project or sculptural installations for commercial spaces,
            I'd love to collaborate and bring your vision to life.
          </p>
          <Button asChild size="lg" className="bg-golden hover:bg-golden/90 text-dark-charcoal font-semibold">
            <Link to="/contact">Let's Collaborate</Link>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
            Have an Idea? Let's Talk
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Every commission starts with a conversation. Share your vision, and together we'll create something beautiful.
          </p>
          <Button asChild size="lg" className="bg-golden hover:bg-golden/90 text-dark-charcoal font-semibold">
            <Link to="/contact">Start Your Commission</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Custom;
