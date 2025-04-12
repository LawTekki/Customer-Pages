import React, { useState } from "react";
import { TemplateCard } from "./TemplateCard";
import { TemplateControls } from "./TemplateControls";

const templateData = [
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/ccc888c51683b2fc88b67476579e64734949efa1?placeholderIfAbsent=true",
    title: "Tenancy agreement",
    category: "Business Law | Creative Law | Huma....",
    price: "$50",
    copiesLeft: 32,
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/5e39963073320b4c8b7f189f2ca2d00c88bb5619?placeholderIfAbsent=true",
    title: "Tenancy agreement",
    category: "Business Law | Creative Law | Huma....",
    price: "$50",
    copiesLeft: 32,
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/7f77b15962b0989ea0d94d55c76720e7fa21a5c7?placeholderIfAbsent=true",
    title: "Tenancy agreement",
    category: "Business Law | Creative Law | Huma....",
    price: "$50",
    copiesLeft: 32,
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/8ec25d47e94e7835f4627fa7c2ff9c2d6c48d245?placeholderIfAbsent=true",
    title: "Tenancy agreement",
    category: "Business Law | Creative Law | Huma....",
    price: "$50",
    copiesLeft: 32,
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/4eaa93d3aa4b78e311628709929ab6543f4c7f37?placeholderIfAbsent=true",
    title: "Tenancy agreement",
    category: "Business Law | Creative Law | Huma....",
    price: "$50",
    copiesLeft: 32,
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/5218de26a62e2f57b8328b64c833bccd91aea99c?placeholderIfAbsent=true",
    title: "Tenancy agreement",
    category: "Business Law | Creative Law | Huma....",
    price: "$50",
    copiesLeft: 32,
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/7e29a5159c3a1029e2908705b79f85d60f937728?placeholderIfAbsent=true",
    title: "Tenancy agreement",
    category: "Business Law | Creative Law | Huma....",
    price: "$50",
    copiesLeft: 32,
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/0a95daf39939b660fd48b20b232435267eb8288e?placeholderIfAbsent=true",
    title: "Tenancy agreement",
    category: "Business Law | Creative Law | Huma....",
    price: "$50",
    copiesLeft: 32,
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/e5983fd0451bcb69f33823af538454a3089b5f22?placeholderIfAbsent=true",
    title: "Tenancy agreement",
    category: "Business Law | Creative Law | Huma....",
    price: "$50",
    copiesLeft: 32,
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/7c0e992e80dc823349f261ee5136f4450dc8d7fb?placeholderIfAbsent=true",
    title: "Tenancy agreement",
    category: "Business Law | Creative Law | Huma....",
    price: "$50",
    copiesLeft: 32,
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/4337f5f5ceccfa2d10720c362827c2d64d028603?placeholderIfAbsent=true",
    title: "Tenancy agreement",
    category: "Business Law | Creative Law | Huma....",
    price: "$50",
    copiesLeft: 32,
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/b3af7e94bb0c605f8a40d429c311e066b137e4b3?placeholderIfAbsent=true",
    title: "Tenancy agreement",
    category: "Business Law | Creative Law | Huma....",
    price: "$50",
    copiesLeft: 32,
  },
];

interface TemplateGridProps {
  viewMode?: "grid" | "list";
}

export const TemplateGrid: React.FC<TemplateGridProps> = ({ viewMode = "grid" }) => {
  return (
    <div className="w-full mt-12">
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {templateData.map((template, index) => (
            <TemplateCard key={index} {...template} viewMode={viewMode} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4 w-full">
          {templateData.map((template, index) => (
            <TemplateCard key={index} {...template} viewMode={viewMode} />
          ))}
        </div>
      )}
    </div>
  );
}; 