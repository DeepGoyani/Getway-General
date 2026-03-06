import { useEffect, useRef } from "react";
import { Link } from "wouter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageTransition from "@/components/PageTransition";
import CinematicText from "@/components/CinematicText";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const introRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax on images
    const images = gsap.utils.toArray<HTMLElement>('.parallax-bg');
    images.forEach(img => {
      gsap.to(img, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: img.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    });

    // Reveal text in intro section
    const ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 75%",
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <PageTransition>
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12">
        <div className="absolute inset-0 z-0">
          {/* landing page hero solar panels cinematic dark */}
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop" 
            alt="Solar Panels" 
            className="w-full h-full object-cover parallax-bg scale-110"
          />
        </div>

        <div className="relative z-20 w-full">
          <div className="overflow-hidden mb-2">
            <CinematicText text="Powering" className="text-6xl md:text-[8vw] leading-none" />
          </div>
          <div className="overflow-hidden flex items-center gap-6">
            <CinematicText text="The Future" className="text-6xl md:text-[8vw] leading-none text-primary" delay={0.2} />
            <div className="hidden md:block h-[2px] w-32 bg-primary/50 mt-4" />
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section ref={introRef} className="py-32 px-6 md:px-12 bg-background min-h-[70vh] flex items-center">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 flex flex-col justify-between">
            <h3 className="reveal-text text-xl md:text-3xl font-display font-light leading-snug">
              We design and execute architectural-grade solar energy solutions that integrate seamlessly into your environment.
            </h3>
            <Link 
              href="/about" 
              className="reveal-text group flex items-center gap-4 mt-12 w-fit text-sm uppercase tracking-widest hover:text-primary transition-colors"
              data-cursor-hover="true"
            >
              <span>Our Story</span>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary transition-colors">
                <ArrowRight size={16} />
              </div>
            </Link>
          </div>
          <div className="md:col-span-6 md:col-start-7 text-white/50 font-light leading-relaxed text-lg">
            <p className="reveal-text mb-6">
              Unlike traditional installers, Getway approaches solar as an architectural enhancement rather than a utilitarian bolt-on. Our engineering teams work meticulously to preserve the aesthetic integrity of your property while maximizing energy yield.
            </p>
            <p className="reveal-text">
              Embrace energy independence with our state-of-the-art cinematic approach to renewable integration. From sprawling commercial roofs to bespoke residential arrays.
            </p>
          </div>
        </div>
      </section>

      {/* LARGE IMAGE GALLERY */}
      <section ref={galleryRef} className="py-24 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12">
          <div className="relative h-[60vh] md:h-[90vh] overflow-hidden group">
            {/* modern architectural house with solar */}
            <img 
              src="https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=2070&auto=format&fit=crop" 
              alt="Residential"
              className="w-full h-full object-cover parallax-bg scale-110 transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700" />
            <div className="absolute bottom-10 left-10 z-20">
              <h2 className="text-4xl font-display mb-4">Residential</h2>
              <Link href="/services" className="text-sm uppercase tracking-widest border-b border-white/30 pb-1 hover:border-primary hover:text-primary transition-colors" data-cursor-hover="true">View Service</Link>
            </div>
          </div>
          <div className="relative h-[60vh] md:h-[90vh] md:mt-24 overflow-hidden group">
            {/* commercial solar installation wide */}
            <img 
              src="https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?q=80&w=2070&auto=format&fit=crop" 
              alt="Commercial"
              className="w-full h-full object-cover parallax-bg scale-110 transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700" />
            <div className="absolute bottom-10 left-10 z-20">
              <h2 className="text-4xl font-display mb-4">Commercial</h2>
              <Link href="/services" className="text-sm uppercase tracking-widest border-b border-white/30 pb-1 hover:border-primary hover:text-primary transition-colors" data-cursor-hover="true">View Service</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-40 text-center flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
           {/* abstract solar pattern */}
           <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <h2 className="text-5xl md:text-8xl font-display mb-12">Ready to <span className="italic text-primary">Shift?</span></h2>
          <Link 
            href="/contact"
            className="px-10 py-5 bg-white text-black text-sm uppercase tracking-widest font-semibold hover:bg-primary transition-colors"
            data-cursor-hover="true"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
