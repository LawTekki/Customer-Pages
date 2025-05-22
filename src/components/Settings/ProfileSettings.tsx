import React, { useState } from "react";
import { FormField } from "./FormField";
import { ProfilePhoto } from "./ProfilePhoto";

export const ProfileSettings: React.FC = () => {
  const [country, setCountry] = useState("Nigeria");
  const [language, setLanguage] = useState("");
  const [phone, setPhone] = useState("+2349876540982");
  const [placeOfBirth, setPlaceOfBirth] = useState("Nigeria");
  const [email, setEmail] = useState("Lawtrolley@gmail.com");
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
      setPhotoPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to API
    alert("Profile updated!\n" + JSON.stringify({ country, language, phone, placeOfBirth, email }));
  };

  return (
    <form onSubmit={handleSubmit} className="grow font-medium leading-[1.3]">
      <div className="flex w-full flex-col items-stretch">
        <div className="flex items-center gap-[13px] mb-4">
          <label htmlFor="profile-photo" className="cursor-pointer flex items-center gap-3 hover:opacity-80 transition-opacity duration-200">
            <img
              src={photoPreview || "https://cdn.builder.io/api/v1/image/assets/c6900276c92b4323bbabc7580415a6ac/7e4f437d377651e9f6e4206d210b875ae3c5f970?placeholderIfAbsent=true"}
              alt="Profile"
              className="aspect-[1] object-contain w-[120px] self-stretch shrink-0 my-auto rounded-full border hover:border-[#6B047C] transition-colors duration-200"
            />
            <div className="self-stretch w-[174px] my-auto">
              <div className="text-[#1A011E] text-sm tracking-[-0.28px]">Select a photo</div>
              <div className="text-[#999] text-xs tracking-[-0.24px] mt-1">Make sure the file is below 2mb</div>
            </div>
            <input
              id="profile-photo"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePhotoChange}
            />
          </label>
        </div>

        <div className="flex w-full gap-4 text-sm flex-wrap mt-4">
          <FormField
            label={
              <>
                Which country do you live in? <span className="text-[#D43705]">*</span>
              </>
            }
          >
            <select
              className="w-full mt-2 px-2.5 py-4 rounded-lg bg-neutral-50 text-[#666] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6B047C]"
              value={country}
              onChange={e => setCountry(e.target.value)}
              required
            >
              <option value="Nigeria">Nigeria</option>
              <option value="Ghana">Ghana</option>
              <option value="Kenya">Kenya</option>
              <option value="South Africa">South Africa</option>
              <option value="Other">Other</option>
            </select>
          </FormField>

          <FormField
            label={
              <>
                Language <span className="text-[#D43705]">*</span>
              </>
            }
          >
            <select
              className="w-full mt-2 px-2.5 py-4 rounded-lg bg-neutral-50 text-[#666] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6B047C]"
              value={language}
              onChange={e => setLanguage(e.target.value)}
              required
            >
              <option value="" disabled>- Select one -</option>
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="Swahili">Swahili</option>
              <option value="Yoruba">Yoruba</option>
              <option value="Other">Other</option>
            </select>
          </FormField>
        </div>

        <FormField
          className="mt-4"
          label={
            <>
              Phone number (
              <span className="text-[#999]">with country code</span> <span className="italic">eg +234</span>) <span className="text-[#D43705]">*</span>
            </>
          }
        >
          <input
            type="tel"
            className="text-[#666] self-stretch w-full mt-2 px-2.5 py-4 rounded-lg bg-neutral-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6B047C]"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
          />
        </FormField>

        <FormField className="mt-4" label="Place of birth">
          <input
            type="text"
            className="text-[#666] self-stretch w-full mt-2 px-2.5 py-4 rounded-lg bg-neutral-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6B047C]"
            value={placeOfBirth}
            onChange={e => setPlaceOfBirth(e.target.value)}
            required
          />
        </FormField>

        <FormField className="mt-4" label="Email">
          <input
            type="email"
            className="text-[#666] self-stretch w-full mt-2 px-2.5 py-4 rounded-lg bg-neutral-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6B047C]"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </FormField>

        <button
          type="submit"
          className="w-full text-sm text-white tracking-[-0.28px] mt-10 min-h-[50px] bg-[#6B047C] py-4 rounded-lg transition-all duration-200 hover:bg-[#4B025A] hover:shadow-lg hover:scale-105"
        >
          Update
        </button>
      </div>
    </form>
  );
};
