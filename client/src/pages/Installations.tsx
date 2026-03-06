import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageTransition from "@/components/PageTransition";
import CinematicText from "@/components/CinematicText";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    title: "The Glass House",
    location: "Malibu, CA",
    kw: "12.4 kW",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Tech Campus",
    location: "Austin, TX",
    kw: "245 kW",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Desert Retreat",
    location: "Scottsdale, AZ",
    kw: "18.2 kW + Storage",
    image: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Alpine Logistics",
    location: "Denver, CO",
    kw: "500 kW",
    image: "https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Installations() {
  useEffect(() => {
    const images = gsap.utils.toArray<HTMLElement>('.img-parallax');
    images.forEach(img => {
      gsap.to(img, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: img.parentElement,
          scrub: true,
        }
      });
    });
  }, []);

  return (
    <PageTransition>
      <div className="pt-40 px-6 md:px-12 bg-background">
        <div className="max-w-5xl mx-auto text-center mb-32">
          <CinematicText text="Selected Works" className="text-5xl md:text-8xl mb-8" />
          <p className="text-white/50 text-xl font-light">
            A curated exhibition of our most demanding structural integrations.
          </p>
        </div>

        <div className="flex flex-col gap-32 pb-40">
          {PROJECTS.map((project, i) => (
            <div 
              key={i} 
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="w-full md:w-3/5 h-[60vh] overflow-hidden relative group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover scale-110 img-parallax transition-transform duration-1000 group-hover:scale-100"
                />
              </div>
              <div className="w-full md:w-2/5 flex flex-col justify-center px-8">
                <span className="text-primary text-sm tracking-widest uppercase mb-4 block">0{i + 1} / {project.location}</span>
                <h3 className="text-5xl font-display mb-6">{project.title}</h3>
                <div className="h-[1px] w-full bg-white/10 mb-6" />
                <div className="flex justify-between items-center text-white/50">
                  <span>System Size</span>
                  <span className="text-white text-xl">{project.kw}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
