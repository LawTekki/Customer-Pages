import React from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { ContactsTable } from "@/components/Contacts/components/contacts/ContactsTable";
import "../animations.css";

const Contacts = () => {
  return (
    <div className="bg-white w-full overflow-hidden max-md:max-w-full">
      <Header />
      <div className="flex w-full max-w-[1350px] items-stretch gap-[31px] flex-wrap max-md:max-w-full">
        <Sidebar />
        <main className="flex flex-col items-stretch grow shrink-0 basis-0 max-w-[calc(100%-150px)] my-auto max-md:max-w-full">
          <div className="flex justify-between mt-12">
            <div className="min-w-60 w-[583px] max-w-full max-md:w-[360px] max-md:ml-[12px] fade-in">
              <h1 className="text-[#1A011E] text-[32px] font-semibold leading-[1.3] tracking-[-0.64px] max-md:text-2xl max-md:leading-[1.3]">
                Contacts
              </h1>
              <p className="text-[#808080] text-sm font-medium leading-[18px] tracking-[-0.28px] mt-2 max-md:text-xs">
                This is the list of all the jobs you have posted to the community for freelancers, institutions, organizations, and others to propose for.
              </p>
            </div>
          </div>

          <div className="w-full pr-4 max-md:pr-0">
            <h2 className="text-[#1A011E] text-xl font-medium leading-[1.3] tracking-[-0.4px] mt-8 mb-2 max-md:text-lg max-md:mx-3 slide-in">
              Talents you've dealt with
            </h2>

            <ContactsTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Contacts;
