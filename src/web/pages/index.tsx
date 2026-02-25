import { Layout } from "@/components/layout";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export default function Index() {
  const featuredProject = projects[0];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[100svh] flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background z-10" />
          <div 
            className="w-full h-full bg-cover bg-center animate-slow-zoom"
            style={{ 
              backgroundImage: `url('/images/hero-lokaninfilms-cinema.jpg')`,
              filter: 'grayscale(0) brightness(0.4)'
            }} 
          />
          {/* Grain Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        <div className="relative z-30 max-w-screen-2xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 
              className="font-display text-[clamp(3rem,15vw,12rem)] font-bold tracking-tighter leading-[0.85] sm:leading-[0.8] uppercase break-words"
              style={{ textShadow: '0 0 80px rgba(255,255,255,0.5), 0 0 30px rgba(255,255,255,0.3)' }}
            >
              Lokanin<wbr />Films
            </h1>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <a href="#works" className="flex flex-col items-center gap-4 group cursor-pointer min-h-[48px]">
            <span className="font-sans text-[10px] tracking-widest uppercase opacity-60">Scroll to explore</span>
            <div className="w-[1px] h-12 bg-white/30 group-hover:h-20 transition-all duration-500" />
          </a>
        </motion.div>
      </section>

      {/* Featured Work Section */}
      <section id="works" className="py-24 md:py-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 mb-12 md:mb-16">
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Featured Work</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter uppercase">Selected Project</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            <ProjectCard project={featuredProject} index={0} />
            
            <div className="space-y-10 md:space-y-12 md:pt-4">
              <div className="space-y-6">
                <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Recognition & Accolades</h3>
                <div className="space-y-6 md:space-y-8">
                  {[
                    { festival: "Stockholm Filmfestival Junior", year: "2025", award: "Winner (1 minute film)" },
                    { festival: "First Time Filmmaker Awards", year: "2025", award: "Nominated" },
                  ].map((item, i) => (
                    <div key={i} className="border-b border-white/5 pb-4 last:border-0">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="text-sm font-medium tracking-tight font-sans">{item.festival}</span>
                        <span className="text-[10px] tracking-widest text-muted-foreground uppercase">{item.year}</span>
                      </div>
                      <span className="block text-[10px] text-muted-foreground/60 uppercase tracking-widest">{item.award}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 border-t border-white/5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-8">lets create something together</p>
          <a href="/contact" className="font-display text-4xl md:text-6xl font-bold tracking-tighter uppercase hover:italic transition-all">Get in touch</a>
        </motion.div>
      </section>
    </Layout>
  );
}
