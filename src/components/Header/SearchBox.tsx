import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  function handleLog() {
    console.log("renderizou server");
  }
  return (
    <Flex
      //* Criação do Input
      //- A melhor forma de fazer um imput com icone é dessa forma::
      id="searchInput"
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled" //dessa forma ele fica sem borda e sem background
        px="4"
        mr="4"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: "gray.400" }}
        onChange={() => handleLog()}
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
