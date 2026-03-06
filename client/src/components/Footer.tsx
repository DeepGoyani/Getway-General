import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-24 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24 relative z-10">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-display mb-6"><span className="italic">G</span>etway Solar</h3>
            <p className="text-white/50 max-w-sm font-light leading-relaxed">
              Pioneering the transition to sustainable cinematic energy solutions. 
              We design, install, and maintain premium solar systems for the modern era.
            </p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest text-white/30 mb-6">Explore</h4>
            <ul className="space-y-4 flex flex-col">
              <Link href="/services" className="text-white/70 hover:text-primary transition-colors w-fit">Services</Link>
              <Link href="/installations" className="text-white/70 hover:text-primary transition-colors w-fit">Installations</Link>
              <Link href="/calculator" className="text-white/70 hover:text-primary transition-colors w-fit">Calculator</Link>
              <Link href="/subsidy" className="text-white/70 hover:text-primary transition-colors w-fit">Subsidy info</Link>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest text-white/30 mb-6">Connect</h4>
            <ul className="space-y-4 flex flex-col">
              <Link href="/contact" className="text-white/70 hover:text-primary transition-colors w-fit">Contact Us</Link>
              <a href="mailto:hello@getwaysolar.com" className="text-white/70 hover:text-primary transition-colors w-fit">hello@getwaysolar.com</a>
              <p className="text-white/70">1-800-SOLAR-NOW</p>
            </ul>
          </div>
        </div>

        {/* Giant typography at the bottom */}
        <div className="w-full flex justify-center items-center mt-12 select-none pointer-events-none opacity-5">
          <h1 className="text-[12vw] font-display whitespace-nowrap leading-none">
            <span className="italic">G</span>ETWAY SOLAR
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-white/5 text-xs text-white/30 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Getway Solar Energy</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
