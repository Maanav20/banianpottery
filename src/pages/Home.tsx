import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-pottery.jpg";
import potteryBowl from "@/assets/pottery-bowl.jpg";
import potteryVase from "@/assets/pottery-vase.jpg";
import potteryMugs from "@/assets/pottery-mugs.jpg";

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Decorative floating elements */}
      <div className="fixed top-20 right-10 w-96 h-96 bg-gradient-sunset opacity-15 rounded-full blur-3xl layer-float pointer-events-none -z-10" />
      <div className="fixed bottom-40 left-20 w-64 h-64 bg-gradient-ocean opacity-20 organic-shape blur-3xl layer-float-delayed pointer-events-none -z-10" />
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Decorative Abstract Shapes */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-sunset opacity-20 rounded-full blur-3xl layer-float pointer-events-none" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-ocean opacity-25 organic-shape blur-3xl layer-float-delayed pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-lavender opacity-20 organic-shape-2 blur-2xl layer-float pointer-events-none" />
        
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-dark-charcoal/85 via-dark-charcoal/70 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-warm-cream mb-6 animate-fade-in leading-tight">
                Where Roots Meet <span className="text-gradient-golden">Clay</span>
              </h1>
              <p className="text-xl md:text-2xl text-warm-cream/90 max-w-3xl mx-auto lg:mx-0 mb-12 animate-fade-in-up leading-relaxed">
                Hand-built pottery inspired by the banyan tree—a gathering place for community, creativity, and connection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
                <Button asChild size="lg" className="bg-golden hover:bg-golden/90 text-dark-charcoal text-lg px-8 py-6 rounded-full font-semibold transition-smooth hover:scale-105">
                  <Link to="/workshops">
                    Join a Workshop
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="glass-strong border-2 border-warm-cream text-warm-cream hover:bg-warm-cream hover:text-dark-charcoal text-lg px-8 py-6 rounded-full font-semibold transition-smooth">
                  <Link to="/gallery">View Gallery</Link>
                </Button>
              </div>
            </div>
            
            {/* Glass info card */}
            <div className="lg:col-span-5 animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="glass-strong p-10 rounded-3xl organic-shape-2 max-w-md mx-auto">
                <div className="text-warm-cream">
                  <div className="text-5xl mb-4">🌳</div>
                  <h3 className="text-2xl font-serif font-bold mb-4">Handcrafted with Love</h3>
                  <p className="text-warm-cream/80 mb-6">Every piece is unique, created using traditional coil-building techniques. No two are ever the same.</p>
                  <div className="flex gap-4 text-sm">
                    <div className="flex-1 glass p-4 rounded-xl text-center">
                      <div className="font-bold text-golden text-2xl">100+</div>
                      <div className="text-warm-cream/70">Pieces Created</div>
                    </div>
                    <div className="flex-1 glass p-4 rounded-xl text-center">
                      <div className="font-bold text-golden text-2xl">50+</div>
                      <div className="text-warm-cream/70">Workshops Held</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pottery */}
      <section className="py-20 px-4 relative">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-warm-cream/30 to-transparent pointer-events-none" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-golden rounded-full text-sm font-semibold text-dark-charcoal mb-6">
              ✨ Gallery Highlights
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-gradient-sunset mb-4">
              Featured Creations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each piece tells its own story—handcrafted with intention, imperfection, and heart.
            </p>
          </div>

          {/* Asymmetric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: potteryBowl, title: "Organic Bowl", desc: "Hand-coiled ceramic bowl with natural glaze", color: "coral" },
              { img: potteryVase, title: "Sculptural Vase", desc: "Asymmetric design celebrating imperfection", color: "teal" },
              { img: potteryMugs, title: "Artisan Mugs", desc: "Unique mugs, each with its own character", color: "purple" },
            ].map((item, idx) => (
              <div key={idx} className="group animate-fade-in" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="glass-colorful p-4 rounded-3xl organic-shape hover-glow transition-smooth">
                  <div className="overflow-hidden rounded-2xl mb-4">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-80 object-cover transition-smooth group-hover:scale-110"
                    />
                  </div>
                  <div className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-3`} style={{ 
                    backgroundColor: `hsl(var(--${item.color}) / 0.2)`,
                    color: `hsl(var(--${item.color}))`
                  }}>
                    Handcrafted
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg" className="glass-strong border-2 border-foreground/20 hover:bg-golden hover:text-dark-charcoal rounded-full px-10 py-6 text-lg font-semibold transition-smooth hover:scale-105">
              <Link to="/gallery">
                View Full Gallery
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Asymmetric Glass Cards */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-gradient-ocean mb-4">
              Our Philosophy
            </h2>
            <div className="w-24 h-1 bg-gradient-sunset mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: "Healing Through Creation",
                desc: "Pottery as meditation, connection, and self-discovery.",
                gradient: "bg-gradient-sunset",
                color: "coral"
              },
              {
                icon: Users,
                title: "Community Gathering",
                desc: "Like the banyan tree, we're a space for coming together.",
                gradient: "bg-gradient-ocean",
                color: "teal"
              },
              {
                icon: Sparkles,
                title: "Chaotic Elegance",
                desc: "Celebrating imperfection as the truest form of beauty.",
                gradient: "bg-gradient-lavender",
                color: "purple"
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center p-8 rounded-3xl glass-colorful hover-glow animate-fade-in organic-shape"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${item.gradient} mb-6 shadow-lg`}>
                  <item.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Large Glass Card */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <div className="glass-strong rounded-[3rem] p-16 text-center organic-shape-2 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-48 h-48 bg-gradient-lavender opacity-40 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-56 h-56 bg-gradient-golden opacity-30 organic-shape blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-gradient-sunset mb-6">
                Ready to Create Something Beautiful?
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Whether you want to join a workshop, commission a custom piece, or simply explore,
                we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-golden text-dark-charcoal font-semibold rounded-full px-10 py-6 text-lg transition-smooth hover:scale-105 hover:shadow-2xl">
                  <Link to="/workshops">Browse Workshops</Link>
                </Button>
                <Button asChild size="lg" className="glass border-2 border-foreground/20 rounded-full px-10 py-6 text-lg font-semibold transition-smooth hover:bg-foreground/10">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
