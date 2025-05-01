
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import BootLoader from "./components/BootLoader";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ChatPage from "./pages/ChatPage";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";
import { preloadSounds, setVolume } from "./utils/sounds";

const queryClient = new QueryClient();

// Page transition component
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  useEffect(() => {
    // Preload sounds on initial load
    preloadSounds();
    // Set default volume
    setVolume(0.5);
    
    // Add page transition class
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.classList.add('page-transition');
    }
  }, [location]);
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BootLoader />} />
          <Route
            path="/*"
            element={
              <PageTransition>
                <Routes>
                  <Route path="/landing" element={<LandingPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/chat" element={<ChatPage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </PageTransition>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
