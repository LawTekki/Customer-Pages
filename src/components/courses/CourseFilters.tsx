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
  placeholder = "Search or select...",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = searchTerm
    ? options.filter((opt) =>
        opt.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  const availableOptions = filteredOptions.filter(
    (opt) => !selectedTags.some((t) => t.id === opt.id)
  );

  const handleAddTag = (tag: Tag) => {
    if (!selectedTags.find((t) => t.id === tag.id)) {
      onAddTag(tag);
      setSearchTerm("");
      setIsOpen(false);
    }
  };

  return (
    <div className="mb-4 px-4">
      <div className="text-sm font-medium mb-2">{label}</div>
      <div ref={dropdownRef} className="relative">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onClick={() => setIsOpen(true)}
            placeholder={placeholder}
            className="
              w-full h-10 px-3 bg-white border border-[#F2F2F2] text-sm text-[#999]
              rounded-md hover:border-[#6B047C] focus:outline-none focus:border-[#6B047C] shadow-sm
              cursor-text
            "
          />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#6B047C] focus:outline-none cursor-pointer"
            aria-label="Toggle dropdown"
          >
            <svg
              className={`w-5 h-5 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

        {selectedTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2 mt-2 px-1">
            {selectedTags.map((tag) => (
              <div
                key={tag.id}
                className="
                  flex items-center gap-1 px-2 py-1 bg-[#F0E6F2]
                  rounded-md shadow-sm hover:bg-[#D8B4E2] transition-colors text-[#6B047C] text-sm font-medium
                  cursor-default
                "
              >
                <span>{tag.label}</span>
                <button
                  onClick={() => onRemoveTag(tag.id)}
                  className="text-[#6B047C] hover:text-[#4A0356] transition-colors cursor-pointer"
                  aria-label={`Remove ${tag.label}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {isOpen && availableOptions.length > 0 && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
            {availableOptions.map((opt) => (
              <div
                key={opt.id}
                onClick={() => handleAddTag(opt)}
                className="px-3 py-2 text-sm cursor-pointer hover:bg-[#F4EDF5]"
              >
                {opt.label}
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
      className="
        w-full h-10 px-3 bg-white border border-[#F2F2F2] text-sm text-[#999]
        rounded-md hover:border-[#6B047C] focus:outline-none focus:border-[#6B047C] shadow-sm
        cursor-text
      "
    />
  </div>
);

interface CourseFiltersProps {
  onViewChange?: (view: string) => void;
}

export const CourseFilters: React.FC<CourseFiltersProps> = ({ onViewChange }) => {
  const [price, setPrice] = useState(0);
  const [starRating, setStarRating] = useState(0);
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
  const [cost, setCost] = useState<"All" | "Free" | "Paid" | "Discounted">("All");

  const orgTypeOptions: Tag[] = [
    { id: "1", label: "Public law" },
    { id: "2", label: "Drug law" },
    { id: "3", label: "Corporate law" },
  ];
  const docTypeOptions: Tag[] = [
    { id: "1", label: "Slide" },
    { id: "2", label: "PDF" },
    { id: "3", label: "Video" },
    { id: "4", label: "Word document" },
  ];
  const courseTypeOptions: Tag[] = [
    { id: "1", label: "Self‑paced" },
    { id: "2", label: "Instructor‑led" },
    { id: "3", label: "Workshop" },
    { id: "4", label: "Webinar" },
  ];
  const sectorOptions: Tag[] = [
    { id: "1", label: "Public law" },
    { id: "2", label: "Drug law" },
    { id: "3", label: "Corporate law" },
  ];
  const governingLawOptions: Tag[] = [
    { id: "1", label: "Federal" },
    { id: "2", label: "State" },
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
    setStarRating(0);
  };

  const appliedCount = [
    cost !== "All" ? cost : "",
    price > 0 ? price.toString() : "",
    starRating > 0 ? starRating.toString() : "",
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

  const sliderBackground = `linear-gradient(
    to right,
    #6B047C 0%,
    #6B047C ${price}%,
    #D1B1D6 ${price}%,
    #D1B1D6 100%
  )`;

  const handleProductClick = (product: string) => {
    setSelectedProduct(product);
    onViewChange?.(
      product === "Templates"
        ? "templates"
        : product === "Software"
        ? "software"
        : product === "Courses"
        ? "courses"
        : "products"
    );
  };

  return (
    <div className="w-[280px] bg-[#F4EDF5] rounded-t-[1rem] text-[#1A011E] pb-4">
      <FilterHeader appliedCount={appliedCount} onClearAll={clearAll} />

      {/* PRODUCT */}
      <div className="px-4 mb-6 bg-[#F4EDF5]">
        <div className="text-[10px] uppercase font-medium text-[#666666] mb-2">
          PRODUCT
        </div>
        <div className="flex flex-col">
          {products.map((prod) => (
            <button
              key={prod}
              onClick={() => handleProductClick(prod)}
              className={`text-left px-3 py-2.5 text-sm font-medium rounded-none transition-colors duration-200 cursor-pointer ${
                selectedProduct === prod
                  ? "text-[#6B047C] bg-white border-l-2 border-[#6B047C] font-semibold"
                  : "text-[#1A011E] hover:text-[#6B047C] hover:bg-white hover:border-l-2 hover:border-[#6B047C]"
              }`}
            >
              {prod}
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
          onAddTag={(tag) => setSelectedOrgType((p) => [...p, tag])}
          onRemoveTag={(id) =>
            setSelectedOrgType((p) => p.filter((t) => t.id !== id))
          }
        />

        <SelectFilter
          label="Document type"
          options={docTypeOptions}
          selectedTags={selectedDocType}
          onAddTag={(tag) => setSelectedDocType((p) => [...p, tag])}
          onRemoveTag={(id) =>
            setSelectedDocType((p) => p.filter((t) => t.id !== id))
          }
        />

        <SelectFilter
          label="Course type"
          options={courseTypeOptions}
          selectedTags={selectedCourseType}
          onAddTag={(tag) => setSelectedCourseType((p) => [...p, tag])}
          onRemoveTag={(id) =>
            setSelectedCourseType((p) => p.filter((t) => t.id !== id))
          }
        />

        <SelectFilter
          label="Sector"
          options={sectorOptions}
          selectedTags={selectedSector}
          onAddTag={(tag) => setSelectedSector((p) => [...p, tag])}
          onRemoveTag={(id) =>
            setSelectedSector((p) => p.filter((t) => t.id !== id))
          }
        />

        <SelectFilter
          label="Governing law"
          options={governingLawOptions}
          selectedTags={selectedGoverningLaw}
          onAddTag={(tag) => setSelectedGoverningLaw((p) => [...p, tag])}
          onRemoveTag={(id) =>
            setSelectedGoverningLaw((p) => p.filter((t) => t.id !== id))
          }
        />

        <SelectFilter
          label="Roles"
          options={rolesOptions}
          selectedTags={selectedRoles}
          onAddTag={(tag) => setSelectedRoles((p) => [...p, tag])}
          onRemoveTag={(id) =>
            setSelectedRoles((p) => p.filter((t) => t.id !== id))
          }
        />

        <SelectFilter
          label="Language"
          options={languageOptions}
          selectedTags={selectedLanguage}
          onAddTag={(tag) => setSelectedLanguage((p) => [...p, tag])}
          onRemoveTag={(id) =>
            setSelectedLanguage((p) => p.filter((t) => t.id !== id))
          }
        />

        <SelectFilter
          label="Origination type"
          options={originationTypeOptions}
          selectedTags={selectedOriginationType}
          onAddTag={(tag) => setSelectedOriginationType((p) => [...p, tag])}
          onRemoveTag={(id) =>
            setSelectedOriginationType((p) => p.filter((t) => t.id !== id))
          }
        />

        {/* Date created */}
        <div className="px-4">
          <div className="text-sm font-medium mb-2">Date created</div>
          <input
            type="text"
            placeholder="DD/MM/YYYY"
            className="
              w-full h-10 px-3 bg-white border border-[#F2F2F2] text-sm text-[#999]
              rounded-md hover:border-[#6B047C] focus:outline-none focus:border-[#6B047C] shadow-sm
              cursor-text
            "
          />
        </div>

        {/* Cost */}
        <div className="px-4">
          <div className="text-sm font-medium mb-2">Cost</div>
          <div className="py-2.5 px-3 bg-white rounded-md shadow-sm">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {["All", "Free", "Paid", "Discounted"].map((opt) => (
                <label key={opt} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="cost"
                    value={opt}
                    checked={cost === opt}
                    onChange={() => setCost(opt as any)}
                    className="w-4 h-4 accent-[#6B047C] border-[#D1B1D6] focus:ring-[#6B047C] cursor-pointer"
                  />
                  <span className="text-sm">{opt}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Price range */}
        <div className="px-4">
          <div className="text-sm font-medium mb-2">Price range</div>
          <input
            type="range"
            min="0"
            max="100"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            style={{ background: sliderBackground }}
            className="
              w-full h-1 bg-[#F0E6F2] appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-[#6B047C] [&::-webkit-slider-thumb]:border-0
              [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3
              [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full
              [&::-moz-range-thumb]:bg-[#6B047C] [&::-moz-range-thumb]:border-0
            "
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
                className={`
                  text-lg hover:text-[#6B047C] transition-colors cursor-pointer
                  ${rating <= starRating ? "opacity-100" : "opacity-30"}
                `}
                aria-label={`${rating} stars`}
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
