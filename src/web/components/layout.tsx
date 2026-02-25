import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  const [location] = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-8 py-6 flex justify-between items-center">
        <Link href="/" className="font-display text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity z-50 flex items-center gap-4">
          <span>LokaninFilms</span>
        </Link>
        
        <div className="flex items-center gap-8">
          <button 
            className="z-50 p-2 -mr-2 hover:opacity-70 transition-opacity"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 md:w-8 md:h-8" /> : <Menu className="w-6 h-6 md:w-8 md:h-8" />}
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 bg-background/95 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col items-center justify-center gap-8 md:gap-12 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-4'}`}>
        <Link href="/" className="font-display text-4xl md:text-7xl uppercase tracking-tighter font-bold hover:italic transition-all duration-300">Home</Link>
        <Link href="/projects/golden-hours" className="font-display text-4xl md:text-7xl uppercase tracking-tighter font-bold hover:italic transition-all duration-300">Work</Link>
        <Link href="/story" className="font-display text-4xl md:text-7xl uppercase tracking-tighter font-bold hover:italic transition-all duration-300">Lokanin's Story</Link>
        <Link href="/about" className="font-display text-4xl md:text-7xl uppercase tracking-tighter font-bold text-center px-6 hover:italic transition-all duration-300">Creator and vision</Link>
        <Link href="/contact" className="font-display text-4xl md:text-7xl uppercase tracking-tighter font-bold hover:italic transition-all duration-300">Contacts</Link>
        
        <div className="flex gap-10 mt-12 md:mt-20">
          <a href="https://www.youtube.com/channel/UCmJYcx0T8qrgVDWnfIsYsHg" target="_blank" rel="noopener noreferrer" className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-50 hover:opacity-100 transition-opacity">YouTube</a>
          <a href="https://www.instagram.com/andreas.daban/" target="_blank" rel="noopener noreferrer" className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-50 hover:opacity-100 transition-opacity">Instagram</a>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 font-sans text-[10px] tracking-widest uppercase text-muted-foreground">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-8 py-12 flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
        <div className="text-center md:text-left">
          <p>&copy; 2026 LokaninFilms</p>
          <p></p>
        </div>
        <div className="flex gap-6">
          <a href="https://www.youtube.com/channel/UCmJYcx0T8qrgVDWnfIsYsHg" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors min-h-[48px] flex items-center">YouTube</a>
          <a href="https://www.instagram.com/andreas.daban/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors min-h-[48px] flex items-center">Instagram</a>
          <a href="https://www.instagram.com/lokaninfilms/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors min-h-[48px] flex items-center">Lokanin</a>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white selection:text-black">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className={`transition-all duration-700 ${isOpen ? 'blur-md' : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
