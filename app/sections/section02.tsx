import { Image07, Image08 } from "@/constants/images";
import Image from "next/image";

const Section02 = () => {
  return (
    <section className="flex flex-col gap-9 py-10 md:py-24 px-4 md:px-20 2xl:p-32">
      <div className="flex flex-col gap-y-4 md:gap-y-6">
        <h2 className="text-2xl md:text-[40px] font-bold text-white leading-[34px]">
          Designed to Connect You to the World
        </h2>
        <p className="text-sm md:text-2xl font-normal text-primary-light max-w-[340px] md:max-w-[554px] leading-[24px] md:leading-[36px]">
          Dive into a world where meeting new people is just a tap away. Whether
          you're looking to make friends across continents, share stories with
          strangers, or build lasting connections.
        </p>
      </div>

      <div className="flex gap-2 md:gap-5 mt-9 md:-mt-16">
        <div className="w-full rounded-[18px] mt-9 md:mt-36 md:rounded-3xl flex-1 overflow-hidden bg-red-400/10 max-w-[153px] md:max-w-none h-[242px] md:h-[632px]">
          test
        </div>

        <div className="w-full rounded-[18px] md:rounded-3xl flex-1 overflow-hidden bg-red-400/10 h-[247px] md:h-[713px]">
          test
        </div>
      </div>
    </section>
  );
};

export default Section02;
