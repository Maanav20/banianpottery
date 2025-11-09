import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import workshopCommunity from "@/assets/workshop-community.jpg";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Clock, Sparkles, IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";

const workshops = [
  {
    id: 1,
    title: "Coil your Pot",
    duration: "3.5 hours",
    price: "₹3,200",
    spots: 4,
    description: "Learn to make contemporary pots using the coil & pinch method—an age-old technique with endless modern possibilities. From sculptural pieces to everyday vessels, you'll shape clay slowly, mindfully, and in your own style.",
    highlight: "No wheel, no rush—just your hands, clay, and creativity.",
  },
  {
    id: 2,
    title: "Easy-Breezy",
    duration: "1.5 hours",
    price: "₹1,850",
    spots: 6,
    description: "Create flat forms—think platters, trinket trays, ash trays, plates... basically anything that lets your imagination flow. Want to make it extra special?",
    highlight: "Add textures using flowers, stamps, and studio tools—so every piece carries your unique touch.",
  },
  {
    id: 3,
    title: "For the Mug Lovers",
    duration: "1.5 hours",
    price: "₹1,850",
    spots: 4,
    description: "What's better than your morning coffee? Drinking it from a mug you made with your own hands. In this workshop, you'll handbuild your very own mug—shaping, smoothing, and adding little details that make it uniquely yours.",
    highlight: "Your morning ritual, elevated.",
  },
  {
    id: 4,
    title: "Experience it All",
    duration: "1.5 hours",
    price: "₹2,600",
    spots: 4,
    description: "Curious about pottery but not sure where to start? This workshop is the perfect introduction! You'll experience a gist of all the essential techniques—pinching, coiling, slab, wheel, texturing, and more.",
    highlight: "Explore clay in different ways and find your favorite method.",
  },
  {
    id: 5,
    title: "Wheel Potter Workshop",
    duration: "1.5 hours",
    price: "₹1,850",
    spots: 1,
    description: "Ever wanted to try the potter's wheel? This workshop gives you a gentle overview of wheel throwing—a chance to feel the clay spin beneath your hands and discover the rhythm of the wheel.",
    highlight: "A grounding practice that invites presence of mind, patience, and flow.",
  },
  {
    id: 6,
    title: "Brush Meets Clay",
    duration: "1.5 hours",
    price: "₹1,850",
    spots: 6,
    description: "Explore painting on pottery using textures, patterns, scenery, typography, or any visual that inspires you. From bold strokes to delicate details, your pot becomes your canvas.",
    highlight: "No rules, just color, creativity, and clay.",
  },
];

const additionalOfferings = [
  {
    title: "Long Pottery Course",
    features: ["10 Days Handbuilding", "10 Days Wheel Pottery"],
  },
  {
    title: "Studio Membership",
    features: ["12 hours a week access"],
  },
  {
    title: "Potter Sundays",
    features: ["Drinks, Dinner & Clay"],
  },
  {
    title: "Book The Studio",
    features: ["Host workshops at our studio"],
  },
  {
    title: "Ceramic Painting",
    features: ["Paint on clay creations"],
  },
];

const Workshops = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-muted/40 to-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                <span className="text-foreground">One Day. </span>
                <span className="text-golden">Endless Creativity.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                No experience needed—just your curiosity and a love for creating.
              </p>
              <div className="space-y-3 text-lg">
                <p className="flex items-start gap-3">
                  <span className="text-golden mt-1">•</span>
                  <span>Learn the basics of pottery</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-golden mt-1">•</span>
                  <span>Get messy (the fun kind!) with clay</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-golden mt-1">•</span>
                  <span>Craft your own handmade piece to take home</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-golden mt-1">•</span>
                  <span>Connect with a community of creators</span>
                </p>
              </div>
              <p className="text-muted-foreground mt-6 italic">
                Come alone, bring a friend, or gift the experience to someone you love.
              </p>
            </div>
            <div className="animate-scale-in">
              <img
                src={workshopCommunity}
                alt="Workshop community"
                className="rounded-3xl shadow-2xl organic-shape-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Cards */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-4">
            Join Our <span className="text-golden">One-Day Workshops</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            All pieces will be given back to you fully fired and glazed in a span of 20 days
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {workshops.map((workshop, idx) => (
              <div
                key={workshop.id}
                className="p-8 rounded-3xl glass border-2 border-border/30 hover-lift animate-fade-in"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-serif font-bold text-foreground pr-2">{workshop.title}</h3>
                  <div className="flex items-center gap-1 text-golden font-bold text-xl flex-shrink-0">
                    <IndianRupee className="h-4 w-4" />
                    <span>{workshop.price.replace('₹', '').replace(',', '')}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-golden" />
                    <span>{workshop.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4 text-golden" />
                    <span>{workshop.spots} {workshop.spots === 1 ? 'person' : 'people'} per session</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {workshop.description}
                </p>
                
                <p className="text-golden font-medium italic text-sm mb-6">
                  {workshop.highlight}
                </p>

                <Button asChild className="w-full bg-golden hover:bg-golden/90 text-dark-charcoal font-semibold">
                  <Link to="/contact">Book Now</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Offerings */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-serif font-bold text-center mb-4">
            More Ways to <span className="text-golden">Create</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            From intensive courses to casual pottery Sundays, there's something for everyone
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalOfferings.map((offering, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl glass border border-border/30 hover-lift animate-fade-in"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <h3 className="text-xl font-serif font-bold mb-4 text-foreground">{offering.title}</h3>
                <ul className="space-y-2">
                  {offering.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="text-golden mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="p-6 rounded-2xl glass border border-border/30 hover-lift animate-fade-in flex flex-col justify-center">
              <h3 className="text-xl font-serif font-bold mb-3 text-foreground">Pottery Parties</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2 text-muted-foreground text-sm">
                  <span className="text-golden mt-1">•</span>
                  <span>Birthday Parties</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground text-sm">
                  <span className="text-golden mt-1">•</span>
                  <span>Date Nights</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground text-sm">
                  <span className="text-golden mt-1">•</span>
                  <span>Get Togethers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl p-12 text-center" style={{
            background: 'linear-gradient(135deg, hsl(var(--dark-charcoal)) 0%, hsl(var(--brand-brown)) 100%)'
          }}>
            {/* Decorative organic shape */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-blue opacity-20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="inline-block px-6 py-2 rounded-full bg-golden/20 border border-golden/30 mb-6">
                <p className="text-golden font-semibold">Special Offer</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-warm-cream mb-4">
                Group of 6+? <span className="text-golden">Get 10% off!</span>
              </h2>
              <p className="text-warm-cream/80 text-lg mb-8">
                Perfect for team building, birthday celebrations, or just a fun day out with friends
              </p>
              <Button asChild size="lg" className="bg-golden hover:bg-golden/90 text-dark-charcoal font-semibold">
                <Link to="/contact">Inquire About Group Bookings</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
            Let's Meet Under the <span className="text-golden">Banian Roof</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            to explore, create & connect
          </p>
          <p className="text-muted-foreground mb-8 italic">
            Message for bookings or to customise a private workshop
          </p>
          <Button asChild size="lg" className="bg-golden hover:bg-golden/90 text-dark-charcoal font-semibold">
            <Link to="/contact">Book Your Workshop</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Workshops;
