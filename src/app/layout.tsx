"use client";

import { SidebarDrawerProvider } from "@/contexts/SidebarDrawerContext";

import { theme } from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-Br">
      <title>Vessel.Ops</title>
      <body>
        <SidebarDrawerProvider>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </SidebarDrawerProvider>
      </body>
    </html>
  );
}
