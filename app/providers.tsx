"use client";

import { ThemeProvider } from "@/features/theme/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { PropsWithChildren } from "react";

export type ProvidersProps = PropsWithChildren;

export const Providers = (props: ProvidersProps) => {
  return (
    <ThemeProvider
      attribute="class"
      disableTransitionOnChange
    >
      <Toaster />
      {props.children}
    </ThemeProvider>
  );
};