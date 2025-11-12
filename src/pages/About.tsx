import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import sakshiStudio from "@/assets/sakshi-studio.jpg";

const About = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Decorative Abstract Shapes */}
      <div className="fixed top-20 right-10 w-64 h-64 bg-gradient-sunset opacity-20 rounded-full blur-3xl layer-float pointer-events-none -z-10" />
      <div className="fixed bottom-40 left-20 w-96 h-96 bg-gradient-ocean opacity-15 organic-shape blur-3xl layer-float-delayed pointer-events-none -z-10" />
      <div className="fixed top-1/2 right-1/4 w-48 h-48 bg-gradient-lavender opacity-20 organic-shape-2 blur-2xl layer-float pointer-events-none -z-10" />
      
      <Navigation />

      {/* Hero - Asymmetric Layout */}
      <section className="pt-32 pb-16 px-4 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-gradient-sunset mb-6 animate-fade-in leading-tight">
                The Story Behind the Clay
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl animate-fade-in-up">
                How a pandemic sparked a passion, and a single tree inspired a community.
              </p>
            </div>
            <div className="lg:col-span-5 animate-scale-in">
              <div className="glass-colorful p-8 rounded-3xl organic-shape-2 hover-glow">
                <p className="text-lg font-serif italic text-foreground">
                  "Like the banyan, we grow through our roots and thrive through connection."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Story - Layered Asymmetric */}
      <section className="py-12 px-4 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image with glass overlay */}
            <div className="lg:col-span-6 lg:col-start-2 relative animate-scale-in">
              <div className="relative">
                <img
                  src={sakshiStudio}
                  alt="Sakshi Borana in her studio"
                  className="rounded-3xl shadow-2xl organic-shape w-full h-auto"
                />
                {/* Glass info card overlay */}
                <div className="absolute -bottom-6 -right-6 glass-strong p-6 rounded-2xl max-w-xs">
                  <p className="text-sm font-semibold text-foreground">Coil-Based Pottery</p>
                  <p className="text-xs text-muted-foreground mt-1">Hand-built, one-of-a-kind creations</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6 animate-fade-in">
              <div className="inline-block px-6 py-2 bg-gradient-golden rounded-full text-sm font-semibold text-dark-charcoal mb-4">
                Meet Sakshi Borana
              </div>
              <h2 className="text-4xl font-serif font-bold text-foreground">
                From Lockdown to Lifeline
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In 2021, during the height of the pandemic lockdown, I found myself searching for something to fill
                the silence. I picked up clay for the first time—awkward, messy, unpredictable. It was perfect.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What started as a way to pass time became a lifeline. Pottery taught me patience, presence, and
                the beauty of things that don't turn out "perfect." I studied commercial arts, but it was clay
                that taught me to truly create.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, at 27, I specialize in <span className="font-semibold text-gradient-sunset">coil-based, hand-built pottery</span>—no
                two pieces are ever the same. My studio is a reflection of who I am: chaotic, warm, a little uneven,
                but full of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy - Glass Cards */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-gradient-ocean mb-6">
              Why "Banian" Pottery?
            </h2>
            <div className="w-24 h-1 bg-gradient-sunset mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Large glass card */}
            <div className="glass-colorful p-10 rounded-3xl organic-shape hover-lift">
              <div className="space-y-6 text-lg text-foreground leading-relaxed">
                <p>
                  The <span className="font-bold text-gradient-golden">banyan tree</span> is a symbol of strength, community,
                  and connection. Its roots run deep, its branches reach wide, and for centuries, it has been a gathering
                  place—a spot where people meet, talk, rest, and connect.
                </p>
                <p className="text-muted-foreground">
                  That's what I want this studio to be. Not just a place to make pottery, but a space where people come
                  together. Where creativity flows freely. Where imperfection is celebrated.
                </p>
              </div>
            </div>

            {/* Stacked smaller cards */}
            <div className="space-y-6">
              <div className="glass p-8 rounded-2xl organic-shape-2 border-l-4 border-coral hover-glow">
                <h3 className="text-xl font-bold text-coral mb-3">Community First</h3>
                <p className="text-muted-foreground">Where you can show up messy, uncertain, or just curious—and leave with something beautiful.</p>
              </div>
              <div className="glass p-8 rounded-2xl organic-shape border-l-4 border-teal hover-glow">
                <h3 className="text-xl font-bold text-teal mb-3">Embrace Imperfection</h3>
                <p className="text-muted-foreground">Like the banyan, we grow through our roots and thrive through connection.</p>
              </div>
              <div className="glass p-8 rounded-2xl organic-shape-2 border-l-4 border-purple hover-glow">
                <h3 className="text-xl font-bold text-purple mb-3">Playful & Serious</h3>
                <p className="text-muted-foreground">Professional craftsmanship meets joyful, chaotic creativity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach - Masonry-style Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent via-muted/20 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl font-serif font-bold text-foreground mb-4 text-center">
            My Approach to Pottery
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Every piece tells a story of patience, intention, and beautiful chaos
          </p>

          {/* Asymmetric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large featured card */}
            <div className="md:col-span-2 md:row-span-2 glass-strong p-12 rounded-3xl organic-shape animate-fade-in hover-glow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-sunset opacity-30 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="inline-block px-4 py-2 bg-coral/20 rounded-full text-sm font-semibold text-coral mb-6">
                  ✨ Signature Style
                </div>
                <h3 className="text-3xl font-serif font-bold mb-6 text-foreground">Hand-Built, Not Perfect</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Every piece I create is made using the coil technique—building up layers of clay by hand. The result? Organic, asymmetric, beautifully imperfect pieces that feel alive.
                </p>
                <p className="text-muted-foreground">
                  No molds. No machines. Just raw clay, skilled hands, and the unique character that emerges from the creative process.
                </p>
              </div>
            </div>

            {/* Smaller cards */}
            <div className="glass p-8 rounded-2xl hover-lift animate-fade-in border-t-4 border-teal" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-serif font-bold mb-3 text-foreground">One-of-a-Kind</h3>
              <p className="text-muted-foreground">Each piece carries its own character, story, and soul. No two are ever the same.</p>
            </div>

            <div className="glass-colorful p-8 rounded-2xl hover-lift animate-fade-in border-t-4 border-purple" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-serif font-bold mb-3 text-foreground">Community Workshops</h3>
              <p className="text-muted-foreground">Fun, creativity, and connection through pottery parties and group sessions.</p>
            </div>

            <div className="md:col-span-2 glass p-10 rounded-2xl organic-shape-2 hover-lift animate-fade-in border-l-4 border-pink" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start gap-6">
                <div className="text-5xl">💝</div>
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-3 text-foreground">Custom Commissions</h3>
                  <p className="text-lg text-muted-foreground">
                    Have an idea? Let's bring it to life. I work with clients to create custom pottery pieces that reflect their vision and personality—perfect for gifts, interiors, or simply because.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <div className="glass-strong p-16 rounded-[3rem] organic-shape relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-lavender opacity-40 rounded-full blur-2xl" />
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-golden opacity-30 organic-shape blur-2xl" />
            
            <div className="relative z-10 text-center">
              <h2 className="text-5xl font-serif font-bold text-gradient-sunset mb-8">
                What's Next?
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                <p>
                  I dream of collaborating with interior designers to create immersive, pottery-filled spaces. I want to
                  host more themed parties—Halloween pots, bachelor/bachelorette pottery nights, and workshops that
                  celebrate life's messy, beautiful moments.
                </p>
                <p className="text-foreground font-medium">
                  Most of all, I want to keep building a community where people feel welcome, inspired, and free to
                  create without judgment. Because that's what pottery taught me—and that's what I want to share.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
