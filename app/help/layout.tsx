import React, { ReactNode } from "react";

export default function HelpLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <div>{children}</div>;
}
