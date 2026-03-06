import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type LeadInput } from "@shared/routes";
import { useCreateLead } from "@/hooks/use-leads";
import PageTransition from "@/components/PageTransition";
import CinematicText from "@/components/CinematicText";

export default function Contact() {
  const { mutate: createLead, isPending } = useCreateLead();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<LeadInput>({
    resolver: zodResolver(api.leads.create.input),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      electricityBill: "",
      message: ""
    }
  });

  const onSubmit = (data: LeadInput) => {
    createLead(data, {
      onSuccess: () => {
        setSubmitted(true);
        form.reset();
      }
    });
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-40 pb-24 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
        
        {/* Left Column - Copy */}
        <div className="flex flex-col justify-between">
          <div>
            <CinematicText text="Initiate" className="text-6xl md:text-8xl mb-2 block" />
            <h2 className="text-4xl md:text-6xl font-display text-white/50 mb-12">The Dialogue</h2>
            <p className="text-xl font-light leading-relaxed max-w-md">
              Every great architectural integration begins with a conversation. Share your project details, and our engineering team will evaluate the feasibility and impact of a Getway system on your property.
            </p>
          </div>
          
          <div className="mt-24 space-y-8">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-white/30 mb-2">Headquarters</h4>
              <p className="text-lg">100 Solar Avenue, Suite 400<br/>Los Angeles, CA 90210</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest text-white/30 mb-2">Direct Line</h4>
              <p className="text-lg text-primary">1-800-SOLAR-NOW</p>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="bg-white/5 border border-white/10 p-8 md:p-12 relative overflow-hidden">
          {submitted ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-background/95 backdrop-blur z-20">
              <h3 className="text-4xl font-display mb-4 italic text-primary">Received.</h3>
              <p className="text-white/60">Our integration team will review your details and contact you shortly.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 border-b border-white hover:text-primary hover:border-primary transition-colors uppercase text-sm tracking-widest pb-1"
                data-cursor-hover="true"
              >
                Submit Another
              </button>
            </div>
          ) : null}

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/50">Full Name</label>
                <input 
                  {...form.register("name")}
                  className="w-full bg-transparent border-b border-white/20 pb-3 outline-none focus:border-primary transition-colors text-lg"
                  placeholder="John Doe"
                  data-cursor-hover="true"
                />
                {form.formState.errors.name && <span className="text-destructive text-xs">{form.formState.errors.name.message}</span>}
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/50">Email</label>
                <input 
                  {...form.register("email")}
                  className="w-full bg-transparent border-b border-white/20 pb-3 outline-none focus:border-primary transition-colors text-lg"
                  placeholder="john@example.com"
                  data-cursor-hover="true"
                />
                {form.formState.errors.email && <span className="text-destructive text-xs">{form.formState.errors.email.message}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/50">Phone</label>
                <input 
                  {...form.register("phone")}
                  className="w-full bg-transparent border-b border-white/20 pb-3 outline-none focus:border-primary transition-colors text-lg"
                  placeholder="(555) 123-4567"
                  data-cursor-hover="true"
                />
                {form.formState.errors.phone && <span className="text-destructive text-xs">{form.formState.errors.phone.message}</span>}
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/50">Location / ZIP</label>
                <input 
                  {...form.register("location")}
                  className="w-full bg-transparent border-b border-white/20 pb-3 outline-none focus:border-primary transition-colors text-lg"
                  placeholder="Beverly Hills, 90210"
                  data-cursor-hover="true"
                />
                {form.formState.errors.location && <span className="text-destructive text-xs">{form.formState.errors.location.message}</span>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/50">Est. Monthly Bill</label>
              <select 
                {...form.register("electricityBill")}
                className="w-full bg-transparent border-b border-white/20 pb-3 outline-none focus:border-primary transition-colors text-lg appearance-none text-white [&>option]:text-black"
                data-cursor-hover="true"
              >
                <option value="">Select Range</option>
                <option value="$50 - $100">$50 - $100</option>
                <option value="$101 - $200">$101 - $200</option>
                <option value="$201 - $400">$201 - $400</option>
                <option value="$400+">$400+</option>
              </select>
              {form.formState.errors.electricityBill && <span className="text-destructive text-xs">{form.formState.errors.electricityBill.message}</span>}
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/50">Project Details</label>
              <textarea 
                {...form.register("message")}
                rows={4}
                className="w-full bg-transparent border-b border-white/20 pb-3 outline-none focus:border-primary transition-colors text-lg resize-none"
                placeholder="Tell us about your property..."
                data-cursor-hover="true"
              />
              {form.formState.errors.message && <span className="text-destructive text-xs">{form.formState.errors.message.message}</span>}
            </div>

            <button 
              type="submit"
              disabled={isPending}
              className="w-full py-5 bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-primary transition-colors disabled:opacity-50 mt-8"
              data-cursor-hover="true"
            >
              {isPending ? "Submitting..." : "Send Request"}
            </button>
          </form>
        </div>
      </div>
    </PageTransition>
  );
}
