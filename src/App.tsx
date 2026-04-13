
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Expertises
import IADataPage from "./pages/expertises/IADataPage";
import TransformationPage from "./pages/expertises/TransformationPage";
import CyberResiliencePage from "./pages/expertises/CyberResiliencePage";
import DeploiementAdoptionPage from "./pages/expertises/DeploiementAdoptionPage";

// Entités spécialisées
import ResilliaPage from "./pages/entities/ResilliaPage";
import TechPage from "./pages/entities/TechPage";
import AcademyPage from "./pages/entities/AcademyPage";

// Pages transverses
import ApprochePage from "./pages/ApprochePage";
import CollectifPage from "./pages/CollectifPage";
import RessourcesPage from "./pages/RessourcesPage";
import NousRejoindrePage from "./pages/NousRejoindrePage";
import ContactPage from "./pages/ContactPage";

// Use cases & articles
import UseCasesPage from "./pages/UseCasesPage";
import UseCaseDetailPage from "./pages/UseCaseDetailPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";

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
            
            {/* Expertises */}
            <Route path="/ia-data" element={<IADataPage />} />
            <Route path="/transformation" element={<TransformationPage />} />
            <Route path="/cyber-resilience" element={<CyberResiliencePage />} />
            <Route path="/deploiement-adoption" element={<DeploiementAdoptionPage />} />
            
            {/* Entités spécialisées */}
            <Route path="/resillia" element={<ResilliaPage />} />
            <Route path="/tech" element={<TechPage />} />
            <Route path="/academy" element={<AcademyPage />} />
            
            {/* Pages transverses */}
            <Route path="/approche" element={<ApprochePage />} />
            <Route path="/collectif" element={<CollectifPage />} />
            <Route path="/ressources" element={<RessourcesPage />} />
            <Route path="/ressources/:slug" element={<ArticleDetailPage />} />
            <Route path="/nous-rejoindre" element={<NousRejoindrePage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Use cases */}
            <Route path="/use-cases" element={<UseCasesPage />} />
            <Route path="/use-cases/:slug" element={<UseCaseDetailPage />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
