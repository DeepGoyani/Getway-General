import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageTransition from "@/components/PageTransition";
import CinematicText from "@/components/CinematicText";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    id: "01",
    title: "Residential Solar",
    desc: "Bespoke architectural solar integrations for modern homes. We maximize roof space while maintaining visual elegance.",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Commercial Solar",
    desc: "Industrial-scale energy harvesting. Lower overheads and meet ESG goals with our high-yield commercial installations.",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Industrial Solar",
    desc: "High-capacity solar systems for manufacturing units and large industrial plants, ensuring reliable power and massive cost savings.",
    image: "https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Horizontal Film Strip scroll
    const sections = gsap.utils.toArray(".film-panel");
    
    const ctx = gsap.context(() => {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + scrollRef.current?.offsetWidth
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <PageTransition>
      <div className="pt-40 px-6 md:px-12 bg-background relative z-10">
        <h1 className="text-7xl md:text-[10vw] font-display leading-none mix-blend-difference mb-10">
          <span className="italic text-primary">S</span>ervices
        </h1>
        <p className="max-w-xl text-white/50 text-lg font-light mb-24">
          A comprehensive suite of energy solutions designed with a meticulous attention to detail. Scroll to explore our disciplines.
        </p>
      </div>

      {/* Film Strip Section */}
      <div ref={containerRef} className="h-screen w-full flex items-center overflow-hidden bg-background relative z-20">
        <div ref={scrollRef} className="flex h-[70vh] items-center">
          {SERVICES.map((srv, index) => (
            <div 
              key={srv.id} 
              className="film-panel w-screen h-full flex-shrink-0 flex items-center justify-center px-6 md:px-24"
            >
              <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 relative h-[40vh] md:h-[60vh] w-full overflow-hidden">
                  <img 
                    src={srv.image} 
                    alt={srv.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="order-1 md:order-2">
                  <span className="text-primary text-sm font-bold tracking-widest">{srv.id}</span>
                  <h2 className="text-5xl md:text-7xl font-display my-6">{srv.title}</h2>
                  <p className="text-white/60 text-lg leading-relaxed md:max-w-md">
                    {srv.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
