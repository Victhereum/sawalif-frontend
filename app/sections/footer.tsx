import {
  FacebookIcon,
  LinkedInIcon,
  LogoLight,
  XIcon,
} from "@/constants/images";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="py-12 px-4 md:px-20 bg-neutral-gray">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <Image src={LogoLight} alt="Sawalif" />

        <div className="flex flex-col md:flex-row md:items-center gap-y-4 md:gap-x-10">
          <FooterLink txt="Terms & Conditions" link="" />
          <FooterLink txt="Help" link="" />
          <FooterLink txt="Privacy" link="" />
        </div>

        <div className="flex items-center gap-x-6 mt-5 md:mt-0">
          <SocialLink link="" icon={FacebookIcon} name="Facebook" />
          <SocialLink link="" icon={LinkedInIcon} name="LinkedIn" />
          <SocialLink link="" icon={XIcon} name="X | Instagram" />
        </div>
      </div>
    </section>
  );
};

interface FooterLinkProp {
  link: string;
  txt: string;
}

interface SocialLinkProp {
  link: string;
  icon: string;
  name: string;
}

const FooterLink = ({ txt, link }: FooterLinkProp) => {
  return (
    <a
      className="inline-block capitalize text-[#EAECF0] text-base font-medium hover:text-primary transition-all duration-300 ease-in-out"
      href={link}
    >
      {txt}
    </a>
  );
};

const SocialLink = ({ link, icon, name }: SocialLinkProp) => {
  return (
    <div className="rounded-full bg-[#303030] border-[#303030] hover:border hover:bg-transparent w-9 h-9 flex items-center justify-center">
      <a href={link}>
        <Image src={icon} alt={name} width={16} height={16} />
      </a>
    </div>
  );
};

export default Footer;
