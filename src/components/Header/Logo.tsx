import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";

export function Logo() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      <Link href="/dashboard" passHref>
        <Flex
          direction="row"
          // alignItems="center"
          mt={20}
        >
          <Box boxSize="200px">
            <Image
              src="/images/logo.png"
              // bg="gray.50"
              // borderRadius="full"
              alt="Picture of the author"
            />
          </Box>

          {/* {isWideVersion && (
            <Text
              ml={2}
              fontSize={["2xl", "3xl"]}
              fontWeight="bold"
              letterSpacing="tight"
              w="64"
            >
              Vessel
              <Text
                fontSize="sm"
                color="pink.500"
                as="span" //Quando eu coloco como span ele fica com display block
              >
                .Ops
              </Text>
            </Text>
          )} */}
        </Flex>
      </Link>
    </>
  );
}
