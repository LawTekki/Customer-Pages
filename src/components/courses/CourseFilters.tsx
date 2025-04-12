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
          className="w-full h-10 px-3 bg-white border border-[#F2F2F2] text-sm text-[#999] appearance-none [&:not(:focus)]:rounded-none focus:rounded-none"
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

const TextInput: React.FC<{ label: string; placeholder: string }> = ({
  label,
  placeholder,
}) => (
  <div className="mb-4 px-4">
    <div className="text-sm font-medium mb-2">{label}</div>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full h-10 px-3 bg-white border border-[#F2F2F2] rounded text-sm text-[#999]"
    />
  </div>
);

interface CourseFiltersProps {
  onViewChange?: (view: string) => void;
}

export const CourseFilters: React.FC<CourseFiltersProps> = ({ onViewChange }) => {
  const [price, setPrice] = useState<number>(0);
  const [selectedProduct, setSelectedProduct] = useState("Courses");
  const products = ["Books", "Templates", "Software", "Courses"];
  const [selectedOrgType, setSelectedOrgType] = useState<Tag[]>([]);
  const [selectedDocType, setSelectedDocType] = useState<Tag[]>([]);
  const [selectedCourseType, setSelectedCourseType] = useState<Tag[]>([]);
  const [selectedSector, setSelectedSector] = useState<Tag[]>([]);
  const [selectedGoverningLaw, setSelectedGoverningLaw] = useState<Tag[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<Tag[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<Tag[]>([]);
  const [selectedOriginationType, setSelectedOriginationType] = useState<Tag[]>([]);
  const [cost, setCost] = useState<string>("All");

  const orgTypeOptions: Tag[] = [
    { id: "1", label: "Public law" },
    { id: "2", label: "Drug law" },
    { id: "3", label: "Drug law" },
  ];

  const docTypeOptions: Tag[] = [
    { id: "1", label: "Slide" },
    { id: "2", label: "Pdf" },
    { id: "3", label: "video" },
    { id: "4", label: "Word document" },
  ];

  const courseTypeOptions: Tag[] = [
    { id: "1", label: "Slide" },
    { id: "2", label: "Pdf" },
    { id: "3", label: "video" },
    { id: "4", label: "Word document" },
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
    { id: "1", label: "Public law" },
    { id: "2", label: "Drug law" },
  ];

  const languageOptions: Tag[] = [
    { id: "1", label: "English" },
    { id: "2", label: "Spanish" },
  ];

  const originationTypeOptions: Tag[] = [
    { id: "1", label: "Freelancer" },
    { id: "2", label: "Law firm" },
    { id: "3", label: "Education body" },
    { id: "4", label: "Barrister chamber" },
  ];

  const clearAll = () => {
    setSelectedOrgType([]);
    setSelectedDocType([]);
    setSelectedCourseType([]);
    setSelectedSector([]);
    setSelectedGoverningLaw([]);
    setSelectedRoles([]);
    setSelectedLanguage([]);
    setSelectedOriginationType([]);
    setCost("All");
    setPrice(0);
  };

  const appliedCount = [
    cost !== "All" ? cost : "",
    price > 0 ? price.toString() : "",
    ...selectedOrgType.map((t) => t.label),
    ...selectedDocType.map((t) => t.label),
    ...selectedCourseType.map((t) => t.label),
    ...selectedSector.map((t) => t.label),
    ...selectedGoverningLaw.map((t) => t.label),
    ...selectedRoles.map((t) => t.label),
    ...selectedLanguage.map((t) => t.label),
    ...selectedOriginationType.map((t) => t.label),
  ]
    .filter(Boolean)
    .length;

  const sliderBackground = `linear-gradient(to right, #6B047C 0%, #6B047C ${(price / 100) *
    100}%, #D1B1D6 ${(price / 100) * 100}%, #D1B1D6 100%)`;

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
    <div className="w-[280px] bg-[#F4EDF5] rounded-t-[1rem] text-[#1A011E] pb-4">
      <FilterHeader appliedCount={appliedCount} onClearAll={clearAll} />

      {/* PRODUCT Section */}
      <div className="px-4 mb-6 bg-white">
        <div className="text-[10px] uppercase font-medium text-[#666666] mb-2">
          PRODUCT
        </div>
        <div className="flex flex-col">
          {products.map((product) => (
            <button
              key={product}
              onClick={() => handleProductClick(product)}
              className={`text-left px-3 py-2.5 text-sm font-medium rounded-none ${
                selectedProduct === product
                  ? "bg-[#F0E6F2] text-[#6B047C] border-l-2 border-[#6B047C]"
                  : "bg-white text-[#1A011E] hover:bg-[#F0E6F2] hover:border-l-2 hover:border-[#6B047C]"
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

      <div className="space-y-5">
        <TextInput label="Seller" placeholder="E.g Austin Kelana" />
        <TextInput label="Offer" placeholder="E.g Austin Kelana" />

        <SelectFilter
          label="Organization type"
          options={orgTypeOptions}
          selectedTags={selectedOrgType}
          onAddTag={(tag) => setSelectedOrgType((prev) => [...prev, tag])}
          onRemoveTag={(id) =>
            setSelectedOrgType((prev) => prev.filter((t) => t.id !== id))
          }
        />

        <SelectFilter
          label="Document type"
          options={docTypeOptions}
          selectedTags={selectedDocType}
          onAddTag={(tag) => setSelectedDocType((prev) => [...prev, tag])}
          onRemoveTag={(id) =>
            setSelectedDocType((prev) => prev.filter((t) => t.id !== id))
          }
        />

        <SelectFilter
          label="Course type"
          options={courseTypeOptions}
          selectedTags={selectedCourseType}
          onAddTag={(tag) => setSelectedCourseType((prev) => [...prev, tag])}
          onRemoveTag={(id) =>
            setSelectedCourseType((prev) => prev.filter((t) => t.id !== id))
          }
        />

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
          label="Governing law"
          options={governingLawOptions}
          selectedTags={selectedGoverningLaw}
          onAddTag={(tag) => setSelectedGoverningLaw((prev) => [...prev, tag])}
          onRemoveTag={(id) =>
            setSelectedGoverningLaw((prev) => prev.filter((t) => t.id !== id))
          }
        />

        <SelectFilter
          label="Roles"
          options={rolesOptions}
          selectedTags={selectedRoles}
          onAddTag={(tag) => setSelectedRoles((prev) => [...prev, tag])}
          onRemoveTag={(id) =>
            setSelectedRoles((prev) => prev.filter((t) => t.id !== id))
          }
        />

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
          label="Origination type"
          options={originationTypeOptions}
          selectedTags={selectedOriginationType}
          onAddTag={(tag) => setSelectedOriginationType((prev) => [...prev, tag])}
          onRemoveTag={(id) =>
            setSelectedOriginationType((prev) => prev.filter((t) => t.id !== id))
          }
        />

        <div className="px-4">
          <div className="text-sm font-medium mb-2">Date created</div>
          <input
            type="text"
            placeholder="DD/MM/YYYY"
            className="w-full h-10 px-3 bg-white border border-[#F2F2F2] rounded text-sm text-[#999]"
          />
        </div>

        <div className="px-4">
          <div className="text-sm font-medium mb-2">Cost</div>
          <div className="py-2.5 px-3 bg-white rounded">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {["All", "Free", "Paid", "Discounted"].map((opt) => (
                <label key={opt} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="cost"
                    value={opt}
                    checked={cost === opt}
                    onChange={() => setCost(opt)}
                    className="w-4 h-4 border-gray-300 accent-[#6B047C]"
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
            className="w-full h-1 rounded-lg appearance-none cursor-pointer accent-[#6B047C]"
          />
          <div className="text-xs mt-2">${price}</div>
        </div>
      </div>
    </div>
  );
}; 