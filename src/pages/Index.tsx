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

const sampleLawyers: Lawyer[] = [
  {
    id: "1",
    name: "Benjamin Kings",
    country: "UK",
    specialties: ["Business Law", "Creative Law", "Human Rights"],
    hourlyRate: 20,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/9d5db8df77b90ed013f094ceaad43fd2805414e8?placeholderIfAbsent=true",
    availability: {
      status: "Available now",
      isAvailable: true,
    },
  },
  {
    id: "2",
    name: "Benjamin Kings",
    country: "UK",
    specialties: ["Business Law", "Creative Law", "Human Rights"],
    hourlyRate: 20,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/a8cd3f3459ea1154e300b27284e080f043c6965e?placeholderIfAbsent=true",
    availability: {
      status: "Available now",
      isAvailable: true,
    },
  },
  {
    id: "3",
    name: "Benjamin Kings",
    country: "UK",
    specialties: ["Business Law", "Creative Law", "Human Rights"],
    hourlyRate: 20,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/1e5ee495cdea99099f26cfbbeb3c45a1d0433f47?placeholderIfAbsent=true",
    availability: {
      status: "Available now",
      isAvailable: true,
    },
  },
  {
    id: "4",
    name: "Benjamin Kings",
    country: "UK",
    specialties: ["Business Law", "Creative Law", "Human Rights"],
    hourlyRate: 20,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/9d5db8df77b90ed013f094ceaad43fd2805414e8?placeholderIfAbsent=true",
    availability: {
      status: "Available now",
      isAvailable: true,
    },
  },
  {
    id: "5",
    name: "Benjamin Kings",
    country: "UK",
    specialties: ["Business Law", "Creative Law", "Human Rights"],
    hourlyRate: 20,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/9d5db8df77b90ed013f094ceaad43fd2805414e8?placeholderIfAbsent=true",
    availability: {
      status: "Available now",
      isAvailable: true,
    },
  },
  {
    id: "6",
    name: "Benjamin Kings",
    country: "UK",
    specialties: ["Business Law", "Creative Law", "Human Rights"],
    hourlyRate: 20,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/9d5db8df77b90ed013f094ceaad43fd2805414e8?placeholderIfAbsent=true",
    availability: {
      status: "Available now",
      isAvailable: true,
    },
  },
  {
    id: "7",
    name: "Benjamin Kings",
    country: "UK",
    specialties: ["Business Law", "Creative Law", "Human Rights"],
    hourlyRate: 20,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/9d5db8df77b90ed013f094ceaad43fd2805414e8?placeholderIfAbsent=true",
    availability: {
      status: "Available now",
      isAvailable: true,
    },
  },
  {
    id: "8",
    name: "Benjamin Kings",
    country: "UK",
    specialties: ["Business Law", "Creative Law", "Human Rights"],
    hourlyRate: 20,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/9d5db8df77b90ed013f094ceaad43fd2805414e8?placeholderIfAbsent=true",
    availability: {
      status: "Available now",
      isAvailable: true,
    },
  },
  {
    id: "9",
    name: "Benjamin Kings",
    country: "UK",
    specialties: ["Business Law", "Creative Law", "Human Rights"],
    hourlyRate: 20,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/9d5db8df77b90ed013f094ceaad43fd2805414e8?placeholderIfAbsent=true",
    availability: {
      status: "Available now",
      isAvailable: true,
    },
  },
];

const Index = () => {
  const [currentView, setCurrentView] = useState("products");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const handleViewChange = (view: string) => {
    setCurrentView(view);
  };

  const handleViewModeChange = (mode: "grid" | "list") => {
    setViewMode(mode);
  };

  const renderFilters = () => {
    switch (currentView) {
      case "templates":
        return <ProductFilters onViewChange={handleViewChange} />;
      case "software":
        return <SoftwareFilters />;
      case "courses":
        return <CourseFilters />;
      case "events":
        return <EventFilters />;
      case "talent":
        return <LawyerFilters lawyers={sampleLawyers} onFilterChange={(filters) => console.log('Filter changed:', filters)} />;
      default:
        return <ProductFilters onViewChange={handleViewChange} />;
    }
  };

  const renderContent = () => {
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
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex w-full">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="max-w-[1417px] mx-auto">
            <SearchBanner />
            <div className="flex gap-6">
              <aside className="w-[280px] shrink-0">
                {renderFilters()}
              </aside>
              <section className="flex-1">
                <div className="flex items-center justify-between gap-4 whitespace-nowrap">
                  <ProductTabs onTalentClick={() => handleViewChange("talent")} onViewChange={handleViewChange} />
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
