import React, { useState } from "react";

interface FilterHeaderProps {
  appliedCount: number;
  onClearAll?: () => void;
}

export const FilterHeader: React.FC<FilterHeaderProps> = ({
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
            className="w-full h-10 px-3 bg-white border border-[#F2F2F2] text-sm rounded-md shadow-sm hover:border-[#6B047C] focus:outline-none focus:ring-1 focus:ring-[#6B047C] focus:border-[#6B047C]"
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

interface CoursesFiltersProps {
  onProductChange: (product: string) => void;
}

export const CoursesFilters: React.FC<CoursesFiltersProps> = ({ onProductChange }) => {
  const [price, setPrice] = useState(20);
  const [selectedProduct, setSelectedProduct] = useState("Courses");
  const products = ["Books", "Templates", "Software", "Courses"];

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

  const dataCenterOptions: Tag[] = [
    { id: "1", label: "UK" },
    { id: "2", label: "Europe" },
    { id: "3", label: "America" },
  ];

  const versionOptions: Tag[] = [
    { id: "1", label: "Latest" },
    { id: "2", label: "Previous" },
    { id: "3", label: "All Versions" },
  ];

  const [brand, setBrand] = useState("");
  const [seller, setSeller] = useState("");
  const [dateCreated, setDateCreated] = useState("");
  const [selectedSectors, setSelectedSectors] = useState<Tag[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<Tag[]>([]);
  const [selectedGoverningLaw, setSelectedGoverningLaw] = useState<Tag[]>([]);
  const [selectedDataCenters, setSelectedDataCenters] = useState<Tag[]>([]);
  const [selectedVersion, setSelectedVersion] = useState<Tag[]>([]);
  const [cost, setCost] = useState("All");

  const appliedCount = [
    brand ? 1 : 0,
    seller ? 1 : 0,
    dateCreated ? 1 : 0,
    selectedSectors.length,
    selectedLanguages.length,
    selectedGoverningLaw.length,
    selectedDataCenters.length,
    selectedVersion.length
  ].reduce((sum, count) => sum + count, 0);

  const clearAll = () => {
    setBrand("");
    setSeller("");
    setDateCreated("");
    setSelectedSectors([]);
    setSelectedLanguages([]);
    setSelectedGoverningLaw([]);
    setSelectedDataCenters([]);
    setSelectedVersion([]);
    setCost("All");
    setPrice(20);
  };

  return (
    <div className="w-[280px] text-[#1A011E] pb-4 bg-[#F4EDF5]">
      <FilterHeader
        appliedCount={appliedCount}
        onClearAll={() => {
          setBrand("");
          setSeller("");
          setDateCreated("");
          setSelectedSectors([]);
          setSelectedLanguages([]);
          setSelectedGoverningLaw([]);
          setSelectedDataCenters([]);
          setSelectedVersion([]);
          setCost("All");
          setPrice(20);
        }}
      />
      
      {/* PRODUCT Section */}
      <div className="px-4 mb-6 bg-[#F4EDF5]">
        <div className="text-[10px] uppercase font-medium text-[#666666] mb-2">
          PRODUCT
        </div>
        <div className="flex flex-col space-y-1">
          {products.map((product) => (
            <button
              key={product}
              onClick={() => {
                setSelectedProduct(product);
                onProductChange(product);
              }}
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
        <div className="px-4">
          <div className="text-sm font-medium mb-2">Brand</div>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="E.g Austin Kelana"
            className="w-full h-10 px-3 bg-white border border-[#F2F2F2] text-sm text-[#999] appearance-none rounded-md hover:border-[#6B047C] focus:outline-none focus:border-[#6B047C] shadow-sm"
          />
        </div>

        <div className="px-4">
          <div className="text-sm font-medium mb-2">Seller</div>
          <input
            type="text"
            value={seller}
            onChange={(e) => setSeller(e.target.value)}
            placeholder="E.g Austin Kelana"
            className="w-full h-10 px-3 bg-white border border-[#F2F2F2] text-sm text-[#999] appearance-none rounded-md hover:border-[#6B047C] focus:outline-none focus:border-[#6B047C] shadow-sm"
          />
        </div>

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

        <SelectFilter
          label="Sector"
          options={sectorOptions}
          selectedTags={selectedSectors}
          onAddTag={(tag) => setSelectedSectors((prev) => [...prev, tag])}
          onRemoveTag={(id) =>
            setSelectedSectors((prev) => prev.filter((t) => t.id !== id))
          }
        />

        <SelectFilter
          label="Version"
          options={versionOptions}
          selectedTags={selectedVersion}
          onAddTag={(tag) => setSelectedVersion((prev) => [...prev, tag])}
          onRemoveTag={(id) =>
            setSelectedVersion((prev) => prev.filter((t) => t.id !== id))
          }
        />

        <SelectFilter
          label="Language"
          options={languageOptions}
          selectedTags={selectedLanguages}
          onAddTag={(tag) => setSelectedLanguages((prev) => [...prev, tag])}
          onRemoveTag={(id) =>
            setSelectedLanguages((prev) => prev.filter((t) => t.id !== id))
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
          label="Data center location"
          options={dataCenterOptions}
          selectedTags={selectedDataCenters}
          onAddTag={(tag) => setSelectedDataCenters((prev) => [...prev, tag])}
          onRemoveTag={(id) =>
            setSelectedDataCenters((prev) => prev.filter((t) => t.id !== id))
          }
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
                  onChange={() => setCost(opt as "All" | "Free" | "Paid" | "Discounted")}
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
            style={{
              background: `linear-gradient(
                to right,
                #6B047C 0%,
                #6B047C ${price}%,
                #D1B1D6 ${price}%,
                #D1B1D6 100%
              )`
            }}
            className="w-full h-2 rounded-full appearance-none bg-[#D1B1D6] cursor-pointer focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default CoursesFilters;
