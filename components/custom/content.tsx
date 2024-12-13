import React, { ReactNode } from "react";

interface ContentProps {
  title: string;
  desc?: string;
  content?: ReactNode;
}

const Content = ({ title, desc, content }: ContentProps) => {
  return (
    <div>
      <div className="flex flex-col gap-y-5">
        <h2
          className="text-primary-dark font-normal text-3xl
        "
        >
          {title}
        </h2>

        <div>
          <p className="text-neutral-gray200 text-base font-normal">{desc}</p>
          {content}
        </div>
      </div>
    </div>
  );
};

export default Content;
