import React, { useState } from "react";
import { Lawyer } from "@/types/lawyer";

interface Tag {
  id: string;
  label: string;
}

interface FilterHeaderProps {
  appliedCount: number;
  onClearAll?: () => void;
}

const FilterHeader: React.FC<FilterHeaderProps> = ({
  appliedCount,
  onClearAll,
}) => {
  return (
    <div className="flex items-center justify-between mb-6 px-4 pt-4">
      <div className="text-base font-medium tracking-[-0.32px]">Filters</div>
      {appliedCount > 0 && (
        <button 
          onClick={onClearAll} 
          className="flex items-center gap-2 bg-[#F0E6F2] px-3 py-1.5 text-[#6B047C] text-sm font-medium hover:bg-[#D8B4E2] transition-colors rounded-md shadow-sm"
          aria-label="Clear all filters"
        >
          <span>{appliedCount} applied</span>
          <span className="hover:text-[#4A0356]">×</span>
        </button>
      )}
    </div>
  );
};

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
            className="w-full h-10 px-3 bg-white border border-[#F2F2F2] text-sm text-[#999] appearance-none rounded-md hover:border-[#6B047C] focus:outline-none focus:border-[#6B047C] shadow-sm"
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

interface LawyerFiltersProps {
  lawyers: Lawyer[];
  onFilterChange: (filters: any) => void;
}

