import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageTransition from "@/components/PageTransition";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useEffect(() => {
    const images = gsap.utils.toArray<HTMLElement>('.parallax');
    images.forEach(img => {
      gsap.to(img, {
        yPercent: 20,
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
      <div className="bg-background text-foreground">
        {/* Header Hero */}
        <section className="h-[80vh] relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            {/* abstract desert solar */}
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img 
              src="https://pixabay.com/get/gb4309e9e75385645930446cd42c4fd229336bc19ab1a18a0a4b8990bf93361a9ca008ae7b3303ac2ddeef7aefa07aa23fc1cf0d7dd1e46074d1bd500320ef9e6_1280.jpg" 
              alt="About Getway" 
              className="w-full h-full object-cover parallax scale-110"
            />
          </div>
          <h1 className="relative z-20 text-6xl md:text-[8vw] font-display text-center leading-none">
            Beyond <br/><span className="italic text-primary">Utility</span>
          </h1>
        </section>

        <section className="py-32 px-6 md:px-12 max-w-5xl mx-auto text-center">
          <p className="text-2xl md:text-4xl font-display font-light leading-relaxed mb-12">
            Getway was founded on a singular premise: that the transition to renewable energy should not require a compromise in architectural beauty.
          </p>
          <p className="text-white/50 text-lg leading-loose max-w-3xl mx-auto">
            We are a collective of engineers, designers, and sustainability advocates. We reject the bolt-on mentality of traditional solar installers. Instead, we approach every project as an integration—a seamless melding of high-efficiency technology and structural aesthetics.
          </p>
        </section>

        <section className="py-24 grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
          <div className="h-[70vh] relative overflow-hidden">
            {/* team meeting engineering */}
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover parallax scale-110" />
          </div>
          <div className="h-[70vh] relative overflow-hidden">
            {/* architectural detail */}
            <img src="https://pixabay.com/get/ge5e4894248350babda6c7a51d4835719662b89121d8b2ad10a28f19dc5b33d2327b6918819825f26acbc59703341db232eb0a346429e549f6c8fd6f19e6f9e75_1280.jpg" className="w-full h-full object-cover parallax scale-110" />
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
