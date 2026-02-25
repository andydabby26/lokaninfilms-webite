import { Layout } from "@/components/layout";
import { motion } from "framer-motion";

export default function Story() {
  return (
    <Layout>
      <section className="pt-32 md:pt-48 pb-20 md:pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-24"
          >
            {/* Header */}
            <div className="space-y-8">
              <h1 className="font-display text-[clamp(3rem,10vw,6rem)] font-bold tracking-tighter uppercase leading-[0.8] text-glow">
                Lokanin's <br /> Story
              </h1>
              <p className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-muted-foreground border-l border-white/20 pl-6 py-2">
                A Film Group with great goals
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="max-w-2xl">
              <div className="space-y-6">
                <h2 className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground">The Mission</h2>
                <p className="font-serif text-2xl md:text-3xl leading-tight">
                  "I want to make movies to get people to feel and get inspired."
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-16 border-t border-white/5 pt-16">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
                <h3 className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground">Who we are</h3>
                <div className="space-y-8 font-serif text-lg md:text-xl leading-relaxed text-foreground/90">
                  <p>
                    Lokanin is a team of young Swedish filmmakers based in Stockholm. The group is run by 16 year olds with real festival experience and a clear vision. One of the founders, Andreas Daban Elvesund, won Stockholm Film Festival Junior 2025 with the short film Golden Hours.
                  </p>
                  <p>
                    In 2019, my interest in film began, and a year later I met Loke, who shared my passion, so we wanted to collaborate. Then we met Nils who came up with the idea for the whole company, and I realized we should have a website. So, we all decided on a company name that would be a combination of our names, Loke Andreas and Nils: Lokanin. And with the years we have improved a lot on everything.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
                <h3 className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground">What we do</h3>
                <div className="space-y-8 font-serif text-lg md:text-xl leading-relaxed text-foreground/90">
                  <p>
                    We create short films and movies in both Swedish and English. Our stories deal with real emotions and real problems. We aim to make films that feel honest, relevant, and strong enough to stay with the audience after the screen goes dark.
                  </p>
                  <div className="space-y-3 text-foreground/90">
                    <p>• Write and develop original stories</p>
                    <p>• Produce and direct short films</p>
                    <p>• Work with young actors</p>
                    <p>• Build projects from idea to finished film</p>
                    <p>• Share your work online to grow an audience</p>
                    <p className="pt-4">We are not waiting for permission. We create opportunities. We build experience early. We learn by doing.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
                <h3 className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground">Our FUTURE</h3>
                <div className="space-y-8 font-serif text-lg md:text-xl leading-relaxed text-foreground/90">
                  <div className="space-y-3 text-foreground/90">
                    <p>• Produce bigger and more ambitious short films</p>
                    <p>• Reach international festivals</p>
                    <p>• Grow a strong creative team in Stockholm</p>
                    <p>• Collaborate with actors, writers, and filmmakers</p>
                    <p>• Turn Lokanin into a long term production company</p>
                  </div>
                  <p>
                    If you live in Stockholm, Sweden and want to act or work on our films with us. Please get in touch.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-12 text-center">
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-8">lets create something together</p>
              <div className="flex justify-center gap-12" style={{ fontFamily: 'Arial' }}>
                 <a href="mailto:lokaninfilms@gmail.com" className="text-2xl hover:italic transition-all"></a>
                 <a href="/contact" className="text-2xl hover:italic transition-all"></a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
