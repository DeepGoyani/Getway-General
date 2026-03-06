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
              Navigating the landscape of governmental solar incentives requires precision. Our dedicated compliance team ensures you capture every available tax credit, rebate, and grant to minimize your capital expenditure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 my-16">
              <div>
                <h3 className="text-primary font-display text-3xl mb-4">Federal ITC</h3>
                <p>
                  The Federal Investment Tax Credit (ITC) allows you to deduct a significant percentage of the cost of installing a solar energy system from your federal taxes. There is no cap on its value.
                </p>
              </div>
              <div>
                <h3 className="text-primary font-display text-3xl mb-4">State Level Incentives</h3>
                <p>
                  Beyond federal programs, numerous states offer robust incentive structures, including Solar Renewable Energy Certificates (SRECs) and property tax exemptions for the added value of the system.
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
