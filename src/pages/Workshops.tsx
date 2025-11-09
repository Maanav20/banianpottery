import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import workshopCommunity from "@/assets/workshop-community.jpg";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const upcomingWorkshops = [
  {
    id: 1,
    title: "Beginner's Coil Building",
    date: "March 15, 2025",
    time: "2:00 PM - 5:00 PM",
    spots: 8,
    description: "Learn the fundamentals of hand-building pottery using the coil technique.",
    price: "₹2,500",
  },
  {
    id: 2,
    title: "Halloween Pottery Party",
    date: "October 28, 2025",
    time: "6:00 PM - 9:00 PM",
    spots: 12,
    description: "Create spooky pottery pieces perfect for Halloween decor.",
    price: "₹3,000",
  },
  {
    id: 3,
    title: "Custom Mug Making",
    date: "April 5, 2025",
    time: "10:00 AM - 1:00 PM",
    spots: 6,
    description: "Design and create your own unique coffee or tea mug.",
    price: "₹2,800",
  },
];

const pastWorkshops = [
  {
    title: "Valentine's Day Couples Workshop",
    participants: 10,
    description: "Couples created matching pottery pieces together.",
  },
  {
    title: "Birthday Pottery Celebration",
    participants: 15,
    description: "A special birthday party where everyone made their own clay creations.",
  },
  {
    title: "Corporate Team Building",
    participants: 20,
    description: "Team bonding through collaborative pottery projects.",
  },
];

const Workshops = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
                Create, Connect, Celebrate
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Join our pottery workshops for beginners, themed parties, team building, or special celebrations.
              </p>
              <p className="text-lg text-muted-foreground">
                Whether you're a complete beginner or looking for a unique way to celebrate,
                there's a place for you under the Banian tree.
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

      {/* Upcoming Workshops */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-center">
            Upcoming Workshops
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingWorkshops.map((workshop, idx) => (
              <div
                key={workshop.id}
                className="p-8 rounded-3xl glass hover-lift animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">{workshop.title}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm">{workshop.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm">{workshop.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm">{workshop.spots} spots available</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">{workshop.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{workshop.price}</span>
                  <Button asChild>
                    <Link to="/contact">Book Now</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Types */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-center">
            Workshop Experiences
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Themed Pottery Parties",
                desc: "Halloween, birthdays, bachelor/bachelorette parties—make it memorable with pottery.",
              },
              {
                icon: Users,
                title: "Corporate Team Building",
                desc: "Strengthen your team through creative collaboration and hands-on pottery making.",
              },
              {
                icon: Calendar,
                title: "Beginner Workshops",
                desc: "No experience needed. Learn coil building, glazing, and pottery fundamentals.",
              },
              {
                icon: Clock,
                title: "Private Sessions",
                desc: "Book a private workshop for your group—customized to your interests and pace.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl glass hover-lift animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Workshops */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-center">
            Past Workshop Highlights
          </h2>

          <div className="space-y-6">
            {pastWorkshops.map((workshop, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl glass animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2 text-foreground">{workshop.title}</h3>
                    <p className="text-muted-foreground">{workshop.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <Users className="h-5 w-5" />
                    <span className="font-semibold">{workshop.participants}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
            Ready to Get Your Hands Dirty?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a workshop, host a pottery party, or inquire about private sessions.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Contact Us to Book</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Workshops;
