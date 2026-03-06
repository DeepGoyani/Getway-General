import { useState } from "react";
import { motion, animate } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Calculator() {
  const [bill, setBill] = useState<number>(150);
  const [savings, setSavings] = useState<number>(0);
  const [trees, setTrees] = useState<number>(0);

  const calculate = () => {
    // Dummy cinematic calculation
    const calcSavings = bill * 12 * 25 * 0.85; // 25 years at 85% offset
    const calcTrees = Math.floor(calcSavings / 100);

    const savingsNode = document.getElementById('savings-val');
    const treesNode = document.getElementById('trees-val');

    if (savingsNode) {
      animate(0, calcSavings, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (val) => {
          savingsNode.textContent = `$${Math.round(val).toLocaleString()}`;
        }
      });
    }

    if (treesNode) {
      animate(0, calcTrees, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (val) => {
          treesNode.textContent = Math.round(val).toLocaleString();
        }
      });
    }
    
    setSavings(calcSavings);
    setTrees(calcTrees);
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-40 pb-24 px-6 md:px-12 flex flex-col justify-center items-center relative overflow-hidden">
        {/* Abstract cinematic background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale opacity-30"
          />
        </div>

        <div className="relative z-10 w-full max-w-4xl glass-panel p-8 md:p-16 border border-white/10 shadow-2xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display mb-4">Value Projection</h1>
            <p className="text-white/50">Estimate your 25-year cinematic return on investment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col gap-8">
              <div>
                <label className="block text-sm uppercase tracking-widest text-white/50 mb-4">
                  Average Monthly Bill: ${bill}
                </label>
                <input 
                  type="range" 
                  min="50" max="1000" step="10"
                  value={bill}
                  onChange={(e) => setBill(Number(e.target.value))}
                  className="w-full accent-primary"
                  data-cursor-hover="true"
                />
              </div>

              <button 
                onClick={calculate}
                className="w-full py-4 bg-white text-black font-semibold uppercase tracking-widest hover:bg-primary transition-colors mt-8"
                data-cursor-hover="true"
              >
                Calculate Impact
              </button>
            </div>

            <div className="flex flex-col justify-center gap-10 border-l border-white/10 pl-0 md:pl-16">
              <div>
                <span className="text-xs uppercase tracking-widest text-white/40 block mb-2">25-Year Savings</span>
                <span id="savings-val" className="text-5xl md:text-6xl font-display text-primary">$0</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-white/40 block mb-2">Equivalent Trees Planted</span>
                <span id="trees-val" className="text-5xl md:text-6xl font-display">0</span>
              </div>
            </div>
          </div>

          {savings > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-16 pt-8 border-t border-white/10 flex justify-center"
            >
              <Link href="/contact" className="flex items-center gap-4 hover:text-primary transition-colors uppercase tracking-widest text-sm" data-cursor-hover="true">
                <span>Claim Your Savings</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
