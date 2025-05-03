import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contacts from "@/components/Contacts/pages/Index";
import Events from "@/components/Event/pages/Index";
import Home from "@/components/Home/pages/Index";
import Wallet from "@/components/Wallet/pages/Index";
import WorkPackage from "@/components/Work-Package/pages/Index";
import Dispute from "@/components/Dispute/pages/Index";
import HelpAndSupport from "@/components/Help-and-Support/pages/Index";
import Settings from "@/components/Setting/pages/Index";
import Orders from "@/components/Orders/pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/events" element={<Events />} />
          <Route path="/home" element={<Home />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/work-package" element={<WorkPackage />} />
          <Route path="/dispute" element={<Dispute />} />
          <Route path="/help-and-support" element={<HelpAndSupport />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/setting" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
