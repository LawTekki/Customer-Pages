import React, { useState } from "react";

interface FilterHeaderProps {
  appliedCount: number;
  onClearAll?: () => void;
}

export const FilterHeader: React.FC<FilterHeaderProps> = ({
  appliedCount,
  onClearAll,
}) => (
  <div className="flex items-center justify-between mb-6 px-4 pt-4">
    <div className="text-base font-medium tracking-[-0.32px]">Filters</div>
    <div className="flex items-center gap-2 rounded bg-[#F0E6F2] px-3 py-1.5">
      <div className="text-[#6B047C] text-sm font-medium">
        {appliedCount} applied
      </div>
      {onClearAll && (
        <button onClick={onClearAll} className="text-[#6B047C] text-sm">
          ×
        </button>
      )}
    </div>
  </div>
);

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
  const available = options.filter((o) => !selectedTags.some((t) => t.id === o.id));

  return (
    <div className="mb-4 px-4">
      <div className="text-sm font-medium mb-2">{label}</div>
      <div className="relative">
        <select
          value=""
          onChange={(e) => {
            const sel = options.find((o) => o.id === e.target.value);
            if (sel) onAddTag(sel);
          }}
          className="w-full h-10 px-3 bg-white border border-[#F2F2F2] rounded text-sm text-[#999] appearance-none"
        >
          <option value="">{placeholder}</option>
          {available.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
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
              className="flex items-center gap-1 px-2 py-1 bg-[#F0E6F2] rounded"
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

interface CoursesFiltersProps {
  onProductChange: (product: string) => void;
}

export const CoursesFilters: React.FC<CoursesFiltersProps> = ({
  onProductChange,
}) => {
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

  const [brand, setBrand] = useState("");
  const [seller, setSeller] = useState("");
  const [dateCreated, setDateCreated] = useState("");
  const [selectedSectors, setSelectedSectors] = useState<Tag[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<Tag[]>([]);
  const [selectedGoverningLaw, setSelectedGoverningLaw] = useState<Tag[]>(
    []
  );
  const [selectedDataCenters, setSelectedDataCenters] = useState<Tag[]>(
    []
  );
  const [version, setVersion] = useState<Tag[]>([]);
  const [cost, setCost] = useState<"All" | "Free" | "Paid" | "Discounted">(
    "All"
  );

  const clearAll = () => {
    setBrand("");
    setSeller("");
    setDateCreated("");
    setSelectedSectors([]);
    setSelectedLanguages([]);
    setSelectedGoverningLaw([]);
    setSelectedDataCenters([]);
    setVersion([]);
    setCost("All");
    setPrice(20);
  };

  const appliedCount = [
    brand,
    seller,
    dateCreated,
    cost !== "All" ? cost : "",
    price !== 20 ? price.toString() : "",
    ...selectedSectors.map((t) => t.label),
    ...selectedLanguages.map((t) => t.label),
    ...selectedGoverningLaw.map((t) => t.label),
    ...selectedDataCenters.map((t) => t.label),
    ...version.map((t) => t.label),
  ].filter(Boolean).length;

  const sliderBackground = `linear-gradient(
    to right,
    #6B047C 0%,
    #6B047C ${(price / 100) * 100}%,
    #D1B1D6 ${(price / 100) * 100}%,
    #D1B1D6 100%
  )`;

  return (
    <div className="w-[360px] bg-[#FBF6FC] text-[#1A011E] pb-4 shadow rounded-b-lg">
      <FilterHeader appliedCount={appliedCount} onClearAll={clearAll} />

      {/* PRODUCT */}
      <div className="px-4 mb-6 bg-white rounded">
        <div className="text-[10px] font-medium uppercase tracking-[-0.2px] mb-2">
          PRODUCT
        </div>
        <div className="flex flex-col">
          {products.map((prod) => (
            <button
              key={prod}
              onClick={() => {
                setSelectedProduct(prod);
                onProductChange(prod);
              }}
              className={`text-left px-3 py-2.5 text-sm font-medium ${
                selectedProduct === prod
                  ? "bg-[#F0E6F2] text-[#6B047C] border-l-2 border-[#6B047C]"
                  : "bg-white text-[#1A011E] hover:bg-[#F0E6F2] hover:border-l-2 hover:border-[#6B047C]"
              }`}
            >
              {prod}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        {/* Brand */}
        <div className="px-4">
          <div className="text-sm font-medium mb-2">Brand</div>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="E.g. Austin Kelaina"
            className="w-full h-10 px-3 bg-white border border-[#F2F2F2] rounded text-sm placeholder:text-[#999]"
          />
        </div>

        {/* Seller */}
        <div className="px-4">
          <div className="text-sm font-medium mb-2">Seller</div>
          <input
            type="text"
            value={seller}
            onChange={(e) => setSeller(e.target.value)}
            placeholder="E.g. Austin Kelaina"
            className="w-full h-10 px-3 bg-white border border-[#F2F2F2] rounded text-sm placeholder:text-[#999]"
          />
        </div>

        {/* Sector */}
        <SelectFilter
          label="Sector"
          options={sectorOptions}
          selectedTags={selectedSectors}
          onAddTag={(t) => setSelectedSectors((p) => [...p, t])}
          onRemoveTag={(id) =>
            setSelectedSectors((p) => p.filter((t) => t.id !== id))
          }
        />

        {/* Version */}
        <SelectFilter
          label="Version"
          options={[]}
          selectedTags={version}
          onAddTag={(t) => setVersion((p) => [...p, t])}
          onRemoveTag={(id) =>
            setVersion((p) => p.filter((t) => t.id !== id))
          }
        />

        {/* Date created */}
        <div className="px-4">
          <div className="text-sm font-medium mb-2">Date created</div>
          <input
            type="text"
            value={dateCreated}
            onChange={(e) => setDateCreated(e.target.value)}
            placeholder="DD/MM/YYYY"
            className="w-full h-10 px-3 bg-white border border-[#F2F2F2] rounded text-sm placeholder:text-[#999]"
          />
        </div>

        {/* Language */}
        <SelectFilter
          label="Language"
          options={languageOptions}
          selectedTags={selectedLanguages}
          onAddTag={(t) => setSelectedLanguages((p) => [...p, t])}
          onRemoveTag={(id) =>
            setSelectedLanguages((p) => p.filter((t) => t.id !== id))
          }
        />

        {/* Governing law */}
        <SelectFilter
          label="Governing law"
          options={governingLawOptions}
          selectedTags={selectedGoverningLaw}
          onAddTag={(t) => setSelectedGoverningLaw((p) => [...p, t])}
          onRemoveTag={(id) =>
            setSelectedGoverningLaw((p) => p.filter((t) => t.id !== id))
          }
        />

        {/* Data center */}
        <SelectFilter
          label="Data center location"
          options={dataCenterOptions}
          selectedTags={selectedDataCenters}
          onAddTag={(t) => setSelectedDataCenters((p) => [...p, t])}
          onRemoveTag={(id) =>
            setSelectedDataCenters((p) => p.filter((t) => t.id !== id))
          }
        />

        {/* Cost */}
        <div className="px-4">
          <div className="text-sm font-medium mb-2">Cost</div>
          <div className="flex flex-wrap gap-4 bg-white py-2.5 px-3 rounded">
            {["All", "Free", "Paid", "Discounted"].map((opt) => (
              <label key={opt} className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="cost"
                  value={opt}
                  checked={cost === opt}
                  onChange={() => setCost(opt as any)}
                  className="w-4 h-4 border-[#F2F2F2] accent-[#6B047C]"
                />
                <span className="text-sm">{opt}</span>
              </label>
            ))}
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
            onChange={(e) => setPrice(+e.target.value)}
            style={{ background: sliderBackground }}
            className="w-full h-1 rounded-lg appearance-none cursor-pointer accent-[#6B047C]"
          />
          <div className="text-sm mt-2">${price}</div>
        </div>
      </div>
    </div>
  );
};

export default CoursesFilters;
