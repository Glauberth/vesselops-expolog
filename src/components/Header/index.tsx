"use client";

import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";

import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";
import { NotificationsNav } from "./NotificationsNav";
import { Logo } from "./Logo";
import { useSidebarDrawer } from "@/contexts/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    //aqui pega o tamanho que a página ta, sm, md, lg
    base: false, // Quando for antes do lg vai ser false
    lg: true, // Quando passar do lg vai ser false
  });
  return (
    <Flex
      // name="barrasuperior"
      // as="header"
      width="100%"
      maxWidth={1480}
      h="20" //Quando uso um numero como string, o Chakra entende que é pra usar como espaçamento, e não tamanho!
      mx="auto"
      mt="4"
      px="6"
      alignItems="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open Navigation"
          icon={<Icon as={RiMenuLine} />} //
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}
      <Logo />
      {/* {isWideVersion && <SearchBox />} */}
      {/* ml='auto' joga todo o conteúdo dele para a direita */}
      <Flex alignItems="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
