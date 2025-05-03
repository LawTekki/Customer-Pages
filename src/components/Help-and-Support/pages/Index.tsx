import React from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { FAQList } from "@/components/Help-and-Support/components/faq/FAQList";
import { ContactSection } from "@/components/Help-and-Support/components/faq/ContactSection";

export default function Index() {
  const [selectedButton, setSelectedButton] = React.useState('faqs');

  return (
    <div className="bg-white overflow-hidden">
      <Header />
      <div className="w-full max-w-[1416px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <Sidebar />
          <main className="w-[81%] ml-5 max-md:w-full max-md:ml-0 max-md:px-4">
            <div className="flex flex-col font-medium mt-10 max-md:max-w-full">
              <div className="flex gap-16 max-md:flex-col max-md:gap-4">
                <div className="flex flex-col gap-2 w-[180px] max-md:w-full max-md:flex-row max-md:justify-center max-md:gap-4 max-md:mb-2">
                  <button 
                    onClick={() => setSelectedButton('faqs')}
                    className={`relative text-base font-medium px-4 py-2 hover:text-[#6B047C] transition-colors rounded-lg max-md:text-sm max-md:px-4 max-md:py-1.5 ${selectedButton === 'faqs' ? 'text-[#6B047C] bg-[#F9F5FA]' : 'text-[#808080]'}`}
                  >
                    {selectedButton === 'faqs' && <span className="absolute left-0 top-0 h-full w-1 bg-[#6B047C] rounded-r max-md:hidden"></span>}
                    Faqs
                  </button>
                  <button 
                    onClick={() => setSelectedButton('contact')}
                    className={`relative text-base font-medium px-4 py-2 hover:text-[#6B047C] transition-colors rounded-lg max-md:text-sm max-md:px-4 max-md:py-1.5 ${selectedButton === 'contact' ? 'text-[#6B047C] bg-[#F9F5FA]' : 'text-[#808080]'}`}
                  >
                    {selectedButton === 'contact' && <span className="absolute left-0 top-0 h-full w-1 bg-[#6B047C] rounded-r max-md:hidden"></span>}
                    Contact us
                  </button>
                </div>
                <div className="leading-[1.3] flex-1 max-md:max-w-full max-md:mt-2">
                  <h1 className="text-[#1A011E] text-2xl tracking-[-0.48px] max-md:text-lg max-md:leading-snug">
                    Frequently asked questions
                  </h1>
                  <p className="text-[#808080] text-sm tracking-[-0.28px] mt-2 max-md:text-xs max-md:px-2">
                    This is the list of all the jobs you have posted to the
                    community for freelancers, institutions, organizations and
                    thother to propose for
                  </p>
                </div>
              </div>
              <FAQList />
              <ContactSection className="max-md:px-0" />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
