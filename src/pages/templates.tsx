import React from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { SearchBanner } from "@/components/products/SearchBanner";
import { ProductFilters } from "@/components/products/ProductFilters";
import { TemplateGrid } from "@/components/templates/TemplateGrid";

const TemplatesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex w-full">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="max-w-[1417px] mx-auto">
            <SearchBanner />
            <div className="mt-8">
              <div className="flex gap-6">
                <aside className="w-[280px] shrink-0">
                  <ProductFilters />
                </aside>
                <section className="flex-1">
                  <TemplateGrid />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TemplatesPage; 