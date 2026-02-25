import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { PhotoManager } from "@/components/photo-manager";

export default function About() {
  return (
    <Layout>
      <section className="pt-32 md:pt-48 pb-20 md:pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[180px_1fr_240px] gap-16 md:gap-12 lg:gap-24">
              {/* Left Column: Info */}
              <div className="space-y-12 order-2 md:order-1 lg:order-1">
                <div className="space-y-8 text-lg font-medium">
                  <div className="space-y-2">
                    <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Contact</h3>
                    <div className="flex flex-col gap-1">
                      <a href="mailto:lokaninfilms@gmail.com" className="font-sans text-sm hover:text-muted-foreground transition-colors min-h-[32px] flex items-center">lokaninfilms@gmail.com</a>
                      <a href="mailto:andydabby@gmail.com" className="font-sans text-sm hover:text-muted-foreground transition-colors min-h-[32px] flex items-center">andydabby@gmail.com</a>
                    </div>
                    <div className="pt-2">
                      <a href="tel:+46704691414" className="font-sans text-sm hover:text-muted-foreground transition-colors min-h-[32px] flex items-center">(+46) 704691414</a>
                      <p className="font-sans text-[11px] uppercase tracking-tighter text-muted-foreground/50">Texting only</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Social</h3>
                    <div className="flex flex-col gap-1">
                      <a href="https://www.youtube.com/channel/UCmJYcx0T8qrgVDWnfIsYsHg" target="_blank" rel="noopener noreferrer" className="font-sans text-[16px] hover:opacity-50 transition-opacity min-h-[32px] flex items-center">YouTube LokaninFilms</a>
                      <a href="https://www.instagram.com/andreas.daban/" target="_blank" rel="noopener noreferrer" className="font-sans text-[16px] hover:opacity-50 transition-opacity min-h-[32px] flex items-center">Insta @andreas.daban</a>
                      <a href="https://www.instagram.com/lokaninfilms/" target="_blank" rel="noopener noreferrer" className="font-sans text-[16px] hover:opacity-50 transition-opacity min-h-[32px] flex items-center">Insta @lokaninfilms</a>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Location</h3>
                    <p className="font-sans text-sm">Sweden</p>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Film</h3>
                      <p className="font-sans text-xs text-muted-foreground leading-relaxed">Directing, Editing, Screenwriting</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Music</h3>
                      <p className="font-sans text-xs text-muted-foreground leading-relaxed">Playing the piano</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Other</h3>
                      <p className="font-sans text-xs text-muted-foreground leading-relaxed">Photography</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Column: CV Content */}
              <div className="space-y-20 md:border-l lg:border-x border-white/5 px-0 md:pl-12 lg:px-24 order-1 md:order-2 lg:order-2 md:col-span-1 lg:col-span-1">
                <div className="space-y-8">
                  <h1 className="font-display text-[clamp(2.5rem,8vw,4.5rem)] font-bold tracking-tighter uppercase leading-[0.9] break-words">Andreas daban elvesund</h1>
                  <p className="font-sans text-xs md:text-sm tracking-[0.15em] uppercase text-muted-foreground">Filmmaker, director, editor, piano Player and photographer.</p>
                  <div className="space-y-6 font-serif text-lg md:text-xl leading-relaxed text-foreground/80 max-w-2xl">
                    <p>
                      I make short films that explore the space between what we show the world and what we truly feel. My work is often focused on the lives of young people, capturing those quiet, formative moments of transition. I believe in natural performances and a calm, observational pace that allows the story to breathe.
                    </p>
                    <p>
                      Dialogue is often a last resort; I prefer to let silence, framing, and sound design carry the emotional weight. For me, music and color are not just decorative—they are essential narrative tools that shape the atmosphere.
                    </p>
                    <p>
                      My stories often have open endings because life doesn't always provide clean resolutions. At its core, my philosophy is one of observation and honesty, seeking to capture the raw, unvarnished reality of human experience.
                    </p>
                  </div>
                </div>

                <div className="space-y-10">
                  <h3 className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground border-b border-white/10 pb-4">Recognition</h3>
                  <div className="space-y-6">
                    {[
                      { festival: "Stockholm Filmfestival Junior", year: "2025", award: "Winner (1 minute film)" },
                      { festival: "First Time Filmmaker Awards", year: "2025", award: "Nominated" },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-baseline gap-4">
                        <div className="space-y-1">
                          <p className="font-sans text-sm font-medium">{item.festival}</p>
                          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{item.award}</p>
                        </div>
                        <span className="text-[10px] tracking-widest text-muted-foreground uppercase whitespace-nowrap">{item.year}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-10">
                  <h3 className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground border-b border-white/10 pb-4">Filmography</h3>
                  <div className="space-y-12">
                    <div className="space-y-8">
                      <h4 className="font-sans text-[9px] tracking-[0.2em] uppercase text-muted-foreground/50">Selected Work</h4>
                      {[
                        { title: "Golden Hours", year: "2025", role: "Director", type: "Short film" },
                      ].map((item, i) => (
                        <div key={i} className="grid grid-cols-[1fr_auto] gap-4">
                          <div className="space-y-1">
                            <h4 className="font-sans text-sm font-bold uppercase tracking-wider">{item.title}</h4>
                            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{item.role}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] tracking-widest text-muted-foreground uppercase">{item.year}</span>
                            <p className="text-[10px] text-muted-foreground/40 uppercase tracking-widest mt-1">{item.type}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-8 pb-4 md:pb-12">
                      <h4 className="font-sans text-[9px] tracking-[0.2em] uppercase text-muted-foreground/50">Early Works</h4>
                      {[
                        { title: "The deaf kid and the murderer", year: "2022", role: "Director", type: "Short film" },
                        { title: "Instagram", year: "2022", role: "Director", type: "Short film" },
                        { title: "Thomas Terror", year: "2020", role: "Director", type: "Short film" },
                      ].map((item, i) => (
                        <div key={i} className="grid grid-cols-[1fr_auto] gap-4">
                          <div className="space-y-1">
                            <h4 className="font-sans text-sm font-bold uppercase tracking-wider">{item.title}</h4>
                            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{item.role}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] tracking-widest text-muted-foreground uppercase">{item.year}</span>
                            <p className="text-[10px] text-muted-foreground/40 uppercase tracking-widest mt-1">{item.type}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Photography Manager */}
              <div className="space-y-8 order-3 md:col-span-2 lg:col-span-1">
                <div className="lg:sticky lg:top-32">
                  <PhotoManager />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
