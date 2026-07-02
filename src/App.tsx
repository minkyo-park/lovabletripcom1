import type { RouteRecord } from "vite-react-ssg";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ScrollToTop } from "./components/ScrollToTop";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import FlightDiscount from "./pages/FlightDiscount";
import HotelDiscount from "./pages/HotelDiscount";
import Tips from "./pages/Tips";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Sonner />
        <ScrollToTop />
        <Layout />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Index /> },
      { path: "flight-discount", element: <FlightDiscount /> },
      { path: "hotel-discount", element: <HotelDiscount /> },
      { path: "tips", element: <Tips /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default routes;
