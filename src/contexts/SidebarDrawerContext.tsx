import { ReactNode, createContext, useContext, useEffect } from "react";
import { UseDisclosureReturn, useDisclosure } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {
  const disclousure = useDisclosure();
  const pathname = usePathname(); //Aqui pega a URI, que é depois do domínio

  useEffect(() => {
    disclousure.onClose();
    // console.log(pathname);
  }, [pathname]);

  return (
    <SidebarDrawerContext.Provider value={disclousure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
