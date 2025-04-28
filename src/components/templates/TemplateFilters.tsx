import React, { useState } from "react";
import { FilterHeader } from "../products/ProductFilters";

interface TemplateFiltersProps {
  onViewChange?: (view: string) => void;
}

interface Tag {
  id: string;
  label: string;
}

interface SelectFilterProps {
  label: string;
  options: Tag[];
  selectedTags: Tag[];
  onAddTag: (tag: Tag) => void;
  onRemoveTag: (id: string) => void;
  placeholder?: string;
}

const SelectFilter: React.FC<SelectFilterProps> = ({
  label,
  options,
  selectedTags,
  onAddTag,
  onRemoveTag,
  placeholder = "Search or select...",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const filteredOptions = searchTerm
    ? options.filter(option => 
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  const availableOptions = filteredOptions.filter(
    (option) => !selectedTags.some((tag) => tag.id === option.id)
  );

  const handleAddTag = (tag: Tag) => {
    if (!selectedTags.find(t => t.id === tag.id)) {
      onAddTag(tag);
      setSearchTerm("");
      setIsOpen(false);
    }
  };

  return (
    <div className="mb-4 px-4">
      <div className="text-sm font-medium mb-2">{label}</div>
      
      {/* Search input with dropdown */}
      <div ref={dropdownRef} className="relative">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onClick={() => setIsOpen(true)}
            placeholder={placeholder}
            className="w-full h-10 px-3 pr-10 bg-white border border-[#F2F2F2] text-sm rounded-md shadow-sm hover:border-[#6B047C] focus:outline-none focus:ring-1 focus:ring-[#6B047C] focus:border-[#6B047C] mb-2"
          />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#6B047C] focus:outline-none"
            aria-label="Toggle dropdown"
          >
            <svg
              className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Selected tags */}
        {selectedTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {selectedTags.map((tag) => (
              <div 
                key={tag.id} 
                className="flex items-center gap-1 px-2 py-1 bg-[#F0E6F2] rounded-md shadow-sm hover:bg-[#D8B4E2] transition-colors text-[#6B047C] text-sm font-medium"
              >
                <span>{tag.label}</span>
                <button 
                  onClick={() => onRemoveTag(tag.id)}
                  className="text-[#6B047C] text-sm hover:text-[#4A0356] transition-colors" aria-label="Remove tag"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Options dropdown */}
        {isOpen && availableOptions.length > 0 && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
            {availableOptions.map((option) => (
              <div
                key={option.id}
                onClick={() => handleAddTag(option)}
                className="px-3 py-2 text-sm cursor-pointer hover:bg-[#F4EDF5]"
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const TemplateFilters: React.FC<TemplateFiltersProps> = ({ onViewChange }) => {
  const [selectedTemplateType, setSelectedTemplateType] = useState<string>("");
  const [selectedDocumentType, setSelectedDocumentType] = useState<string>("");

  // Template type options
  const templateTypes: Tag[] = [
    { id: "contract", label: "Contract" },
    { id: "agreement", label: "Agreement" },
    { id: "lease", label: "Lease" },
    { id: "nda", label: "NDA" },
    { id: "employment", label: "Employment" }
  ];

  // Document type options
  const documentTypes: Tag[] = [
    { id: "pdf", label: "PDF" },
    { id: "word", label: "Word" },
    { id: "excel", label: "Excel" },
    { id: "google-docs", label: "Google Docs" }
  ];

  const getAppliedFiltersCount = () => {
    let count = 0;
    if (selectedTemplateType) count++;
    if (selectedDocumentType) count++;
    return count;
  };

  const handleClearAll = () => {
    setSelectedTemplateType("");
    setSelectedDocumentType("");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-50">
      <div className="max-w-4xl mx-auto">
        <FilterHeader 
          appliedCount={getAppliedFiltersCount()} 
          onClearAll={handleClearAll}
        />

        <div className="bg-white border-b border-[#F2F2F2]">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-4">
              <button
                onClick={() => onViewChange?.("products")}
                className="text-sm font-medium text-[#6B047C] hover:text-[#4A0356] transition-colors"
              >
                Products
              </button>
              <button
                onClick={() => onViewChange?.("templates")}
                className="text-sm font-medium text-[#6B047C] hover:text-[#4A047C] transition-colors"
              >
                Templates
              </button>
              <button
                onClick={() => onViewChange?.("software")}
                className="text-sm font-medium text-[#6B047C] hover:text-[#4A0356] transition-colors"
              >
                Software
              </button>
              <button
                onClick={() => onViewChange?.("courses")}
                className="text-sm font-medium text-[#6B047C] hover:text-[#4A047C] transition-colors"
              >
                Courses
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white">
          {/* Template Type */}
          <SelectFilter
            label="Template Type"
            options={templateTypes}
            selectedTags={[{ id: selectedTemplateType, label: selectedTemplateType }].filter(t => t.id)}
            onAddTag={(tag) => setSelectedTemplateType(tag.id)}
            onRemoveTag={() => setSelectedTemplateType("")}
          />

          {/* Document Type */}
          <SelectFilter
            label="Document Type"
            options={documentTypes}
            selectedTags={[{ id: selectedDocumentType, label: selectedDocumentType }].filter(t => t.id)}
            onAddTag={(tag) => setSelectedDocumentType(tag.id)}
            onRemoveTag={() => setSelectedDocumentType("")}
          />
        </div>
      </div>
    </div>
  );
};
