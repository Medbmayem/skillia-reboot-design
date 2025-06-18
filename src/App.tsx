
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUsPage from "./pages/AboutUsPage";
import FormationsPage from "./pages/FormationsPage";
import BusinessTransformationPage from "./pages/services/BusinessTransformationPage";
import SecureEcosystemsPage from "./pages/services/SecureEcosystemsPage";
import TechnologyFoundationsPage from "./pages/services/TechnologyFoundationsPage";
import PlaquettePage from "./pages/PlaquettePage";
import { LanguageProvider } from "./contexts/LanguageContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/formations" element={<FormationsPage />} />
            <Route path="/plaquette" element={<PlaquettePage />} />
            <Route path="/services/business-transformation" element={<BusinessTransformationPage />} />
            <Route path="/services/secure-ecosystems" element={<SecureEcosystemsPage />} />
            <Route path="/services/technology-foundations" element={<TechnologyFoundationsPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
