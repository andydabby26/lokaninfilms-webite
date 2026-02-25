import { Layout } from "@/components/layout";
import { projects } from "@/lib/projects";
import { useParams, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Play } from "lucide-react";

export default function ProjectDetail() {
  const { id } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Layout>
        <div className="h-screen flex items-center justify-center font-display text-2xl uppercase">
          Project not found
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Project Hero */}
      <section className="relative h-[100svh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-10" />
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center max-w-4xl"
          >
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4 block text-center">
              {project.year} — {project.format} — {project.role}
            </span>
            <h1 className="font-display text-[clamp(2rem,10vw,6rem)] font-bold tracking-tighter uppercase text-center break-words">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-16 md:py-24 px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Video & Director's Note */}
          <div className="md:col-span-8">
            <div className="max-w-4xl space-y-12 md:space-y-16">
              {project.videoUrl && (
                <div className="aspect-video w-full bg-neutral-900 overflow-hidden relative group">
                  <AnimatePresence mode="wait">
                    {!isPlaying ? (
                      <motion.div 
                        key="thumbnail"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 cursor-pointer"
                        onClick={() => setIsPlaying(true)}
                      >
                        <img 
                          src={project.thumbnail || project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover grayscale brightness-50 transition-all duration-[400ms] ease-out group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/20 bg-black/40 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:bg-white group-hover:border-white transition-all duration-500">
                            <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white group-hover:text-black group-hover:fill-black transition-colors" />
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="video"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-full h-full"
                      >
                        <iframe
                          src={`${project.videoUrl}?autoplay=1`}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {project.note && (
                <div className="pt-8 md:pt-0">
                  <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-6 md:mb-8 block">Director's Note</span>
                  <div className="font-serif text-xl md:text-3xl leading-relaxed italic text-foreground/90 space-y-6 md:space-y-8">
                    {project.note?.split('\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Credits & Awards */}
          <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-white/5 pt-12 md:pt-0 md:pl-8 lg:pl-16 space-y-12 md:space-y-16">
            <div>
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-8 block">Full Credits</span>
              <div className="space-y-8">
                {/* Organize by category */}
                {['Director', 'Music', 'Cast', 'Cinematography', 'Editing', 'Producer'].map(role => {
                  const roleCredits = project.credits?.filter(c => c.role === role);
                  if (!roleCredits || roleCredits.length === 0) return null;
                  return (
                    <div key={role} className="space-y-2">
                      <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground/60">{role}</p>
                      {roleCredits.map((credit, i) => (
                        <p key={i} className="font-display text-lg lg:text-xl tracking-tight uppercase">{credit.name}</p>
                      ))}
                    </div>
                  );
                })}
                {/* Other credits */}
                {project.credits?.filter(c => !['Director', 'Music', 'Cast', 'Cinematography', 'Editing', 'Producer'].includes(c.role)).map((credit, i) => (
                  <div key={i} className="space-y-2">
                    <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground/60">{credit.role}</p>
                    <p className="font-display text-lg lg:text-xl tracking-tight uppercase">{credit.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {project.id === "golden-hours" && (
              <div className="pt-12 md:pt-16 border-t border-white/5">
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-8 block">Recognition</span>
                <div className="space-y-6">
                  {[
                    { festival: "Stockholm Filmfestival Junior", year: "2025", award: "Winner (1 minute film)" },
                    { festival: "First Time Filmmaker Awards", year: "2025", award: "Nominated" },
                  ].map((item, i) => (
                    <div key={i}>
                      <p className="font-sans text-[10px] tracking-widest uppercase text-muted-foreground mb-1">{item.festival} {item.year}</p>
                      <p className="font-display text-lg tracking-tight uppercase">{item.award}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Next Project / Back */}
      <section className="py-20 md:py-32 px-6 md:px-24 border-t border-white/5 flex justify-center">
        <Link href="/#works" className="group flex items-center gap-6 min-h-[48px]">
          <div className="w-12 h-[1px] bg-white/30 group-hover:w-20 transition-all duration-500" />
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase hover:text-muted-foreground transition-colors">Back to Featured Work</span>
        </Link>
      </section>
    </Layout>
  );
}
