import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import potteryVase from "@/assets/pottery-vase.jpg";
import potteryBowl from "@/assets/pottery-bowl.jpg";
import customProcess from "@/assets/custom-process.png";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
            Custom Pottery <span className="text-golden">Commissions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Let's bring your vision to life. Every piece is hand-built, one-of-a-kind, and crafted with intention.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-center">
            The Commission Process
          </h2>

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