export const LawyerFilters: React.FC<LawyerFiltersProps> = ({ lawyers, onFilterChange }) => {
  const [author, setAuthor] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [selectedSector, setSelectedSector] = useState<Tag[]>([]);
  const [selectedGoverningLaw, setSelectedGoverningLaw] = useState<Tag[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<Tag[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<Tag[]>([]);
  const [dateCreated, setDateCreated] = useState<string>("");
  const [version, setVersion] = useState<string>("");
  const [cost, setCost] = useState<string>("All");
  const [price, setPrice] = useState<number>(20);
  const [starRating, setStarRating] = useState<number>(0);

  const sectorOptions: Tag[] = [
    { id: "1", label: "Public law" },
    { id: "2", label: "Drug law" },
  ];

  const governingLawOptions: Tag[] = [
    { id: "1", label: "Public law" },
    { id: "2", label: "Drug law" },
  ];

  const rolesOptions: Tag[] = [
    { id: "1", label: "Public law" },
    { id: "2", label: "Drug law" },
  ];

  const languageOptions: Tag[] = [
    { id: "1", label: "English" },
    { id: "2", label: "Spanish" },
  ];

  const clearAll = () => {
    setAuthor("");
    setBrand("");
    setSelectedSector([]);
    setSelectedGoverningLaw([]);
    setSelectedRoles([]);
    setSelectedLanguage([]);
    setDateCreated("");
    setVersion("");
    setCost("All");
    setPrice(20);
    setStarRating(0);
    onFilterChange({ type: "clear" });
  };

  const appliedCount = [
    author,
    brand,
    cost !== "All" ? cost : "",
    price !== 20 ? price.toString() : "",
    ...selectedSector.map((t) => t.label),
    ...selectedGoverningLaw.map((t) => t.label),
    ...selectedRoles.map((t) => t.label),
    ...selectedLanguage.map((t) => t.label),
  ].filter(Boolean).length;

  const sliderBackground = `linear-gradient(to right, #6B047C 0%, #6B047C ${(price / 100) * 100}%, #D1B1D6 ${(price / 100) * 100}%, #D1B1D6 100%)`;

  return (
    <div className="w-[280px] bg-[#F4EDF5] text-[#1A011E] pb-4">
      <FilterHeader appliedCount={appliedCount} onClearAll={clearAll} />

      <div className="text-[10px] uppercase font-medium text-[#666666] px-4 mb-2">
        FILTER BY:
      </div>

      <div className="space-y-5">
        <div className="px-4">
          <div className="text-sm font-medium mb-2">Author</div>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="E.g Austin Kelaina"
            className="w-full h-10 px-3 bg-white border border-[#F2F2F2] text-sm text-[#999] appearance-none rounded-md hover:border-[#6B047C] focus:outline-none focus:border-[#6B047C] shadow-sm"
          />
        </div>

        <div className="px-4">
          <div className="text-sm font-medium mb-2">Brand</div>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="E.g Austin Kelaina"
            className="w-full h-10 px-3 bg-white border border-[#F2F2F2] text-sm text-[#999] appearance-none rounded-md hover:border-[#6B047C] focus:outline-none focus:border-[#6B047C] shadow-sm"
          />
        </div>

        <SelectFilter
          label="Sector"
          options={sectorOptions}
          selectedTags={selectedSector}
          onAddTag={(tag) => setSelectedSector([...selectedSector, tag])}
          onRemoveTag={(id) => setSelectedSector(selectedSector.filter(t => t.id !== id))}
        />

        <SelectFilter
          label="Governing law"
          options={governingLawOptions}
          selectedTags={selectedGoverningLaw}
          onAddTag={(tag) => setSelectedGoverningLaw([...selectedGoverningLaw, tag])}
          onRemoveTag={(id) => setSelectedGoverningLaw(selectedGoverningLaw.filter(t => t.id !== id))}
        />

        <SelectFilter
          label="Roles"
          options={rolesOptions}
          selectedTags={selectedRoles}
          onAddTag={(tag) => setSelectedRoles([...selectedRoles, tag])}
          onRemoveTag={(id) => setSelectedRoles(selectedRoles.filter(t => t.id !== id))}
        />

        <SelectFilter
          label="Language"
          options={languageOptions}
          selectedTags={selectedLanguage}
          onAddTag={(tag) => setSelectedLanguage([...selectedLanguage, tag])}
          onRemoveTag={(id) => setSelectedLanguage(selectedLanguage.filter(t => t.id !== id))}
        />

        <div className="px-4">
          <div className="text-sm font-medium mb-2">Date created</div>
          <input
            type="text"
            value={dateCreated}
            onChange={(e) => setDateCreated(e.target.value)}
            placeholder="DD/MM/YYYY"
            className="w-full h-10 px-3 bg-white border border-[#F2F2F2] text-sm text-[#999] appearance-none rounded-md hover:border-[#6B047C] focus:outline-none focus:border-[#6B047C] shadow-sm"
          />
        </div>

        <div className="px-4">
          <div className="text-sm font-medium mb-2">Version</div>
          <input
            type="text"
            value={version}
            onChange={(e) => setVersion(e.target.value)}
            placeholder="Enter version"
            className="w-full h-10 px-3 bg-white border border-[#F2F2F2] text-sm text-[#999] appearance-none rounded-md hover:border-[#6B047C] focus:outline-none focus:border-[#6B047C] shadow-sm"
          />
        </div>

        {/* Cost Radio Buttons */}
        <div className="px-4">
          <div className="text-sm font-medium mb-2">Cost</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={cost === 'All'}
                onChange={() => setCost('All')}
                className="w-4 h-4 accent-[#6B047C] border-[#D1B1D6] focus:ring-[#6B047C]"
              />
              <span className="text-sm">All</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={cost === 'Free'}
                onChange={() => setCost('Free')}
                className="w-4 h-4 accent-[#6B047C] border-[#D1B1D6] focus:ring-[#6B047C]"
              />
              <span className="text-sm">Free</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={cost === 'Paid'}
                onChange={() => setCost('Paid')}
                className="w-4 h-4 accent-[#6B047C] border-[#D1B1D6] focus:ring-[#6B047C]"
              />
              <span className="text-sm">Paid</span>
            </label>
          </div>
        </div>

        {/* Price Range Slider */}
        <div className="px-4">
          <div className="text-sm font-medium mb-2">Price range</div>
          <input
            type="range"
            min="0"
            max="100"
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
            className="w-full h-1 bg-[#F0E6F2] appearance-none cursor-pointer accent-[#6B047C] [&::-webkit-slider-thumb]:bg-[#6B047C] [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#6B047C] [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0"
            style={{
              background: sliderBackground
            }}
          />
          <div className="text-sm text-[#666] mt-1">${price}</div>
        </div>

        {/* Star Ratings */}
        <div className="px-4">
          <div className="text-sm font-medium mb-2">Star ratings</div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                onClick={() => setStarRating(rating)}
                className={`text-lg text-[#6B047C] hover:text-[#6B047C] transition-colors ${
                  rating <= starRating ? 'opacity-100' : 'opacity-30'
                }`}
              >
                ⭐
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};