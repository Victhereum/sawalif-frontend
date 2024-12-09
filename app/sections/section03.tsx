import { CardBgIcon, GlodeIcon, VcIcon } from "@/constants/images";
import Image from "next/image";

const Section03 = () => {
  return (
    <section className="py-10 md:py-24 px-4 md:px-20 2xl:p-32 flex flex-col gap-y-10 md:gap-y-14">
      <div className="flex flex-col items-center gap-y-5 md:gap-y-6">
        <h2 className="text-[28px] md:text-[48px] font-bold text-white leading-none">
          Call. Chat. Make Friends
        </h2>
        <p className="text-sm md:text-xl font-normal text-primary-light leading-none">
          Effortless Matching, Meaningful Conversations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-accent-purple pt-10 md:pt-[3.75rem] overflow-hidden flex flex-col items-center gap-8 rounded-3xl max-h-[972px]">
          <div className="flex flex-col items-center gap-3 md:gap-5">
            <h2 className="text-xl md:text-4xl text-[#1E1E1E] font-bold leading-none">
              Create Random Conservation
            </h2>
            <p className="text-sm md:text-xl text-neutral-gray100 text-center">
              Connect with random users globally with a single tap, enabling
              spontaneous audio conversations.
            </p>
          </div>

          <Image src={VcIcon} alt="icon" className="w-[251px] md:w-[430px]" />
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-neutral-gray rounded-3xl relative overflow-hidden w-full h-[429px] md:h-[410px]">
            <div className="flex flex-col items-center md:items-start gap-2 md:gap-y-5 pl-5 pt-10 absolute">
              <h3 className="text-xl md:text-[2rem] font-bold text-white text-center md:text-left leading-none">
                Privacy and Safety Features
              </h3>
              <p className="text-primary-light text-sm md:text-xl text-center md:text-left leading-6 md:leading-[28px] max-w-[300px]">
                Conversations are secure with encryption and moderation tools.
              </p>
            </div>

            <Image src={CardBgIcon} alt="icon" className="w-full h-full" />
          </div>

          <div className="h-[430px] md:h-auto md:flex-1 bg-primary rounded-3xl overflow-hidden relative">
            <div className="flex flex-col items-center md:items-start gap-2 md:gap-y-5 pl-5 pt-10">
              <h3 className="text-xl md:text-[2rem] font-bold text-white text-center md:text-left leading-none">
                Global Networking
              </h3>
              <p className="text-primary-light text-sm md:text-xl text-center md:text-left leading-6 md:leading-[28px] max-w-[450px]">
                Meet people from different countries, share cultures, and make
                global connections effortlessly.
              </p>
            </div>

            <Image src={GlodeIcon} alt="icon" className="absolute bottom-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section03;
