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
    <div className="flex items-center justify-between mb-8 px-4 pt-6">
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
          className="w-full h-10 px-3 bg-white border border-[#F2F2F2] text-sm text-[#999] appearance-none [&:not(:focus)]:rounded-none focus:rounded-none rounded-none"
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
                className="text-[#6B047C] text-sm"
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
    <div className="bg-white">
      <FilterHeader appliedCount={appliedCount} onClearAll={clearAll} />

      <div className="space-y-6">
        <div className="px-4">
          <div className="text-sm font-medium mb-2">Author</div>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Add Author Names"
            className="w-full h-10 px-3 bg-white border border-[#F2F2F2] text-sm text-[#999] rounded-none focus:outline-none focus:border-[#6B047C]"
          />
        </div>

        <div className="px-4">
          <div className="text-sm font-medium mb-2">Brand</div>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="Add Brand Names"
            className="w-full h-10 px-3 bg-white border border-[#F2F2F2] text-sm text-[#999] rounded-none focus:outline-none focus:border-[#6B047C]"
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
              className="w-full h-10 px-3 bg-white border border-[#F2F2F2] text-sm text-[#999] appearance-none rounded-none focus:outline-none focus:border-[#6B047C]"
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
          <div className="flex gap-4">
            {["All", "Free", "Paid"].map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="radio"
                  name="cost"
                  value={option}
                  checked={cost === option}
                  onChange={(e) => setCost(e.target.value)}
                  className="w-4 h-4 text-[#6B047C] border-[#D1B1D6] focus:ring-[#6B047C] rounded-none"
                />
                <span className="ml-2 text-sm text-[#666]">{option}</span>
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
            onChange={(e) => setPrice(parseInt(e.target.value))}
            className="w-full h-1 appearance-none bg-[#D1B1D6] rounded-none cursor-pointer"
            style={{ background: sliderBackground }}
          />
          <div className="text-sm text-[#666] mt-1">${price}</div>
        </div>

        <div className="px-4">
          <div className="text-sm font-medium mb-2">Star ratings</div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setStarRating(star)}
                className={`text-2xl ${
                  star <= starRating ? "text-yellow-400" : "text-[#D1B1D6]"
                }`}
              >
                ★
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};