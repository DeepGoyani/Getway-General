// Main Application Component
// Getway Web Application with animated transitions

import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import SmoothScroll from "@/components/SmoothScroll";
import NotFound from "@/pages/not-found";

// Pages
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Installations from "@/pages/Installations";
import Calculator from "@/pages/Calculator";
import Subsidy from "@/pages/Subsidy";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <main key={location} className="flex-grow w-full">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/installations" component={Installations} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/subsidy" component={Subsidy} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SmoothScroll>
          <Cursor />
          <div className="flex flex-col min-h-screen selection:bg-primary selection:text-black">
            <Navbar />
            <Router />
            <Footer />
          </div>
          <Toaster />
        </SmoothScroll>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
