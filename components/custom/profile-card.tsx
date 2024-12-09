"use client";

import Image from "next/image";

export interface ProfileCardProp {
  image: string;
  name: string;
  flag: string;
}

const ProfileCard = ({ image, name, flag }: ProfileCardProp) => {
  return (
    <div className="flex-shrink-0 w-[18.75rem] h-[28.125rem] bg-[#AFADA9]/30 rounded-3xl overflow-hidden relative">
      <Image src={image} alt={name} className="w-full h-full" />

      <div className="absolute left-6 bottom-10 flex items-center gap-x-3">
        <h3 className="text-white text-2xl font-bold capitalize">{name}</h3>
        <Image src={flag} alt={name} width={24} height={24} />
      </div>
    </div>
  );
};

export default ProfileCard;
