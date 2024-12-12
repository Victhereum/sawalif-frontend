import { AppIllustration, AppstoreIcon } from "@/constants/images";
import { Button } from "@/components/shared";
import { PlaystoreIcon } from "@/constants/images";
import React from "react";
import Image from "next/image";

const Section04 = () => {
  return (
    <section className="py-10 md:py-24 px-4 md:px-20 2xl:p-32">
      <div className="w-full bg-primary md:h-[556px] rounded-2xl md:rounded-3xl px-4 md:px-16 pt-10 md:mt-0 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4 overflow-hidden">
        <div className="flex flex-col gap-y-10">
          <h2 className="w-[276px] md:w-[553px] text-[1.75rem] md:text-6xl font-bold text-white leading-10 md:leading-[72px]">
            Download the app and randomly chat with pleasure!
          </h2>
          <div className="w-full flex items-center self-start gap-x-3">
            <Button
              stacked
              title="Google Play"
              desc="Get it on"
              icon={PlaystoreIcon}
            />

            <Button
              stacked
              title="App Store"
              desc="Download on the"
              icon={AppstoreIcon}
            />
          </div>
        </div>

        <div className="md:h-[600px] h-auto px-5">
          <Image src={AppIllustration} alt="icon" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Section04;
