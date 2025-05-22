import React, { useState } from "react";

const questions = [
  "What is your mother's maiden name?",
  "What was the name of your first pet?",
  "What is your favorite book?",
  "What city were you born in?",
  "What is your favorite color?",
];

export const SecurityQuestionSettings: React.FC = () => {
  const [selected, setSelected] = useState(["", "", ""]);
  const [answers, setAnswers] = useState(["", "", ""]);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (idx: number, value: string) => {
    setSelected((prev) => prev.map((v, i) => (i === idx ? value : v)));
  };
  const handleAnswer = (idx: number, value: string) => {
    setAnswers((prev) => prev.map((v, i) => (i === idx ? value : v)));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Add validation or API call here
  };

  return (
    <div className="w-full max-w-2xl pl-0 pr-4 bg-white">
      <h2 className="text-2xl font-semibold text-black mb-1">Security question</h2>
      <p className="text-gray-600 mb-8 text-sm max-w-2xl">For important updates regarding your lawtrolley activity, certain notifications cannot be disabled</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {[0, 1, 2].map((idx) => (
          <div key={idx}>
            <label className="block mb-1 text-base font-medium text-gray-700">Select question</label>
            <select
              className="w-full rounded-lg px-4 py-3 text-base bg-neutral-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6B047C] mb-4"
              value={selected[idx]}
              onChange={e => handleSelect(idx, e.target.value)}
              required
            >
              <option value="">- Select one -</option>
              {questions.map((q, i) => (
                <option key={i} value={q}>{q}</option>
              ))}
            </select>
            <label className="block mb-1 text-base font-medium text-gray-700">Your answer</label>
            <input
              type="text"
              className="w-full rounded-lg px-4 py-3 text-base bg-neutral-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6B047C]"
              value={answers[idx]}
              onChange={e => handleAnswer(idx, e.target.value)}
              placeholder="Type here"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full text-sm text-white tracking-[-0.28px] mt-10 min-h-[50px] bg-[#6B047C] py-4 rounded-lg transition-all duration-200 hover:bg-[#4B025A] hover:shadow-lg hover:scale-105"
        >
          Update
        </button>
        {submitted && (selected.includes("") || answers.includes("")) && (
          <div className="text-red-500 text-center mt-2">Please fill all questions and answers.</div>
        )}
      </form>
    </div>
  );
}; 