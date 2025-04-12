import React, { useState } from "react";
import { Lawyer } from "@/types/lawyer";

interface Tag {
  id: string;
  label: string;
}

interface FilterHeaderProps {
  appliedCount: number;
  onClearAll?: () => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const FilterHeader: React.FC<FilterHeaderProps> = ({
  appliedCount,
  onClearAll,
  selectedCategory,
  onCategoryChange,
}) => {
  const categories = ["Books", "Templates", "Softwares", "Courses"];

  return (
    <div className="flex flex-col gap-4 mb-8 px-4 pt-6">
      <div className="flex items-center justify-between">
        <div className="text-base font-medium tracking-[-0.32px]">Filters</div>
        {appliedCount > 0 && (
          <div className="flex items-center gap-2 bg-[#F0E6F2] px-3 py-1.5">
            <div className="text-[#6B047C] text-sm">{appliedCount} applied</div>
            {onClearAll && (
              <button onClick={onClearAll} className="text-[#6B047C]">
                ×
              </button>
            )}
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 text-sm rounded-none transition-colors ${
              selectedCategory === category
                ? "bg-[#6B047C] text-white"
                : "bg-white text-[#1A011E] hover:bg-[#F0E6F2]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
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
  placeholder = "- select -",
}) => {
  const availableOptions = options.filter(
    (opt) => !selectedTags.find((t) => t.id === opt.id)
  );

  return (
    <div className="mb-4 px-4">
      <div className="text-sm font-medium mb-2">{label}</div>
      <div className="relative">
        <select
          value=""
          onChange={(e) => {
            const selected = options.find((o) => o.id === e.target.value);
            if (selected) onAddTag(selected);
          }}
          className="w-full h-10 px-3 bg-white border border-[#F2F2F2] text-sm text-[#999] appearance-none rounded-none hover:border-[#6B047C] focus:outline-none focus:border-[#6B047C]"
        >
          <option value="">{placeholder}</option>
          {availableOptions.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 4L6 8L10 4" stroke="#999" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      {selectedTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {selectedTags.map((tag) => (
            <div
              key={tag.id}
              className="flex items-center gap-1 px-2 py-1 bg-[#F0E6F2] rounded-none"
            >
              <span className="text-[#6B047C] text-sm">{tag.label}</span>
              <button
                onClick={() => onRemoveTag(tag.id)}
                className="text-[#6B047C] text-sm hover:text-[#4a0356]"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

interface LawyerFiltersProps {
  lawyers: Lawyer[];
  onFilterChange: (filters: any) => void;
  onCategoryChange?: (category: string) => void;
}

export const LawyerFilters: React.FC<LawyerFiltersProps> = ({
  lawyers,
  onFilterChange,
  onCategoryChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Books");
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

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  return (
    <div className="w-[280px] bg-[#F4EDF5] text-[#1A011E] pb-4">
      <FilterHeader
        appliedCount={appliedCount}
        onClearAll={clearAll}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

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
            className="w-full h-10 px-3 bg-white border border-[#F2F2F2] text-sm placeholder:text-[#999] rounded-none hover:border-[#6B047C] focus:outline-none focus:border-[#6B047C]"
          />
        </div>

        <div className="px-4">
          <div className="text-sm font-medium mb-2">Brand</div>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="E.g Austin Kelaina"
            className="w-full h-10 px-3 bg-white border border-[#F2F2F2] text-sm placeholder:text-[#999] rounded-none hover:border-[#6B047C] focus:outline-none focus:border-[#6B047C]"
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
          <div className="text-sm font-medium mb-2">Date</div>
          <input
            type="date"
            value={dateCreated}
            onChange={(e) => setDateCreated(e.target.value)}
            className="w-full h-10 px-3 bg-white border border-[#F2F2F2] text-sm text-[#999] rounded-none focus:outline-none focus:border-[#6B047C]"
          />
        </div>

        <div className="px-4">
          <div className="text-sm font-medium mb-2">Version</div>
          <div className="relative">
            <select
              value={version}
              onChange={(e) => setVersion(e.target.value)}
              className="w-full h-10 px-3 bg-white border border-[#F2F2F2] text-sm text-[#999] appearance-none rounded-none hover:border-[#6B047C] focus:outline-none focus:border-[#6B047C]"
            >
              <option value="">Select version</option>
              <option value="1">Version 1</option>
              <option value="2">Version 2</option>
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 4L6 8L10 4" stroke="#999" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>

        <div className="px-4">
          <div className="text-sm font-medium mb-2">Cost</div>
          <div className="py-2.5 px-3 bg-white rounded-none">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {["All", "Free", "Paid", "Discounted"].map((opt) => (
                <label key={opt} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="cost"
                    value={opt}
                    checked={cost === opt}
                    onChange={() => setCost(opt)}
                    className="w-4 h-4 border-gray-300 accent-[#6B047C] rounded-none"
                  />
                  <span className="ml-2 text-sm">{opt}</span>
                </label>
              ))}
            </div>
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
            className="w-full h-1 appearance-none cursor-pointer accent-[#6B047C] rounded-none"
          />
          <div className="text-xs mt-2">${price}</div>
        </div>

        <div className="px-4">
          <div className="text-sm font-medium mb-2">Star ratings</div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className="text-2xl text-[#FFD700]"
                onClick={() => setStarRating(star)}
              >
                {star <= starRating ? "★" : "☆"}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};