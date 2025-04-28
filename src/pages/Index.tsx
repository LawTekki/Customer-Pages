import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { SearchBanner } from "@/components/products/SearchBanner";
import { ProductTabs } from "@/components/products/ProductTabs";
import { ProductControls } from "@/components/products/ProductControls";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ProductFilters } from "@/components/products/ProductFilters";
import { TemplateGrid } from "@/components/templates/TemplateGrid";
import { SoftwareGrid } from "@/components/software/SoftwareGrid";
import { CourseGrid } from "@/components/courses/CourseGrid";
import { SoftwareFilters } from "@/components/software/SoftwareFilters";
import { CourseFilters } from "@/components/courses/CourseFilters";
import { EventFilters } from "@/components/events/EventFilters";
import { EventGrid } from "@/components/events/EventGrid";
import { LawyerGrid } from "@/components/lawyer/LawyerGrid";
import { LawyerFilters } from "@/components/lawyer/LawyerFilters";
import type { Lawyer } from "@/types/lawyer";

// Sample lawyers data
const sampleLawyers: Lawyer[] = [
  {
    id: "1",
    name: "Benjamin Kings",
    country: "UK",
    specialties: ["Business Law", "Creative Law", "Human Rights"],
    hourlyRate: 20,
    imageUrl: "https://placehold.co/400x300?text=Image1",
    availability: { status: "Available now", isAvailable: true },
  },
  {
    id: "2",
    name: "Sarah Johnson",
    country: "US",
    specialties: ["Corporate Law", "Intellectual Property", "Contract Law"],
    hourlyRate: 25,
    imageUrl: "https://placehold.co/400x300?text=Image2",
    availability: { status: "Available now", isAvailable: true },
  },
  {
    id: "3",
    name: "Michael Chen",
    country: "CA",
    specialties: ["Immigration Law", "Family Law", "Civil Rights"],
    hourlyRate: 22,
    imageUrl: "https://placehold.co/400x300?text=Image3",
    availability: { status: "Available in 1 hour", isAvailable: false },
  },
  {
    id: "4",
    name: "Emma Thompson",
    country: "AU",
    specialties: ["Environmental Law", "Property Law", "Business Law"],
    hourlyRate: 23,
    imageUrl: "https://placehold.co/400x300?text=Image1",
    availability: { status: "Available now", isAvailable: true },
  },
  {
    id: "5",
    name: "David Rodriguez",
    country: "ES",
    specialties: ["Criminal Law", "International Law", "Human Rights"],
    hourlyRate: 21,
    imageUrl: "https://placehold.co/400x300?text=Image2",
    availability: { status: "Available now", isAvailable: true },
  },
  {
    id: "6",
    name: "Sophie Martin",
    country: "FR",
    specialties: ["Tax Law", "Corporate Law", "Banking Law"],
    hourlyRate: 24,
    imageUrl: "https://placehold.co/400x300?text=Image3",
    availability: { status: "Available in 2 hours", isAvailable: false },
  },
  {
    id: "7",
    name: "James Wilson",
    country: "UK",
    specialties: ["Employment Law", "Civil Litigation", "Contract Law"],
    hourlyRate: 22,
    imageUrl: "https://placehold.co/400x300?text=Image1",
    availability: { status: "Available now", isAvailable: true },
  },
  {
    id: "8",
    name: "Anna Kowalski",
    country: "PL",
    specialties: ["Family Law", "Immigration Law", "Human Rights"],
    hourlyRate: 20,
    imageUrl: "https://placehold.co/400x300?text=Image2",
    availability: { status: "Available now", isAvailable: true },
  },
  {
    id: "9",
    name: "Oliver Schmidt",
    country: "DE",
    specialties: ["Business Law", "Intellectual Property", "Technology Law"],
    hourlyRate: 25,
    imageUrl: "https://placehold.co/400x300?text=Image3",
    availability: { status: "Available now", isAvailable: true },
  },
];

const Index = () => {
  // Force the default view to be "products" (i.e. Books)
  const [currentView, setCurrentView] = useState("products");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // When a product button is clicked, we update the view.
  // When Books is selected, the caller should pass "products"
  // (you may adjust the ProductTabs component to ensure this).
  const handleViewChange = (view: string) => {
    setCurrentView(view);
  };

  const handleViewModeChange = (mode: "grid" | "list") => {
    setViewMode(mode);
  };

  // Render filters based on the active view.
  // Here we make sure that if the view is "products" (or "books" if needed)
  // it returns the ProductFilters component.
  const renderFilters = () => {
    if (currentView === "products" || currentView === "books") {
      return <ProductFilters onViewChange={handleViewChange} />;
    }
    switch (currentView) {
      case "templates":
        return <ProductFilters onViewChange={handleViewChange} />;
      case "software":
        return <SoftwareFilters onViewChange={handleViewChange} />;
      case "courses":
        return <CourseFilters onViewChange={handleViewChange} />;
      case "events":
        return <EventFilters onViewChange={handleViewChange} />;
      case "talent":
        return (
          <LawyerFilters
            lawyers={sampleLawyers}
            onFilterChange={(filters) =>
              console.log("Filter changed:", filters)
            }
          />
        );
      default:
        return <ProductFilters onViewChange={handleViewChange} />;
    }
  };

  // Render the content grid based on the active view.
  const renderContent = () => {
    if (currentView === "products" || currentView === "books") {
      return <ProductGrid viewMode={viewMode} />;
    }
    switch (currentView) {
      case "templates":
        return <TemplateGrid viewMode={viewMode} />;
      case "software":
        return <SoftwareGrid viewMode={viewMode} />;
      case "courses":
        return <CourseGrid viewMode={viewMode} />;
      case "events":
        return <EventGrid viewMode={viewMode} />;
      case "talent":
        return <LawyerGrid lawyers={sampleLawyers} viewMode={viewMode} />;
      default:
        return <ProductGrid viewMode={viewMode} />;
    }
  };

  return (
    <div className="min-h-screen bg-white w-full max-w-full overflow-x-hidden">
      <Header />
      <div className="flex w-full overflow-x-hidden">
        <Sidebar />
        <main className="flex-1 p-6 pb-14 sm:pb-16 w-full max-w-full overflow-x-auto">
          <div className="max-w-[1417px] mx-auto">
            <SearchBanner />
            <div className="flex gap-6">
              <aside className="hidden md:block w-[280px] shrink-0">{renderFilters()}</aside>
              <section className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-4 whitespace-nowrap">
                  {/* Ensure ProductTabs calls handleViewChange("products") when Books is clicked */}
                  <ProductTabs
                    onTalentClick={() => handleViewChange("talent")}
                    onViewChange={handleViewChange}
                  />
                  <ProductControls onViewModeChange={handleViewModeChange} />
                </div>
                {renderContent()}
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
