import { ProfileCard } from "@/components/custom";
import { Button } from "@/components/shared";
import { ProfileData01, ProfileData02 } from "@/constants";
import { AppstoreIcon, PlaystoreIcon } from "@/constants/images";
import { Fragment } from "react";

const Hero = () => {
  return (
    <section className="md:h-screen overflow-clip flex flex-col md:flex-row gap-12 md:gap-20 pt-14 md:pt-0 justify-center md:justify-between md:items-center pl-4 md:pl-20 2xl:pl-32 md:pr-10">
      <div className="flex flex-none flex-col gap-y-6 md:gap-y-10 w-[308px] md:w-[664px] md:mt-16">
        <div className=" flex flex-col gap-y-4 md:gap-y-6">
          <h1 className="text-[1.75rem] md:text-6xl font-bold text-white leading-10 md:leading-[85px]">
            Connect With Random People Around the World Instantly
          </h1>
          <p className="text-sm md:text-xl font-medium text-primary-light">
            One tap to meet new friends, anytime, anywhere.
          </p>
        </div>

        <div className="w-full flex items-center gap-x-4">
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

      <div className="flex flex-row md:flex-row-reverse gap-4 md:gap-5 animate-move-left [animation-duration:90s] md:animate-none">
        <div className="flex flex-none md:flex-col gap-x-5 md:gap-y-7 md:animate-move-up md:[animation-duration:90s]">
          {new Array(3).fill(0).map((_, index) => (
            <Fragment key={index}>
              {ProfileData01.map((item, index) => (
                <ProfileCard {...item} key={index} />
              ))}
            </Fragment>
          ))}
        </div>

        <div className="flex flex-none md:flex-col gap-x-5 md:gap-y-7 md:animate-move-down md:[animation-duration:90s]">
          {new Array(3).fill(0).map((_, index) => (
            <Fragment key={index}>
              {ProfileData02.map((item, index) => (
                <ProfileCard {...item} key={index} />
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
