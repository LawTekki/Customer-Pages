import React, { useEffect, useState } from "react";
import { ProfileHeader } from "./ProfileHeader";
import { ReviewCard } from "./ReviewCard";

export const ProfileSection: React.FC = () => {
  // Simulated profile and reviews data (replace with API/database call in future)
  const [profile, setProfile] = useState<any>(null);
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate async data fetching
    setTimeout(() => {
      setProfile({
        name: "Wisdom Umanah",
        location: "UK",
        joinDate: "23 June, 2024",
        imageUrl:
          "https://cdn.builder.io/api/v1/image/assets/c6900276c92b4323bbabc7580415a6ac/98412d8373e1b7f2f741608b367407e671c4836f?placeholderIfAbsent=true",
        isOnline: true,
      });
      setReviews([
        {
          userImage:
            "https://cdn.builder.io/api/v1/image/assets/c6900276c92b4323bbabc7580415a6ac/4b639d916a571c7c1d0316b1df1d86fc642aa6da?placeholderIfAbsent=true",
          username: "wisdom umanah",
          title: "Best product purchase",
          content:
            '"I was blown away by the exceptional quality and clarity of the \'LegalShield\' document drafting software! As a solo practitioner, I\'ve struggled to find affordable and user-friendly tools to streamline my workflow. But LegalShield has been a game-changer"',
          productName: "HOW TO LAW RIGHT",
          rating: 5,
        },
        {
          userImage:
            "https://cdn.builder.io/api/v1/image/assets/c6900276c92b4323bbabc7580415a6ac/4b639d916a571c7c1d0316b1df1d86fc642aa6da?placeholderIfAbsent=true",
          username: "wisdom umanah",
          title: "Best product purchase",
          content:
            '"I was blown away by the exceptional quality and clarity of the \'LegalShield\' document drafting software! As a solo practitioner, I\'ve struggled to find affordable and user-friendly tools to streamline my workflow. But LegalShield has been a game-changer"',
          productName: "HOW TO LAW RIGHT",
          rating: 4,
        },
      ]);
      setLoading(false);
    }, 500); // Simulate network delay
  }, []);

  if (loading) {
    return <div>Loading profile...</div>;
  }

  return (
    <section className="flex max-w-[749px] flex-col overflow-hidden items-stretch font-medium bg-white pt-8 px-[35px] rounded-lg max-md:px-5">
      <header className="flex items-stretch gap-5 text-2xl text-[#1A011E] tracking-[-0.48px] leading-[1.3] flex-wrap justify-between max-md:max-w-full">
        <h1 className="text-[#1A011E]">My profile</h1>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/c6900276c92b4323bbabc7580415a6ac/cd6df45331547a64b13ef3db0bdd93ff2a6cf871?placeholderIfAbsent=true"
          alt="Settings"
          className="aspect-[1] object-contain w-6 shrink-0"
        />
      </header>

      <div className="flex flex-col items-stretch mt-4 max-md:max-w-full">
        <ProfileHeader
          name={profile.name}
          location={profile.location}
          joinDate={profile.joinDate}
          imageUrl={profile.imageUrl}
          isOnline={profile.isOnline}
        />

        <div className="flex w-full flex-col items-stretch justify-center mt-2 max-md:max-w-full">
          <h2 className="text-[#808080] text-sm leading-[1.3] tracking-[-0.28px] max-md:max-w-full">
            Reviews:
          </h2>

          {reviews.map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};
