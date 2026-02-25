import { Layout } from "@/components/layout";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Layout>
      <section className="min-h-[100svh] flex items-center justify-center px-6 py-32">
        <div className="max-w-xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-12 block">
              Contact
            </span>

            <h2 className="font-display text-[clamp(2rem,8vw,4rem)] font-bold tracking-tighter uppercase mb-20 leading-[0.9] break-words">
              lets create <br /> something together
            </h2>

            <div className="space-y-16">
              <div className="space-y-8">
                <div className="space-y-4 md:space-y-2">
                  <a href="mailto:lokaninfilms@gmail.com" className="font-serif text-xl sm:text-2xl md:text-4xl hover:text-muted-foreground transition-colors italic block break-words min-h-[48px] flex items-center justify-center">
                    lokaninfilms@gmail.com
                  </a>
                  <a href="mailto:andydabby@gmail.com" className="font-serif text-lg sm:text-xl md:text-2xl text-muted-foreground hover:text-foreground transition-colors italic block break-words min-h-[48px] flex items-center justify-center">
                    andydabby@gmail.com
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="tel:+46704691414" className="font-sans text-lg tracking-tight hover:text-muted-foreground transition-colors min-h-[48px] flex items-center justify-center">
                    (+46) 704691414
                  </a>
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground/60">
                    Texting only
                  </p>
                </div>
              </div>

              <div className="pt-16 border-t border-white/5">
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
                  <a href="https://www.youtube.com/channel/UCmJYcx0T8qrgVDWnfIsYsHg" target="_blank" rel="noopener noreferrer" className="font-sans text-[10px] tracking-[0.3em] uppercase hover:text-muted-foreground transition-colors min-h-[48px] flex items-center">YouTube</a>
                  <a href="https://www.instagram.com/andreas.daban/" target="_blank" rel="noopener noreferrer" className="font-sans text-[10px] tracking-[0.3em] uppercase hover:text-muted-foreground transition-colors min-h-[48px] flex items-center text-center">Instagram (@andreas.daban)</a>
                  <a href="https://www.instagram.com/lokaninfilms/" target="_blank" rel="noopener noreferrer" className="font-sans text-[10px] tracking-[0.3em] uppercase hover:text-muted-foreground transition-colors min-h-[48px] flex items-center text-center">Instagram (@lokaninfilms)</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
