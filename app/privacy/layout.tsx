import React, { ReactNode } from "react";

export default function PrivacyLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <div>{children}</div>;
}
