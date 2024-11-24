import {
  Icon,
  Text,
  LinkProps as ChakraLinkProps,
  Box,
} from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  //Eu uso essa tipagem pra poder passar a
  //referencia do compoenente assim: {RiDashboard2Line} e não a
  //declaração do componente: <RiDashboard2Line />
  icon: ElementType;
  children: string;
  href: string;
}
export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href}>
      <Box display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20"></Icon>
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </Box>
    </ActiveLink>
  );
}
