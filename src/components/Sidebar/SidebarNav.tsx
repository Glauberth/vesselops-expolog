import { Stack } from "@chakra-ui/react";
import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";
import {
  RiContactsBook2Line,
  RiContactsLine,
  RiDashboard2Line,
  RiPassValidLine,
} from "react-icons/ri";

export function SiderbarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboard2Line} href="/dashboard">
          DashBoard
        </NavLink>
        {/* <NavLink icon={RiContactsBook2Line} href="/sof">
          SOF - Statement of Facts
        </NavLink> */}
        {/* <NavLink icon={RiContactsLine} href="/usuarios">
          Usuários
        </NavLink> */}
      </NavSection>

      {/* <NavSection title="CADASTROS">
        <NavLink icon={RiContactsBook2Line} href="/pacientes">
          Terminais
        </NavLink>
        <NavLink icon={RiPassValidLine} href="/operadoras">
          Portos
        </NavLink>
        <NavLink icon={RiPassValidLine} href="/operadoras">
          Navios
        </NavLink>
        <NavLink icon={RiPassValidLine} href="/operadoras">
          Agentes
        </NavLink>
        <NavLink icon={RiPassValidLine} href="/operadoras">
          Produtos / Carga
        </NavLink>
        <NavLink icon={RiPassValidLine} href="/operadoras">
          Shippers
        </NavLink>
        <NavLink icon={RiContactsLine} href="/usuarios">
          Usuários
        </NavLink>
      </NavSection> */}
    </Stack>
  );
}
