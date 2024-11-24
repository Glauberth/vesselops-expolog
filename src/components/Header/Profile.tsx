import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  // const { user } = useDadosUserContext();

  // console.log(user);
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>User Teste</Text>
          <Text color="gray.300" fontSize="small">
            email@teste.com
          </Text>
        </Box>
      )}
      <Avatar
        // mr="0"
        size="md"
        name="email@teste.com"
        src=""
      />
    </Flex>
  );
}
