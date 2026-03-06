import PageTransition from "@/components/PageTransition";
import CinematicText from "@/components/CinematicText";

export default function Subsidy() {
  return (
    <PageTransition>
      <div className="pt-40 px-6 md:px-12 bg-background min-h-screen">
        <div className="max-w-4xl mx-auto">
          <CinematicText text="Subsidies" className="text-6xl md:text-8xl mb-12 block border-b border-white/10 pb-8" />
          
          <article className="prose prose-invert prose-lg md:prose-xl max-w-none font-light text-white/70">
            <p className="text-2xl text-white font-display mb-12 leading-relaxed">
              Navigating the landscape of governmental solar incentives requires precision. Our dedicated compliance team ensures you capture every available tax credit, rebate, and grant. Currently, government subsidies are primarily available for Residential and Industrial installations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 my-16">
              <div>
                <h3 className="text-primary font-display text-3xl mb-4">Residential Subsidy</h3>
                <p>
                  Government programs like PM Surya Ghar provide direct financial assistance for homeowners. We handle the documentation to ensure you get the maximum benefit for your rooftop system.
                </p>
              </div>
              <div>
                <h3 className="text-primary font-display text-3xl mb-4">Industrial Incentives</h3>
                <p>
                  Industrial units can leverage accelerated depreciation and state-level grants. These incentives significantly reduce the payback period for large-scale solar deployments.
                </p>
              </div>
            </div>

            <div className="p-8 border border-white/10 bg-white/5 my-16 cinematic-shadow">
              <h4 className="uppercase tracking-widest text-sm text-white mb-4">Our Commitment</h4>
              <p className="m-0">
                Getway Solar handles the entirety of the incentive application process. From initial feasibility studies to post-installation tax documentation, we ensure your financial return is realized without bureaucratic friction.
              </p>
            </div>
          </article>
        </div>
      </div>
    </PageTransition>
  );
}
