import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MapPin, Mail, Phone, Instagram } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 animate-fade-in">
            Let's Connect
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Whether you want to book a workshop, commission a piece, or just say hello—we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="animate-fade-in">
              <div className="glass rounded-3xl p-8">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                      Phone (Optional)
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      placeholder="Tell us about your inquiry..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-golden hover:bg-golden/90 text-dark-charcoal font-semibold">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground mb-8">
                    Reach out via any of the methods below, or simply fill out the form and we'll get back to you soon.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl glass hover-lift">
                    <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-golden/10 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-golden" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">Email</h3>
                      <a
                        href="mailto:hello@banianpottery.com"
                        className="text-muted-foreground hover:text-golden transition-smooth"
                      >
                        hello@banianpottery.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl glass hover-lift">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-golden/10 flex items-center justify-center">
                        <Phone className="h-6 w-6 text-golden" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">Phone</h3>
                      <a
                        href="tel:+919876543210"
                        className="text-muted-foreground hover:text-golden transition-smooth"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl glass hover-lift">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-golden/10 flex items-center justify-center">
                        <Instagram className="h-6 w-6 text-golden" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">Instagram</h3>
                      <a
                        href="https://instagram.com/banianpottery"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-golden transition-smooth"
                      >
                        @banianpottery
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl glass hover-lift">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-golden/10 flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-golden" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">Studio Visits</h3>
                      <p className="text-muted-foreground">
                        By appointment only. Contact us to schedule a visit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-muted-foreground mb-8">
            Join our community to receive updates about new workshops, pottery drops, and special events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-1"
            />
            <Button className="bg-golden hover:bg-golden/90 text-dark-charcoal font-semibold">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
