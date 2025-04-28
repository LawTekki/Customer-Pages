import React, { useState } from "react";
import { EventFilters } from "../events/EventFilters";
import { LawyerFilters } from "../lawyer/LawyerFilters";

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

interface ProductFiltersProps {
  onViewChange?: (view: string) => void;
  activeTab?: string;
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

export const ProductFilters: React.FC<ProductFiltersProps> = ({ onViewChange, activeTab }) => {
  const [price, setPrice] = useState<number>(0);
  const [starRating, setStarRating] = useState<number>(0);
  const [author, setAuthor] = useState<string>("");
  const [seller, setSeller] = useState<string>("");
  const [publishDate, setPublishDate] = useState<string>("");
  const [condition, setCondition] = useState<'new' | 'used'>('new');
  const [cost, setCost] = useState<'all' | 'free' | 'paid' | 'discounted'>('all');
  const [date, setDate] = useState<'today' | 'free' | 'paid'>('today');
  const [selectedProduct, setSelectedProduct] = useState("Books");
  const products = ["Books", "Templates", "Software", "Courses"];

  const getAppliedFiltersCount = () => {
    let count = 0;
    if (author) count++;
    if (seller) count++;
    if (publishDate) count++;
    if (selectedSectorTags.length > 0) count++;
    if (selectedGovLawTags.length > 0) count++;
    if (selectedLanguageTags.length > 0) count++;
    if (selectedBookTypeTags.length > 0) count++;
    if (condition !== 'new') count++;
    if (cost !== 'all') count++;
    if (date !== 'today') count++;
    if (price > 0) count++;
    if (starRating > 0) count++;
    return count;
  };

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

  const templateTypeOptions: Tag[] = [
    { id: "1", label: "Contract" },
    { id: "2", label: "Will" },
    { id: "3", label: "License" },
    { id: "4", label: "Policy" },
    { id: "5", label: "Notice" },
    { id: "6", label: "Disclaimer" },
  ];

  const sectorOptions: Tag[] = [
    { id: "1", label: "Public law" },
    { id: "2", label: "Drug law" },
    { id: "3", label: "Drug law" },
  ];

  const governingLawOptions: Tag[] = [
    { id: "1", label: "Public law" },
    { id: "2", label: "Drug law" },
  ];

  const rolesOptions: Tag[] = [
    { id: "1", label: "Freelancer" },
    { id: "2", label: "Law firm" },
    { id: "3", label: "Education body" },
    { id: "4", label: "Barrister chamber" },
  ];

  const languageOptions: Tag[] = [
    { id: "1", label: "English" },
    { id: "2", label: "Spanish" },
  ];

  const bookTypeOptions: Tag[] = [
    { id: "1", label: "E-book" },
    { id: "2", label: "Audio" },
    { id: "3", label: "Hard copy" },
  ];

  const [selectedSectorTags, setSelectedSectorTags] = useState<Tag[]>([]);
  const [selectedGovLawTags, setSelectedGovLawTags] = useState<Tag[]>([]);
  const [selectedLanguageTags, setSelectedLanguageTags] = useState<Tag[]>([]);
  const [selectedBookTypeTags, setSelectedBookTypeTags] = useState<Tag[]>([]);
  const [selectedTemplateTypeTags, setSelectedTemplateTypeTags] = useState<Tag[]>([]);
  const [selectedRolesTags, setSelectedRolesTags] = useState<Tag[]>([]);
  const [deliveryTime, setDeliveryTime] = useState<'24hrs' | '48hrs' | '72hrs'>('24hrs');

  const appliedCount = [
    author ? 1 : 0,
    seller ? 1 : 0,
    publishDate ? 1 : 0,
    selectedSectorTags.length,
    selectedGovLawTags.length,
    selectedLanguageTags.length,
    selectedBookTypeTags.length
  ].reduce((sum, count) => sum + count, 0);

  const clearAllFilters = () => {
    setAuthor("");
    setSeller("");
    setPublishDate("");
    setSelectedSectorTags([]);
    setSelectedGovLawTags([]);
    setSelectedLanguageTags([]);
    setSelectedBookTypeTags([]);
  };

  if (activeTab === "Event") {
    return <EventFilters onViewChange={onViewChange} />;
  }
  if (activeTab === "Talent") {
    // Render LawyerFilters for Talent tab. Pass empty lawyers array and a no-op onFilterChange to avoid errors.
    return <LawyerFilters lawyers={[]} onFilterChange={() => {}} />;
  }

  return (
    <div className="w-[280px] text-[#1A011E] pb-4 bg-[#F4EDF5]">
      <FilterHeader
        appliedCount={getAppliedFiltersCount()}
        onClearAll={() => {
          setAuthor("");
          setSeller("");
          setPublishDate("");
          setSelectedSectorTags([]);
          setSelectedGovLawTags([]);
          setSelectedLanguageTags([]);
          setSelectedBookTypeTags([]);
          setCondition('new');
          setCost('all');
          setDate('today');
          setPrice(0);
          setStarRating(0);
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
        <div className="px-4">
          <div className="text-sm font-medium mb-2">Author</div>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="E.g Austin Kelsay"
            className="w-full h-10 px-3 bg-white border border-[#F2F2F2] text-sm text-[#999] appearance-none rounded-md hover:border-[#6B047C] focus:outline-none focus:border-[#6B047C] shadow-sm"
          />
        </div>

        <div className="px-4">
          <div className="text-sm font-medium mb-2">Seller</div>
          <input
            type="text"
            value={seller}
            onChange={(e) => setSeller(e.target.value)}
            placeholder="E.g Austin Kelsay"
            className="w-full h-10 px-3 bg-white border border-[#F2F2F2] text-sm text-[#999] appearance-none rounded-md hover:border-[#6B047C] focus:outline-none focus:border-[#6B047C] shadow-sm"
          />
        </div>

        <div className="px-4">
          <div className="text-sm font-medium mb-2">Publish date</div>
          <input
            type="text"
            value={publishDate}
            onChange={(e) => setPublishDate(e.target.value)}
            placeholder="DD/MM/YYYY"
            className="w-full h-10 px-3 bg-white border border-[#F2F2F2] text-sm text-[#999] appearance-none rounded-md hover:border-[#6B047C] focus:outline-none focus:border-[#6B047C] shadow-sm"
          />
        </div>

        {selectedProduct === "Books" ? (
          <SelectFilter
            label="Sector"
            options={sectorOptions}
            selectedTags={selectedSectorTags}
            onAddTag={(tag) => setSelectedSectorTags((prev) => [...prev, tag])}
            onRemoveTag={(id) => setSelectedSectorTags((prev) => prev.filter((t) => t.id !== id))}
          />
        ) : selectedProduct === "Templates" ? (
          <>
            <SelectFilter
              label="Template type"
              options={templateTypeOptions}
              selectedTags={selectedTemplateTypeTags}
              onAddTag={(tag) => setSelectedTemplateTypeTags((prev) => [...prev, tag])}
              onRemoveTag={(id) => setSelectedTemplateTypeTags((prev) => prev.filter((t) => t.id !== id))}
            />
            <SelectFilter
              label="Roles"
              options={rolesOptions}
              selectedTags={selectedRolesTags}
              onAddTag={(tag) => setSelectedRolesTags((prev) => [...prev, tag])}
              onRemoveTag={(id) => setSelectedRolesTags((prev) => prev.filter((t) => t.id !== id))}
            />
          </>
        ) : null}

        <SelectFilter
          label="Governing law"
          options={governingLawOptions}
          selectedTags={selectedGovLawTags}
          onAddTag={(tag) => setSelectedGovLawTags((prev) => [...prev, tag])}
          onRemoveTag={(id) => setSelectedGovLawTags((prev) => prev.filter((t) => t.id !== id))}
        />

        <SelectFilter
          label="Language"
          options={languageOptions}
          selectedTags={selectedLanguageTags}
          onAddTag={(tag) => setSelectedLanguageTags((prev) => [...prev, tag])}
          onRemoveTag={(id) => setSelectedLanguageTags((prev) => prev.filter((t) => t.id !== id))}
        />

        {selectedProduct === "Books" && (
          <SelectFilter
            label="Book type"
            options={bookTypeOptions}
            selectedTags={selectedBookTypeTags}
            onAddTag={(tag) => setSelectedBookTypeTags((prev) => [...prev, tag])}
            onRemoveTag={(id) => setSelectedBookTypeTags((prev) => prev.filter((t) => t.id !== id))}
          />
        )}

        {selectedProduct === "Templates" && (
          <div className="px-4">
            <div className="text-sm font-medium mb-2">Delivery time</div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={deliveryTime === '24hrs'}
                  onChange={() => setDeliveryTime('24hrs')}
                  className="w-4 h-4 accent-[#6B047C] border-[#D1B1D6] focus:ring-[#6B047C]"
                />
                <span className="text-sm">24 hrs</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={deliveryTime === '48hrs'}
                  onChange={() => setDeliveryTime('48hrs')}
                  className="w-4 h-4 accent-[#6B047C] border-[#D1B1D6] focus:ring-[#6B047C]"
                />
                <span className="text-sm">48 hrs</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={deliveryTime === '72hrs'}
                  onChange={() => setDeliveryTime('72hrs')}
                  className="w-4 h-4 accent-[#6B047C] border-[#D1B1D6] focus:ring-[#6B047C]"
                />
                <span className="text-sm">72 hrs</span>
              </label>
            </div>
          </div>
        )}

        {/* Condition Radio Buttons */}
        <div className="px-4">
          <div className="text-sm font-medium mb-2">Condition</div>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={condition === 'new'}
                onChange={() => setCondition('new')}
                className="w-4 h-4 accent-[#6B047C] border-[#D1B1D6] focus:ring-[#6B047C]"
              />
              <span className="text-sm">New</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={condition === 'used'}
                onChange={() => setCondition('used')}
                className="w-4 h-4 accent-[#6B047C] border-[#D1B1D6] focus:ring-[#6B047C]"
              />
              <span className="text-sm">Used</span>
            </label>
          </div>
        </div>

        {/* Cost Radio Buttons */}
        <div className="px-4">
          <div className="text-sm font-medium mb-2">Cost</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={cost === 'all'}
                onChange={() => setCost('all')}
                className="w-4 h-4 accent-[#6B047C] border-[#D1B1D6] focus:ring-[#6B047C]"
              />
              <span className="text-sm">All</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={cost === 'free'}
                onChange={() => setCost('free')}
                className="w-4 h-4 accent-[#6B047C] border-[#D1B1D6] focus:ring-[#6B047C]"
              />
              <span className="text-sm">Free</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={cost === 'paid'}
                onChange={() => setCost('paid')}
                className="w-4 h-4 accent-[#6B047C] border-[#D1B1D6] focus:ring-[#6B047C]"
              />
              <span className="text-sm">Paid</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={cost === 'discounted'}
                onChange={() => setCost('discounted')}
                className="w-4 h-4 accent-[#6B047C] border-[#D1B1D6] focus:ring-[#6B047C]"
              />
              <span className="text-sm">Discounted</span>
            </label>
          </div>
        </div>

        {/* Date Radio Buttons */}
        <div className="px-4">
          <div className="text-sm font-medium mb-2">Date</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={date === 'today'}
                onChange={() => setDate('today')}
                className="w-4 h-4 accent-[#6B047C] border-[#D1B1D6] focus:ring-[#6B047C]"
              />
              <span className="text-sm">Today</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={date === 'free'}
                onChange={() => setDate('free')}
                className="w-4 h-4 accent-[#6B047C] border-[#D1B1D6] focus:ring-[#6B047C]"
              />
              <span className="text-sm">Free</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={date === 'paid'}
                onChange={() => setDate('paid')}
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
              background: `linear-gradient(to right, #6B047C 0%, #6B047C ${(price)}%, #D1B1D6 ${(price)}%, #D1B1D6 100%)`
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