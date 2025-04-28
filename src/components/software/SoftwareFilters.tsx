import React, { useState } from "react";
import { FilterHeader } from "@/components/products/ProductFilters";

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

interface SoftwareFiltersProps {
  onViewChange?: (view: string) => void;
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

const TextInput: React.FC<{ label: string; placeholder: string }> = ({
  label,
  placeholder,
}) => (
  <div className="mb-4 px-4">
    <div className="text-sm font-medium mb-2">{label}</div>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full h-10 px-3 bg-white border border-[#F2F2F2] text-sm text-[#999] appearance-none rounded-md hover:border-[#6B047C] focus:outline-none focus:border-[#6B047C] shadow-sm"
    />
  </div>
);

export const SoftwareFilters: React.FC<SoftwareFiltersProps> = ({ onViewChange }) => {
  const [price, setPrice] = useState<number>(0);
  const [selectedProduct, setSelectedProduct] = useState("Software");
  const products = ["Books", "Templates", "Software", "Courses"];
  const [selectedSector, setSelectedSector] = useState<Tag[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<Tag[]>([]);
  const [selectedGoverningLaw, setSelectedGoverningLaw] = useState<Tag[]>([]);
  const [selectedBookType, setSelectedBookType] = useState<Tag[]>([]);
  const [selectedDataCenter, setSelectedDataCenter] = useState<Tag[]>([]);
  const [cost, setCost] = useState<string>("All");

  const sectorOptions: Tag[] = [
    { id: "1", label: "Public law" },
    { id: "2", label: "Drug law" },
  ];

  const languageOptions: Tag[] = [
    { id: "1", label: "English" },
    { id: "2", label: "Spanish" },
  ];

  const governingLawOptions: Tag[] = [
    { id: "1", label: "Public law" },
    { id: "2", label: "Drug law" },
  ];

  const bookTypeOptions: Tag[] = [
    { id: "1", label: "E-book" },
    { id: "2", label: "Audio" },
    { id: "3", label: "Hard copy" },
  ];

  const dataCenterOptions: Tag[] = [
    { id: "1", label: "UK" },
    { id: "2", label: "Europe" },
    { id: "3", label: "America" },
  ];

  const clearAll = () => {
    setSelectedSector([]);
    setSelectedLanguage([]);
    setSelectedGoverningLaw([]);
    setSelectedBookType([]);
    setSelectedDataCenter([]);
    setCost("All");
    setPrice(0);
  };

  const appliedCount = [
    cost !== "All" ? cost : "",
    price > 0 ? price.toString() : "",
    ...selectedSector.map((t) => t.label),
    ...selectedLanguage.map((t) => t.label),
    ...selectedGoverningLaw.map((t) => t.label),
    ...selectedBookType.map((t) => t.label),
    ...selectedDataCenter.map((t) => t.label),
  ]
    .filter(Boolean)
    .length;

  const sliderBackground = `linear-gradient(to right, #6B047C 0%, #6B047C ${(price / 100) * 100}%, #D1B1D6 ${(price / 100) * 100}%, #D1B1D6 100%)`;

  const handleProductClick = (product: string) => {
    setSelectedProduct(product);
    switch (product) {
      case "Templates":
        onViewChange?.("templates");
        break;
      case "Software":
        onViewChange?.("software");
        break;
      case "Courses":
        onViewChange?.("courses");
        break;
      default:
        onViewChange?.("products");
    }
  };

  return (
    <div className="w-[280px] text-[#1A011E] pb-4 bg-[#F4EDF5]">
      <FilterHeader appliedCount={appliedCount} onClearAll={clearAll} />

      {/* PRODUCT Section */}
      <div className="px-4 mb-6 bg-[#F4EDF5]">
        <div className="text-[10px] uppercase font-medium text-[#666666] mb-2">
          PRODUCT
        </div>
        <div className="flex flex-col space-y-1">
          {products.map((product) => (
            <button
              key={product}
              onClick={() => handleProductClick(product)}
              className={`text-left px-3 py-2.5 text-sm font-medium rounded-none transition-colors duration-200 ${
                selectedProduct === product
                  ? "text-[#6B047C] bg-white border-l-2 border-[#6B047C] font-semibold"
                  : "text-[#1A011E] hover:text-[#6B047C] hover:bg-white hover:border-l-2 hover:border-[#6B047C]"
              }`}
            >
              {product}
            </button>
          ))}
        </div>
      </div>

      <div className="text-[10px] uppercase font-medium text-[#666666] px-4 mb-2">
        FILTER BY:
      </div>

      <div className="space-y-4 bg-[#F4EDF5]">
        <TextInput label="Brand" placeholder="E.g Austin Kelana" />
        <TextInput label="Seller" placeholder="E.g Austin Kelana" />

        <SelectFilter
          label="Sector"
          options={sectorOptions}
          selectedTags={selectedSector}
          onAddTag={(tag) => setSelectedSector((prev) => [...prev, tag])}
          onRemoveTag={(id) =>
            setSelectedSector((prev) => prev.filter((t) => t.id !== id))
          }
        />

        <SelectFilter
          label="Version"
          options={[]}
          selectedTags={[]}
          onAddTag={() => {}}
          onRemoveTag={() => {}}
        />

        <div className="px-4">
          <div className="text-sm font-medium mb-2">Date created</div>
          <input
            type="text"
            placeholder="DD/MM/YYYY"
            className="w-full h-10 px-3 bg-white border border-[#F2F2F2] text-sm text-[#999] appearance-none rounded-md hover:border-[#6B047C] focus:outline-none focus:border-[#6B047C] shadow-sm"
          />
        </div>

        <SelectFilter
          label="Language"
          options={languageOptions}
          selectedTags={selectedLanguage}
          onAddTag={(tag) => setSelectedLanguage((prev) => [...prev, tag])}
          onRemoveTag={(id) =>
            setSelectedLanguage((prev) => prev.filter((t) => t.id !== id))
          }
        />

        <SelectFilter
          label="Governing law"
          options={governingLawOptions}
          selectedTags={selectedGoverningLaw}
          onAddTag={(tag) => setSelectedGoverningLaw((prev) => [...prev, tag])}
          onRemoveTag={(id) =>
            setSelectedGoverningLaw((prev) => prev.filter((t) => t.id !== id))
          }
        />

        <SelectFilter
          label="Book type"
          options={bookTypeOptions}
          selectedTags={selectedBookType}
          onAddTag={(tag) => setSelectedBookType((prev) => [...prev, tag])}
          onRemoveTag={(id) =>
            setSelectedBookType((prev) => prev.filter((t) => t.id !== id))
          }
        />

        <SelectFilter
          label="Data center location"
          options={dataCenterOptions}
          selectedTags={selectedDataCenter}
          onAddTag={(tag) => setSelectedDataCenter((prev) => [...prev, tag])}
          onRemoveTag={(id) =>
            setSelectedDataCenter((prev) => prev.filter((t) => t.id !== id))
          }
        />

        <SelectFilter
          label="Office location"
          options={[]}
          selectedTags={[]}
          onAddTag={() => {}}
          onRemoveTag={() => {}}
        />

        <div className="px-4">
          <div className="text-sm font-medium mb-2">Cost</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              "All",
              "Free",
              "Paid",
              "Discounted",
            ].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="cost"
                  value={opt}
                  checked={cost === opt}
                  onChange={() => setCost(opt)}
                  className="w-4 h-4 accent-[#6B047C] border-[#D1B1D6] focus:ring-[#6B047C]"
                />
                <span className="text-sm">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="px-4">
          <div className="text-sm font-medium mb-2">Price range</div>
          <input
            type="range"
            min="0"
            max="100"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            style={{ background: sliderBackground }}
            className="w-full h-1 bg-[#F0E6F2] appearance-none cursor-pointer accent-[#6B047C] [&::-webkit-slider-thumb]:bg-[#6B047C] [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#6B047C] [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0"
          />
          <div className="text-sm text-[#666] mt-1">${price}</div>
        </div>
      </div>
    </div>
  );
};