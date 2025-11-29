import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import sakshiStudio from "@/assets/sakshi-studio.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 animate-fade-in">
            The Story Behind the Clay
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl animate-fade-in-up">
            How a pandemic sparked a passion, and a single tree inspired a community.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-scale-in">
              <img
                src={sakshiStudio}
                alt="Sakshi Borana in her studio"
                className="rounded-3xl shadow-2xl organic-shape w-full h-auto"
              />
            </div>

            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl font-serif font-bold text-foreground">
                Meet Sakshi Borana
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
                Today, at 27, I specialize in <span className="font-semibold text-golden">coil-based, hand-built pottery</span>—no
                two pieces are ever the same. My studio is a reflection of who I am: chaotic, warm, a little uneven,
                but full of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
              Why "Banian" Pottery?
            </h2>
          </div>

          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              The <span className="font-semibold text-foreground">banyan tree</span> is a symbol of strength, community,
              and connection. Its roots run deep, its branches reach wide, and for centuries, it has been a gathering
              place—a spot where people meet, talk, rest, and connect.
            </p>
            <p>
              That's what I want this studio to be. Not just a place to make pottery, but a space where people come
              together. Where creativity flows freely. Where imperfection is celebrated. Where you can show up messy,
              uncertain, or just curious—and leave with something beautiful.
            </p>
            <p className="text-golden font-semibold italic text-center text-xl">
              "Like the banyan, we grow through our roots and thrive through connection."
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-center">
            My Approach to Pottery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Hand-Built, Not Perfect",
                desc: "Every piece I create is made using the coil technique—building up layers of clay by hand. The result? Organic, asymmetric, beautifully imperfect pieces that feel alive.",
              },
              {
                title: "One-of-a-Kind Creations",
                desc: "No molds. No mass production. Just clay, intention, and a little bit of chaos. Each piece carries its own character, story, and soul.",
              },
              {
                title: "Workshops & Community",
                desc: "I love teaching. Whether it's a birthday party, a team event, or just a group of friends wanting to try something new, my workshops are all about fun, creativity, and connection.",
              },
              {
                title: "Custom Commissions",
                desc: "Have an idea? Let's bring it to life. I work with clients to create custom pottery pieces that reflect their vision and personality—perfect for gifts, interiors, or simply because.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl glass hover-lift animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-xl font-serif font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
            What's Next?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            I dream of collaborating with interior designers to create immersive, pottery-filled spaces. I want to
            host more themed parties—Halloween pots, bachelor/bachelorette pottery nights, and workshops that
            celebrate life's messy, beautiful moments.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most of all, I want to keep building a community where people feel welcome, inspired, and free to
            create without judgment. Because that's what pottery taught me—and that's what I want to share.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
