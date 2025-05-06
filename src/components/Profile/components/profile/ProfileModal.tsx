import React from "react";
import { X } from "lucide-react";

interface Review {
  id: string;
  reviewer: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  productName: string;
}

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const mockReviews: Review[] = [
    {
      id: "1",
      reviewer: "wisdom umanah",
      rating: 4,
      title: "Best product purchase",
      content: "\"I was blown away by the exceptional quality and clarity of the 'LegalShield' document drafting software! As a solo practitioner, I've struggled to find affordable and user-friendly tools to streamline my workflow. But LegalShield has been a game-changer\"",
      date: "June 15, 2024",
      productName: "HOW TO LAW RIGHT"
    },
    {
      id: "2",
      reviewer: "wisdom umanah",
      rating: 4,
      title: "Best product purchase",
      content: "\"I was blown away by the exceptional quality and clarity of the 'LegalShield' document drafting software! As a solo practitioner, I've struggled to find affordable and user-friendly tools to streamline my workflow. But LegalShield has been a game-changer\"",
      date: "June 10, 2024",
      productName: "HOW TO LAW RIGHT"
    }
  ];

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-md shadow-lg w-full max-h-[90vh] overflow-y-auto max-w-[95%] sm:max-w-lg md:max-w-2xl">
        <div className="p-4 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>

          <h2 className="text-xl font-medium mb-6">My profile</h2>

          <div className="flex flex-col items-center mb-6">
            <div className="relative">
              <img
                src="/ProfileFrame.jpg"
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="absolute bottom-[10%] right-[10%] w-3.5 h-3.5 bg-[#1C7C04] rounded-full border-2 border-white translate-x-1/4 translate-y-1/4 "></div>
            </div>

            <h3 className="text-base sm:text-lg font-medium mt-3">Wisdom Umanah <span className="text-gray-500 font-normal">(UK)</span></h3>
            <p className="text-xs sm:text-sm text-gray-500">Joined in: 23 June, 2024</p>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-500 mb-3">Reviews:</h4>

            <div className="space-y-4">
              {mockReviews.map((review) => (
                <div key={review.id} className="border border-gray-200 rounded-md p-3 sm:p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                      <img
                        src="/ProfileFrame.jpg"
                        alt="Reviewer"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{review.reviewer}</p>
                      <div className="flex">{renderStars(review.rating)}</div>
                    </div>
                  </div>

                  <h5 className="font-medium mb-1 text-sm sm:text-base">{review.title}</h5>
                  <p className="text-xs sm:text-sm text-gray-700 mb-2 break-words">{review.content}</p>

                  <div className="text-xs text-gray-500">
                    <p>Review for</p>
                    <p className="font-medium uppercase">{review.productName}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
