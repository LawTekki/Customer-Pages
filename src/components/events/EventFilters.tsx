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
      <div className="flex items-center gap-2 bg-[#F0E6F2] px-3 py-1.5">
        <div className="text-[#6B047C] text-sm font-medium">{appliedCount} applied</div>
        {onClearAll && (
          <button onClick={onClearAll} className="text-[#6B047C]">
            ×
          </button>
        )}
      </div>
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

export const EventFilters: React.FC = () => {
  const [price, setPrice] = useState<number>(0);
  const [author, setAuthor] = useState<string>("");
  const [seller, setSeller] = useState<string>("");
  const [eventType, setEventType] = useState<Tag[]>([]);
  const [location, setLocation] = useState<Tag[]>([]);
  const [date, setDate] = useState<string>("");
  const [availableSeats, setAvailableSeats] = useState<string>("All");
  const [starRating, setStarRating] = useState<number>(0);

  // Example options - replace with real data
  const eventTypeOptions: Tag[] = [
    { id: "1", label: "Conference" },
    { id: "2", label: "Workshop" },
    { id: "3", label: "Seminar" },
    { id: "4", label: "Webinar" },
  ];

  const locationOptions: Tag[] = [
    { id: "1", label: "Virtual" },
    { id: "2", label: "In-person" },
    { id: "3", label: "Hybrid" },
  ];

  const clearAll = () => {
    setAuthor("");
    setSeller("");
    setEventType([]);
    setLocation([]);
    setDate("");
    setAvailableSeats("All");
    setPrice(0);
    setStarRating(0);
  };

  const appliedCount = [
    author,
    seller,
    availableSeats !== "All" ? availableSeats : "",
    price > 0 ? price.toString() : "",
    ...eventType.map((t) => t.label),
    ...location.map((t) => t.label),
    date,
  ].filter(Boolean).length;

  const sliderBackground = `linear-gradient(to right, #6B047C 0%, #6B047C ${(price / 100) *
    100}%, #D1B1D6 ${(price / 100) * 100}%, #D1B1D6 100%)`;

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
            className="w-full h-10 px-3 bg-white border border-[#F2F2F2] rounded text-sm placeholder:text-[#999]"
          />
        </div>

        <div className="px-4">
          <div className="text-sm font-medium mb-2">Seller</div>
          <input
            type="text"
            value={seller}
            onChange={(e) => setSeller(e.target.value)}
            placeholder="E.g Austin Kelaina"
            className="w-full h-10 px-3 bg-white border border-[#F2F2F2] rounded text-sm placeholder:text-[#999]"
          />
        </div>

        <SelectFilter
          label="Event type"
          options={eventTypeOptions}
          selectedTags={eventType}
          onAddTag={(tag) => setEventType((prev) => [...prev, tag])}
          onRemoveTag={(id) =>
            setEventType((prev) => prev.filter((t) => t.id !== id))
          }
        />

        <SelectFilter
          label="Location"
          options={locationOptions}
          selectedTags={location}
          onAddTag={(tag) => setLocation((prev) => [...prev, tag])}
          onRemoveTag={(id) =>
            setLocation((prev) => prev.filter((t) => t.id !== id))
          }
        />

        <div className="px-4">
          <div className="text-sm font-medium mb-2">Date</div>
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="DD/MM/YYYY"
            className="w-full h-10 px-3 bg-white border border-[#F2F2F2] rounded text-sm placeholder:text-[#999]"
          />
        </div>

        <div className="px-4">
          <div className="text-sm font-medium mb-2">Available seats</div>
          <div className="py-2.5 px-3 bg-white rounded-none">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {["All", "Limited", "Sold out"].map((opt) => (
                <label key={opt} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="seats"
                    value={opt}
                    checked={availableSeats === opt}
                    onChange={() => setAvailableSeats(opt)}
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