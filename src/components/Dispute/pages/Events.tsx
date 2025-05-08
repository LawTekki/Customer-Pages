
import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";

const Events = () => {
  return (
    <div className="bg-white w-full overflow-hidden">
      <Header />
      <div className="flex w-full items-stretch gap-[31px]">
        <Sidebar />
        <main className="flex flex-col flex-grow px-6 py-8 max-w-[1200px]">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-[32px] font-semibold text-[#1A011E]">
                Events
              </h1>
              <p className="text-sm text-gray-500 mt-2 max-w-[650px]">
                This is the list of all the jobs you have posted to the
                community for freelancers, institutions, organizations and
                thother to propose for
              </p>
            </div>
            <Button className="bg-[#6B047C] hover:bg-[#5A036B] text-white px-4">
              Explore events
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Events;
