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
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-dark-charcoal/60 via-dark-charcoal/40 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            <span className="text-warm-cream">Where Roots Meet </span>
            <span className="text-golden">Clay</span>
          </h1>
          <p className="text-xl md:text-2xl text-warm-cream/90 mb-8 max-w-2xl mx-auto italic">
            Under the Banian roof, we explore, create, and connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-golden hover:bg-golden/90 text-dark-charcoal font-semibold">
              <Link to="/workshops">
                Join a Workshop
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="glass-strong text-warm-cream border-warm-cream/30 hover:bg-warm-cream/10">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Previous Workshops */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Previous <span className="text-golden">Workshops</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Glimpses of creativity, community, and beautiful chaos from our past sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: potteryBowl, title: "Handbuilding Bowl Workshop", date: "October 12, 2024" },
              { img: potteryVase, title: "Textured Vase Workshop", date: "November 15, 2024" },
              { img: potteryMugs, title: "Wheel-Thrown Mugs Workshop", date: "December 8, 2024" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-3xl animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-transparent">
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-serif font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">Date: {item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-golden hover:bg-golden/90 text-dark-charcoal font-semibold">
              <Link to="/workshops">
                Join Our Next Workshop
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Healing Through Creation",
                desc: "Pottery as meditation, connection, and self-discovery.",
              },
              {
                icon: Users,
                title: "Community Gathering",
                desc: "Like the banyan tree, we're a space for coming together.",
              },
              {
                icon: Sparkles,
                title: "Chaotic Elegance",
                desc: "Celebrating imperfection as the truest form of beauty.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center p-8 rounded-2xl glass hover-lift animate-fade-in"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-golden/10 mb-6">
                  <item.icon className="h-8 w-8 text-golden" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="glass-strong rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Ready to Create Something <span className="text-golden">Beautiful</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you want to join a workshop, commission a custom piece, or simply explore,
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-golden hover:bg-golden/90 text-dark-charcoal font-semibold">
                <Link to="/workshops">Browse Workshops</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
