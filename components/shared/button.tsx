"use client";

import Image from "next/image";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  iconStyle?: string;
  stacked?: boolean;
  loading?: boolean;
  title?: string;
  desc?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  icon,
  iconStyle,
  stacked,
  loading,
  children,
  title,
  desc,
  ...props
}) => {
  return (
    <button
      disabled={loading}
      className="flex items-center justify-center h-11 bg-white rounded-full px-4 py-1 gap-2"
      {...props}
    >
      {icon && (
        <Image
          src={icon}
          alt="icon"
          width={18}
          height={18}
          className={iconStyle}
        />
      )}
      {stacked ? (
        <div className="flex-col text-left space-y-1">
          <p className="text-xs md:text-sm text-primary-dark/80 font-normal -mb-1 leading-none">
            {desc}
          </p>
          <h3 className="text-sm mnd:text-base text-primary-dark/80 font-semibold font-sans leading-none">
            {title}
          </h3>
        </div>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};

export default Button;
