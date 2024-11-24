"use client";

import { VesselLocationData } from "@/hooks/data/VesselLocationStatic";
import {
  Box,
  Select,
  SimpleGrid,
  Stack,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Table,
} from "@chakra-ui/react";
// import Image from "next/image";
import { useEffect, useState } from "react";
import { countries } from "@/hooks/data/Contry";
import { islands } from "@/hooks/data/Islands";

const propsRating = ["A", "B", "C", "D", "E", "F", "G"];
export default function Dashboard() {
  const [vessel, setVessel] = useState("");
  const [imo, setImo] = useState(0);
  const [countre, setCountre] = useState("");
  const [island, setIsland] = useState("");
  const [yearBuilt, setYearBuilt] = useState(0);
  const [ytd, setYtd] = useState(0);
  const [target, setTarget] = useState(0);
  const [scrubbers, setScrubbers] = useState<"NO" | "YES">("NO");
  // const [rating, setRating] = useState("");

  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomFloat(min: number, max: number, precision = 2) {
    const scale = Math.pow(10, precision);
    return Math.round((Math.random() * (max - min) + min) * scale) / scale;
  }

  function getLetterForRating(rating: number) {
    // Arredonda o valor para o inteiro mais próximo
    const roundedRating = Math.round(rating);

    // Condição para garantir que a nota esteja entre 1 e 6
    return (
      roundedRating >= 1 && roundedRating <= 7 && propsRating[roundedRating - 1]
    );
  }

  console.log(getRandomInt(1, 10)); // Exemplo: 7

  useEffect(() => {
    setImo(getRandomInt(100000, 70000));
    setYtd(getRandomFloat(4, 7));
    setTarget(getRandomFloat(1, 7));

    const randomItem = countries[Math.floor(Math.random() * countries.length)];
    setCountre(randomItem);

    const randomIsland = islands[Math.floor(Math.random() * islands.length)];
    setIsland(randomIsland);

    setYearBuilt(getRandomInt(1999, 2024));

    if (scrubbers == "NO") {
      setScrubbers("YES");
    } else {
      setScrubbers("NO");
    }
  }, [vessel]);

  return (
    <Box
      flex="1"
      p={["6", "8"]}
      borderRadius="8"
      bg={"gray.800"}
      height={"100%"}
    >
      <Stack w={200}>
        <h1>Vessel:</h1>
        <Select
          sx={{
            option: {
              backgroundColor: "gray.200", // Cor de fundo padrão
              color: "black", // Cor do texto
              _hover: {
                backgroundColor: "blue.500", // Cor ao passar o mouse
                color: "white", // Cor do texto ao passar o mouse
              },
            },
          }}
          size={"xs"}
          onChange={(e) => setVessel(e.target.value)}
        >
          {VesselLocationData.map((item, index) => {
            return (
              <option key={index} value={item.MetaData.ShipName}>
                {item.MetaData.ShipName}
              </option>
            );
          })}
        </Select>
      </Stack>
      <SimpleGrid minChildWidth="250px" spacing={["6", "8"]} w="100%">
        <Box
          p={2}
          marginTop={2}
          marginBottom={2}
          width="100%" // Largura do quadrado
          height="auto" // Altura do quadrado
          border="1px solid" // Espessura e tipo do contorno
          borderColor="gray.500" // Cor do contorno
          bg="transparent" // Sem preenchimento
          borderRadius="md" // Borda arredondada (opcional)
        >
          <TableContainer>
            <Table
              size="xs"
              variant="simple"
              // bg={"ActiveCaption"}
              borderRadius={"2xl"}
              // sx={{ borderCollapse: "collapse" }}
            >
              <Thead>
                <Tr>
                  <Th>Lolita</Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                  {/* <Th>into</Th>
                  <Th isNumeric>multiply by</Th> */}
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>IMO</Td>
                  <Td isNumeric>{imo}</Td>
                  <Td>Comercial Operator</Td>
                  <Td>DryDel Shipping</Td>
                </Tr>
                <Tr>
                  <Td>Vessel Class</Td>
                  <Td>Handymax</Td>
                  <Td>Flag</Td>
                  <Td>{island}</Td>
                </Tr>
                <Tr>
                  <Td>Year Built</Td>
                  <Td isNumeric>{yearBuilt}</Td>
                  <Td>Scrubbers</Td>
                  <Td>{scrubbers}</Td>
                </Tr>
                <Tr>
                  <Td>Deadweight</Td>
                  <Td isNumeric>40.420</Td>
                  <Td>Country</Td>
                  <Td>{countre}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Box
          p={2}
          marginTop={2}
          marginBottom={2}
          width="100%" // Largura do quadrado
          height="auto" // Altura do quadrado
          border="1px solid" // Espessura e tipo do contorno
          borderColor="gray.500" // Cor do contorno
          bg="transparent" // Sem preenchimento
          borderRadius="md" // Borda arredondada (opcional)
        >
          <Stack justifyContent={"space-between"}>
            <Stack direction={"row"} mt={1} mb={3}>
              <Text>CII</Text>
              <Text fontSize={12} marginTop={1}>
                Carbon Intensity Indicator
              </Text>
            </Stack>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Box ml={5}>
                <Stack>
                  <Box textAlign={"center"} fontWeight={"bold"} fontSize={"xs"}>
                    YTD
                  </Box>
                  <Box textAlign={"center"} fontSize={30}>
                    {ytd}
                  </Box>
                  <Box textAlign={"center"}>g-CO2/capacity mile</Box>
                </Stack>
              </Box>
              <Box w={100}>
                <Stack>
                  <Box textAlign={"center"} fontWeight={"bold"} fontSize={"xs"}>
                    Target
                  </Box>
                  <Box textAlign={"center"} fontSize={30}>
                    {target}
                  </Box>
                </Stack>
              </Box>
              <Box w={100} mr={5}>
                <Stack height={"100%"}>
                  <Box
                    rounded={10}
                    height={"100%"}
                    textAlign={"center"}
                    fontWeight={"bold"}
                    fontSize={"xs"}
                    alignContent={"center"}
                    color={"black"}
                    bg={
                      getLetterForRating(target) == "A"
                        ? "green.200"
                        : getLetterForRating(target) == "B"
                        ? "blue.200"
                        : getLetterForRating(target) == "C"
                        ? "yellow.200"
                        : getLetterForRating(target) == "D"
                        ? "orange.200"
                        : getLetterForRating(target) == "E"
                        ? "red.200"
                        : "red.200"
                    }
                  >
                    <Text fontSize={20}>{getLetterForRating(target)}</Text>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
