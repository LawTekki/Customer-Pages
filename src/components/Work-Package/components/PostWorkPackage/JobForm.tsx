import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { CustomSelect } from './CustomSelect';

interface JobFormData {
  title: string;
  description: string;
  governingLaw: string;
  governingLanguage: string;
}

export const JobForm: React.FC = () => {
  const { register, handleSubmit } = useForm<JobFormData>();
  const [descriptionLength, setDescriptionLength] = useState(0);
  const navigate = useNavigate();
  const [governingLaw, setGoverningLaw] = useState('');
  const [governingLanguage, setGoverningLanguage] = useState('');
  const [step, setStep] = useState(1);
  // Talent form state (dummy for now)
  const [talentForm, setTalentForm] = useState({});
  // Step 3: Questions for talent
  const [questions, setQuestions] = useState(['', '', '']);
  const [file, setFile] = useState<File | null>(null);

  const onSubmit = (data: JobFormData) => {
    // Validate custom selects
    if (!governingLaw || !governingLanguage) {
      // Optionally show error
      return;
    }
    // Go to next step
    setStep(2);
  };

  // Talent step form (dummy fields for now)
  const TalentStep = () => (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-medium mb-1">Talent type</label>
          <div className="text-[#808080] text-sm mb-2">Who wrote or own the product</div>
          <input className="w-full bg-neutral-50 border border-[#F2F2F2] rounded-lg px-4 py-3 text-sm outline-none placeholder:text-[#CCCCCC]" placeholder="Eg: Barry Hilton" />
        </div>
        <div>
          <label className="block font-medium mb-1">Talent role</label>
          <div className="text-[#808080] text-sm mb-2">What version is this product</div>
          <input className="w-full bg-neutral-50 border border-[#F2F2F2] rounded-lg px-4 py-3 text-sm outline-none placeholder:text-[#CCCCCC]" placeholder="Eg: Version1 or episode 1" />
        </div>
        <div>
          <label className="block font-medium mb-1">Budget (maximum)</label>
          <div className="text-[#808080] text-sm mb-2">Who wrote or own the product</div>
          <input className="w-full bg-neutral-50 border border-[#F2F2F2] rounded-lg px-4 py-3 text-sm outline-none placeholder:text-[#CCCCCC]" placeholder="Eg: Barry Hilton" />
        </div>
        <div>
          <label className="block font-medium mb-1">Duration</label>
          <div className="text-[#808080] text-sm mb-2">What version is this product</div>
          <input className="w-full bg-neutral-50 border border-[#F2F2F2] rounded-lg px-4 py-3 text-sm outline-none placeholder:text-[#CCCCCC]" placeholder="Eg: Version1 or episode 1" />
        </div>
        <div>
          <label className="block font-medium mb-1">Payment terms</label>
          <div className="text-[#808080] text-sm mb-2">Who wrote or own the product</div>
          <input className="w-full bg-neutral-50 border border-[#F2F2F2] rounded-lg px-4 py-3 text-sm outline-none placeholder:text-[#CCCCCC]" placeholder="Eg: Barry Hilton" />
        </div>
        <div>
          <label className="block font-medium mb-1">Risk</label>
          <div className="text-[#808080] text-sm mb-2">What version is this product</div>
          <input className="w-full bg-neutral-50 border border-[#F2F2F2] rounded-lg px-4 py-3 text-sm outline-none placeholder:text-[#CCCCCC]" placeholder="Eg: Version1 or episode 1" />
        </div>
      </div>
      <div className="mt-6">
        <label className="block font-medium mb-1">Confidentiality</label>
        <div className="text-[#808080] text-sm mb-2">What kind of talent are you looking out for</div>
        <CustomSelect
          options={[
            { value: '', label: '- Select new practice area' },
            { value: 'conf1', label: 'Confidentiality 1' },
            { value: 'conf2', label: 'Confidentiality 2' },
          ]}
          value={''}
          onChange={() => {}}
          placeholder="- Select new practice area"
        />
      </div>
      <div className="flex justify-between mt-10">
        <button type="button" className="border border-[#6B047C] text-[#6B047C] rounded-md px-12 py-3 font-medium text-lg hover:bg-[#F3EAF6] transition-all" onClick={() => setStep(1)}>Back</button>
        <button type="button" className="bg-[#6B047C] text-white rounded-md px-20 py-3 font-medium text-lg hover:bg-[#5A036B] transition-all" style={{minWidth: '200px'}} onClick={() => setStep(3)}>Next</button>
      </div>
    </div>
  );

  // Step 3: Questions for talent and file upload
  const QuestionsStep = () => (
    <div className="w-full max-w-3xl mx-auto mt-8">
      <div className="mb-8">
        <label className="block font-semibold text-lg mb-1">Questions for talent <span className="font-normal text-[#808080]">(optional)</span></label>
        <div className="text-[#808080] text-sm mb-4">What kind of talent are you looking out for</div>
        {questions.map((q, idx) => (
          <input
            key={idx}
            className="w-full bg-neutral-50 border-none rounded-lg px-4 py-3 text-sm outline-none placeholder:text-[#CCCCCC] mb-3"
            placeholder="- Select new practice area"
            value={q}
            readOnly
          />
        ))}
        <button type="button" className="flex items-center gap-2 text-[#6B047C] font-medium mt-2 mb-6" onClick={() => setQuestions(qs => [...qs, ''])}>
          <span className="text-xl">+</span> Add new question
        </button>
      </div>
      <div className="mb-10">
        <label className="block font-medium mb-1">Attach a document</label>
        <div className="text-[#808080] text-sm mb-2">Make sure the file is below 2mb</div>
        <div className="w-full bg-neutral-50 border border-dashed border-[#E5E5E5] rounded-xl flex flex-col items-center justify-center py-10 px-4 text-center">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="mx-auto mb-2 text-[#6B047C]"><path d="M12 16V4m0 0L8 8m4-4 4 4M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" stroke="#6B047C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="text-[#808080] text-sm">drag & drop or <span className="text-[#6B047C] underline cursor-pointer">choose file</span> to upload</span>
          <div className="text-[#B3B3B3] text-xs mt-1">Image format: JPG or PNG</div>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <button type="button" className="border border-[#6B047C] text-[#6B047C] rounded-md px-12 py-3 font-medium text-lg hover:bg-[#F3EAF6] transition-all" onClick={() => setStep(2)}>Back</button>
        <button type="button" className="bg-[#6B047C] text-white rounded-md px-20 py-3 font-medium text-lg hover:bg-[#5A036B] transition-all" style={{minWidth: '200px'}}>Next</button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAF9FB] flex flex-col overflow-x-hidden">
      {/* Header */}
      <Header />
      <div className="flex flex-1 max-md:flex-col max-md:p-0 w-full">
        {/* Left panel */}
        <div className="w-[340px] bg-transparent flex flex-col items-start px-12 pt-16 border-r border-[#F3EAF6] min-h-full max-md:w-full max-md:border-r-0 max-md:border-b max-md:border-b-0 max-md:px-3 max-md:pt-4 max-md:items-stretch fade-in">
          {/* Mobile: First row with text left, button right */}
          <div className="hidden max-md:flex w-full items-center justify-between mb-0">
            <span className="text-base font-medium text-[#1A011E] whitespace-nowrap leading-tight">You are about to create a</span>
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-1 text-[#6B047C] border border-[#6B047C] rounded-full px-3 py-1 text-xs font-medium hover:bg-[#F3EAF6] transition click-shrink"
            >
              <span className="text-base">←</span> Go back home
            </button>
          </div>
          {/* Desktop: Title and button */}
          <div className="max-md:hidden w-full">
            <button
              onClick={() => navigate('/')}
              className="mb-8 flex items-center gap-2 text-[#6B047C] border border-[#6B047C] rounded-full px-5 py-2 font-medium hover:bg-[#F3EAF6] transition click-shrink"
            >
              <span className="text-lg">←</span> Go back home
            </button>
            <span className="text-2xl font-semibold mb-0 block">You are about to create a job offer</span>
          </div>
          {/* Mobile: job offer and description */}
          <div className="md:hidden max-md:mt-0" style={{marginTop: -6, paddingTop: 0}}>
            <span className="text-base font-medium text-[#1A011E] leading-tight">job offer</span>
            <p className="text-[#808080] text-xs mt-0 max-w-full leading-tight">The Job offer will be posted for freelancers and other talent drop a proposal for.</p>
          </div>
          {/* Desktop: description */}
          <div className="max-md:hidden mt-4">
            <p className="text-[#808080] text-base max-w-[220px] ">The Job offer will be posted for freelancers and other talent drop a proposal for.</p>
          </div>
        </div>

        {/* Right panel */}
        <div className="flex-1 flex flex-col items-center justify-start py-16 px-4 max-md:py-6 max-md:px-3 w-full">
          {/* Stepper: show circles, numbers, and horizontal divider lines on all views */}
          <div className="flex items-center justify-center w-full max-w-[800px] mb-10 fade-in slide-in max-md:mb-6">
            <div className="flex items-center w-full">
              {/* Step 1 */}
              <div className="flex flex-col items-center flex-1 transition-all duration-300 hover-scale">
                <div className={`w-8 h-8 max-md:w-7 max-md:h-7 rounded-full flex items-center justify-center font-bold shadow-sm animate-fade-in text-base max-md:text-sm border-2 ${step === 1 ? 'bg-[#6B047C] text-white border-[#6B047C]' : 'bg-white text-[#6B047C] border-[#6B047C]'}`}>1</div>
                <span className="mt-2 text-[#6B047C] font-medium animate-fade-in text-sm max-md:text-xs md:inline hidden">Work details</span>
                <span className="mt-2 text-[#6B047C] font-medium animate-fade-in text-sm max-md:text-xs md:hidden inline">work</span>
              </div>
              <div className="h-0.5 bg-[#E5E5E5] flex-1 mx-2" />
              {/* Step 2 */}
              <div className="flex flex-col items-center flex-1 transition-all duration-300 hover-scale">
                <div className={`w-8 h-8 max-md:w-7 max-md:h-7 rounded-full flex items-center justify-center font-bold shadow-sm animate-fade-in text-base max-md:text-sm border-2 ${step === 2 ? 'bg-[#6B047C] text-white border-[#6B047C]' : 'bg-white text-[#B3B3B3] border-[#B3B3B3]'}`}>2</div>
                <span className="mt-2 text-[#B3B3B3] font-medium animate-fade-in text-sm max-md:text-xs md:inline hidden">Talent</span>
                <span className="mt-2 text-[#B3B3B3] font-medium animate-fade-in text-sm max-md:text-xs md:hidden inline">talent</span>
              </div>
              <div className="h-0.5 bg-[#E5E5E5] flex-1 mx-2" />
              {/* Step 3 */}
              <div className="flex flex-col items-center flex-1 transition-all duration-300 hover-scale">
                <div className={`w-8 h-8 max-md:w-7 max-md:h-7 rounded-full flex items-center justify-center font-bold shadow-sm animate-fade-in text-base max-md:text-sm border-2 ${step === 3 ? 'bg-[#6B047C] text-white border-[#6B047C]' : 'bg-white text-[#B3B3B3] border-[#B3B3B3]'}`}>2</div>
                <span className="mt-2 text-[#B3B3B3] font-medium animate-fade-in text-sm max-md:text-xs md:inline hidden">Product Price</span>
                <span className="mt-2 text-[#B3B3B3] font-medium animate-fade-in text-sm max-md:text-xs md:hidden inline">price</span>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-xl shadow-none w-full max-w-[800px] p-12 max-md:p-2 fade-in slide-in">
            {step === 1 ? (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                {/* Work title */}
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <label className="text-base font-medium max-md:text-sm">
                      Work title <span className="text-[#D43705]">*</span>
                    </label>
                    <div className="text-[#808080] text-sm max-md:text-xs">
                      Give your work a title and make it short and sleek
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 border bg-neutral-50 px-4 py-3 rounded-lg border-[#F2F2F2] max-md:px-2 max-md:py-2">
                    <input
                      type="text"
                      placeholder="Eg: The subtle act of getting away with murder"
                      className="w-full bg-transparent text-[#333333] text-sm outline-none placeholder:text-[#CCCCCC] max-md:text-xs"
                      {...register('title', { required: true })}
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <label className="text-base font-medium max-md:text-sm">
                      Description <span className="text-[#D43705]">*</span>
                    </label>
                    <div className="text-[#808080] text-sm max-md:text-xs">
                      Now this is where you give a details of your job
                    </div>
                  </div>
                  <div className="relative">
                    <textarea
                      placeholder="Eg: The subtle act of getting away with murder"
                      className="w-full h-[143px] border bg-neutral-50 text-[#333333] text-sm resize-none px-4 py-3 rounded-lg border-[#F2F2F2] outline-none placeholder:text-[#CCCCCC] max-md:text-xs max-md:px-2 max-md:py-2 max-md:h-[90px]"
                      maxLength={500}
                      {...register('description', { required: true })}
                      onChange={(e) => setDescriptionLength(e.target.value.length)}
                    />
                    <div className="absolute text-[#808080] text-sm right-4 bottom-3 max-md:text-xs max-md:right-2 max-md:bottom-2">
                      {descriptionLength}/500
                    </div>
                  </div>
                </div>

                {/* Governing law */}
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <label className="text-base font-medium max-md:text-sm">
                      Governing law <span className="text-[#D43705]">*</span>
                    </label>
                    <div className="text-[#808080] text-sm max-md:text-xs">
                      Now this is where you give a details of your product
                    </div>
                  </div>
                  <CustomSelect
                    options={[
                      { value: '', label: '- Select new practice area' },
                      { value: 'law1', label: 'Law 1' },
                      { value: 'law2', label: 'Law 2' },
                    ]}
                    value={governingLaw}
                    onChange={setGoverningLaw}
                    placeholder="- Select new practice area"
                    required
                  />
                </div>

                {/* Governing language */}
                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex flex-col gap-1">
                    <label className="text-base font-medium max-md:text-sm">
                      Governing language <span className="text-[#D43705]">*</span>
                    </label>
                    <div className="text-[#808080] text-sm max-md:text-xs">
                      Now this is where you give a details of your product
                    </div>
                  </div>
                  <CustomSelect
                    options={[
                      { value: '', label: '- Select new practice area' },
                      { value: 'en', label: 'English' },
                      { value: 'es', label: 'Spanish' },
                    ]}
                    value={governingLanguage}
                    onChange={setGoverningLanguage}
                    placeholder="- Select new practice area"
                    required
                  />
                </div>

                {/* Next Button */}
                <div className="flex justify-end w-full mt-8 animate-fade-in slide-in">
                  <button
                    type="submit"
                    className="w-full max-w-[340px] h-[50px] rounded-md bg-[#6B047C] text-white text-base px-10 hover:bg-[#5A036B] transition-all duration-300 hover:scale-105 focus:scale-100 focus:outline-none fade-in click-shrink max-md:h-10 max-md:text-xs max-md:px-4"
                  >
                    Next
                  </button>
                </div>
              </form>
            ) : step === 2 ? (
               <TalentStep />
            ) : (
               <QuestionsStep />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};